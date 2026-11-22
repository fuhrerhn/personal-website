import "server-only";
import { profile } from "@/data/profile";
import type { MessageInput } from "./message";

// Emails the owner through Resend. Returns true if Resend accepted it.
// Until a domain is verified, Resend only sends to the account's own email,
// so CONTACT_TO_EMAIL has to be that address.
export async function sendNotificationEmail({ name, email, message }: MessageInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.CONTACT_TO_EMAIL || profile.links.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: name ? `New portfolio message from ${name}` : "New portfolio message",
        text: [`Name: ${name || "(not given)"}`, `Email: ${email || "(not given)"}`, "", message].join("\n"),
        ...(email ? { reply_to: email } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) console.error("[contact] email failed with status", response.status);
    return response.ok;
  } catch (error) {
    console.error("[contact] email failed:", error instanceof Error ? error.message : "unknown error");
    return false;
  }
}
