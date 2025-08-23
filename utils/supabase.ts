import { optEnv } from "@/lib/env";
// utils/supabase.ts
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export function createClient() {
  const url = optEnv("NEXT_PUBLIC_SUPABASE_URL") || ""
  const anonKey = optEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY") || ""

  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY'
    )
  }

  return createSupabaseClient(url, anonKey)
}
