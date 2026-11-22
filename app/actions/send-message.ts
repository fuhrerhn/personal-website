"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { cleanMessageInput, validateMessage, type MessageErrors, type MessageInput } from "@/lib/message";
import { sendNotificationEmail } from "@/lib/notify";
import { getSupabaseAdmin, type SupabaseAdmin } from "@/lib/supabase-admin";

export type SendMessageResult =
  | { ok: true }
  | { ok: false; reason: "invalid"; errors: MessageErrors }
  | { ok: false; reason: "rate_limited" | "unavailable" };

// bots submit instantly, a person needs a few seconds
const MIN_FILL_MS = 2500;
const HOURLY_LIMIT = 3;
const DAILY_LIMIT = 10;

// hash of the visitor's IP, only used for rate limiting (the IP itself is never stored)
async function senderHash(): Promise<string | null> {
  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "";
  if (!ip) return null;

  const salt = process.env.MESSAGE_HASH_SALT || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

async function recentCount(supabase: SupabaseAdmin, hash: string, sinceMs: number): Promise<number> {
  const since = new Date(Date.now() - sinceMs).toISOString();
  const { count, error } = await supabase
    .from("messages")
    .select("id", { count: "exact", head: true })
    .eq("sender_hash", hash)
    .gte("created_at", since);

  if (error) {
    console.error("[contact] rate-limit lookup failed:", error.message);
    return 0; // don't block real people because of a database error
  }
  return count ?? 0;
}

async function saveMessage(supabase: SupabaseAdmin, input: MessageInput, hash: string | null): Promise<boolean> {
  const { error } = await supabase.from("messages").insert({
    name: input.name || null,
    email: input.email || null,
    message: input.message,
    sender_hash: hash,
  });

  if (error) console.error("[contact] insert failed:", error.message);
  return !error;
}

export async function sendMessage(formData: FormData): Promise<SendMessageResult> {
  // honeypot filled, or sent too fast: pretend it worked and drop it.
  // "elapsed" is measured in the browser, so clock differences can't cause false positives.
  const honeypot = formData.get("contact_extra");
  const elapsed = Number(formData.get("elapsed"));
  if ((typeof honeypot === "string" && honeypot.trim() !== "") || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return { ok: true };
  }

  const input = cleanMessageInput({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  const errors = validateMessage(input);
  if (Object.keys(errors).length > 0) return { ok: false, reason: "invalid", errors };

  const supabase = getSupabaseAdmin();
  const hash = await senderHash();

  if (supabase && hash) {
    const [lastHour, lastDay] = await Promise.all([
      recentCount(supabase, hash, 60 * 60 * 1000),
      recentCount(supabase, hash, 24 * 60 * 60 * 1000),
    ]);
    if (lastHour >= HOURLY_LIMIT || lastDay >= DAILY_LIMIT) return { ok: false, reason: "rate_limited" };
  }

  // save and email at the same time; either one working counts as delivered
  const [saved, emailed] = await Promise.all([
    supabase ? saveMessage(supabase, input, hash) : Promise.resolve(false),
    sendNotificationEmail(input),
  ]);

  return saved || emailed ? { ok: true } : { ok: false, reason: "unavailable" };
}
