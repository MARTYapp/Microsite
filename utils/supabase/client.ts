'use client'

import { createBrowserClient } from '@supabase/ssr'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const publicKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * Browser-side Supabase client (App Router friendly).
 * We validate envs when the factory is called, not at module import time.
 */
export const createClient = () => {
  if (!url || !publicKey) {
    throw new Error('❌ Supabase not configured: set NEXT_PUBLIC_SUPABASE_URL and a public key.')
  }
  return createBrowserClient(url, publicKey)
}