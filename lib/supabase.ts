import { createClient } from '@supabase/supabase-js'

// ✅ Trim trailing slashes from the URL
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, '')
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 🔐 Validate env variables
if (!supabaseUrl?.startsWith('https://') || !supabaseAnonKey) {
  throw new Error(
    '❌ Invalid Supabase credentials: Check NEXT_PUBLIC_SUPABASE_URL and ANON_KEY in both .env and Vercel settings.'
  )
}

// 🎯 Create client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 🧠 Store mode toggle (stim/calm)
export const insertMood = async (mode: 'stim' | 'calm', user_id?: string) => {
  const { error } = await supabase.from('mood_preferences').insert([
    {
      mode,
      user_id: user_id || null,
    },
  ])
  if (error) throw new Error(`Failed to insert mood: ${error.message}`)
}

// 📝 Store journal entry
export const insertJournal = async (entry: string, user_id?: string) => {
  const { error } = await supabase.from('journal_entries').insert([
    {
      entry,
      user_id: user_id || null,
    },
  ])
  if (error) throw new Error(`Failed to insert journal: ${error.message}`)
}

// (Optional) ✉️ Get current user if using Supabase Auth
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser()
  if (error) throw new Error(`Failed to get user: ${error.message}`)
  return data.user
}