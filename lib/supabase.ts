'use client'

import { createClient } from '@supabase/supabase-js'

// ✅ Trim trailing slashes from the URL
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, '')

// Support both 2025+ and legacy env vars
const supabasePublicKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Export a client if keys exist, otherwise null
export const supabase =
  supabaseUrl && supabasePublicKey
    ? createClient(supabaseUrl, supabasePublicKey)
    : null

function requireClient() {
  if (!supabase) {
    throw new Error(
      '❌ Supabase client not configured. Check NEXT_PUBLIC_SUPABASE_URL and keys in your env settings.'
    )
  }
  return supabase
}

// 🧠 Store mode toggle (stim/calm)
export const insertMood = async (mode: 'stim' | 'calm', user_id?: string): Promise<boolean> => {
  const client = requireClient()
  const { error } = await client.from('mood_preferences').insert([
    {
      mode,
      user_id: user_id || null,
    },
  ])
  if (error) {
    throw new Error(`Failed to insert mood: ${error.message}`)
  }
  return true
}

// 📝 Store journal entry
export const insertJournal = async (entry: string, user_id?: string): Promise<boolean> => {
  const client = requireClient()
  const { error } = await client.from('journal_entries').insert([
    {
      entry,
      user_id: user_id || null,
    },
  ])
  if (error) {
    throw new Error(`Failed to insert journal: ${error.message}`)
  }
  return true
}

// (Optional) ✉️ Get current user if using Supabase Auth
export const getCurrentUser = async () => {
  const client = requireClient()
  const { data, error } = await client.auth.getUser()
  if (error) throw new Error(`Failed to get user: ${error.message}`)
  return data.user
}

// 📚 Fetch all journal entries for a user
export const getUserJournals = async (user_id: string): Promise<any[]> => {
  const client = requireClient()
  const { data, error } = await client
    .from('journal_entries')
    .select('*')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false })

  if (error) throw new Error(`Failed to fetch journal entries: ${error.message}`)
  return data ?? []
}
