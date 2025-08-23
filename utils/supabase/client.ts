import { createClient } from '@supabase/supabase-js'
import { optEnv } from "@/lib/env";

const url = optEnv("NEXT_PUBLIC_SUPABASE_URL") || ""
const publicKey =
  optEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY") || "" ||
  optEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY") || ""

// Browser/server-safe anon client for the Pages Router
export const supabase = createClient(url, publicKey)
