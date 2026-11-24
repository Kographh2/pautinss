import { createClient } from "@supabase/supabase-js";

// Server only. Jangan import file ini dari komponen client.
export function db() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
}
