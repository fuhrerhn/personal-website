import "server-only";
import { createClient } from "@supabase/supabase-js";

// Uses the service role key, which bypasses RLS, so it stays on the server (no NEXT_PUBLIC_ prefix).
// Returns null when the env vars are missing, so the form can still fall back to email.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export type SupabaseAdmin = NonNullable<ReturnType<typeof getSupabaseAdmin>>;
