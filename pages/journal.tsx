'use client'

import { useState } from 'react'
import { insertJournal, getCurrentUser } from '@/lib/supabase'

export default function JournalEntry() {
  const [text, setText] = useState('')
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSave = async () => {
    if (!text.trim()) return
    setSaving(true)

    try {
      const user = await getCurrentUser()
      await insertJournal(text, user?.id)
      setSuccess(true)
      setText('')
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error('Error saving journal:', err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-12 px-4 text-white space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder="What’s on your mind?"
        className="w-full rounded-xl bg-white/10 p-4 text-white border border-white/20 backdrop-blur placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
      <button
        onClick={handleSave}
        disabled={saving}
        className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition disabled:opacity-50"
      >
        {saving ? 'Saving...' : 'Save Entry'}
      </button>

      {success && <p className="text-green-400">✓ Entry saved</p>}
    </div>
  )
}
