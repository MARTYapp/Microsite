import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function MartyChat() {
  const [entry, setEntry] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [history, setHistory] = useState<{ entry: any; created_at: any }[]>([])

  useEffect(() => {
    const fetchEntries = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return
      const { data, error } = await supabase
        .from('journal_entries')
        .select('entry, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      if (!error) setHistory(data)
    }
    fetchEntries()
  }, [saved])

  const saveEntry = async () => {
    if (!entry.trim()) return
    setSaving(true)
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error || !user) throw new Error('Auth session missing')

      const { error: insertError } = await supabase
        .from('journal_entries')
        .insert([{ entry, user_id: user.id }])

      if (insertError) throw new Error(insertError.message)

      setEntry('')
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      console.error('Error saving journal:', err.message)
    } finally {
      setSaving(false)
    }
  }
  return (
    <div className="max-w-sm mx-auto h-[90vh] bg-black text-white rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {history.map((item, idx) => (
          <div key={idx} className="flex flex-col items-end">
            <p className="text-[10px] text-gray-400 mb-1">
              {new Date(item.created_at).toLocaleTimeString()}
            </p>
            <div className="bg-purple-700 text-white p-3 rounded-2xl rounded-br-none max-w-[80%] self-end font-mono text-sm">
              {item.entry}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 p-3 bg-neutral-950 flex gap-2 items-center">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows={1}
          placeholder="Type to Marty..."
          className="flex-1 resize-none bg-neutral-900 text-white font-mono text-sm p-3 rounded-full border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          onClick={saveEntry}
          disabled={saving}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-800 transition rounded-full text-sm font-semibold disabled:opacity-50"
        >
          {saving ? '...' : 'Send'}
        </button>
      </div>
    </div>
  )
}