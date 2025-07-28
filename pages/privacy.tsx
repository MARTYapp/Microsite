export default function Privacy() {
  return (
    <div className="min-h-screen p-8 text-white bg-black">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        We take your privacy seriously. MARTY is built to respect your boundaries and protect your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🔐 What We Collect</h2>
      <p className="mb-4">
        We collect minimal data to help you use the app effectively—this may include journal entries, mood tags, and usage patterns. No voice recordings or private messages are ever sold or shared.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🧠 How We Use It</h2>
      <p className="mb-4">
        Data powers features like the Pattern Recognizer and your personalized journaling prompts. It's used solely to improve your experience within the app.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🛡️ Data Security</h2>
      <p className="mb-4">
        We use Supabase with RLS (Row Level Security) to ensure your data is protected. You control what you write, track, and store.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🔗 Third Parties</h2>
      <p className="mb-4">
        We use third-party tools (like Supabase and Netlify) only for secure hosting and database management. No advertisers, no trackers, no creepy stuff.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">📬 Questions or Concerns?</h2>
      <p className="mb-4">
        You can always reach out at <a href="mailto:privacy@themartyapp.com" className="text-amber-400 underline">privacy@themartyapp.com</a>. We're here to keep things human, honest, and secure.
      </p>
    </div>
  )
}
