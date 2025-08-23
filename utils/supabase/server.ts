import { optEnv } from "@/lib/env";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = optEnv("NEXT_PUBLIC_SUPABASE_URL") || "";
const supabaseKey = optEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY") || "";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        async getAll() {
          return (await cookieStore).getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(async ({ name, value, options }) => (await cookieStore).set(name, value, options))
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
