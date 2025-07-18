
import { createClient } from '@supabase/supabase-js';

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, ''); // Trim trailing slash
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl?.startsWith('https://') || !supabaseAnonKey) {
  throw new Error('❌ Invalid Supabase credentials: Check NEXT_PUBLIC_SUPABASE_URL and ANON_KEY in both .env and Vercel settings.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
