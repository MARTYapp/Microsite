import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data, error } = await supabase
        .from("journal_entries")
        .select("entry, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (!error) setHistory(data);
    };
    fetchEntries();
  }, [saved]);

  const saveEntry = async () => {
    if (!entry.trim()) return;
    setSaving(true);
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) throw new Error("Auth session missing");

      const { error: insertError } = await supabase
        .from("journal_entries")
        .insert([{ entry, user_id: user.id }]);

      if (insertError) throw new Error(insertError.message);

      setEntry("");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error("Error saving journal:", err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 space-y-8 overflow-y-auto">
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        rows={6}
        placeholder="Type it. No one’s watching."
        className="w-full resize-none bg-neutral-950 text-white font-mono text-lg leading-relaxed border border-neutral-800 p-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <div className="flex justify-end">
        <button
          onClick={saveEntry}
          disabled={saving}
          className="px-6 py-2 bg-purple-700 hover:bg-purple-800 transition rounded-lg text-sm font-semibold disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Entry'}
        </button>
      </div>
      {saved && <p className="text-green-500">✓ Entry saved</p>}

      <div className="space-y-6 border-t border-neutral-800 pt-8">
        {history.map((item, idx) => (
          <div
            key={idx}
            className="bg-neutral-950 p-5 rounded-lg border border-neutral-800"
          >
            <p className="text-sm text-neutral-500 mb-2">
              {new Date(item.created_at).toLocaleString()}
            </p>
            <p className="whitespace-pre-wrap font-mono text-base text-white">
              {item.entry}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
