export default function Dashboard() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-black">
      <h1 className="text-4xl font-bold mb-6">Your MARTY Dashboard</h1>
      <p className="mb-6 text-lg max-w-xl">
        Your calm command center. Track patterns. Speak your truth. Use real tools that don't gaslight you.
      </p>
      <ul className="space-y-4 text-base leading-relaxed">
        <li>📓 <strong>Journal:</strong> Voice or text your thoughts — no filter, no pressure.</li>
        <li>🧠 <strong>Pattern Recognizer:</strong> Track your triggers and emotional loops — visually.</li>
        <li>🧰 <strong>Skills Toolkit:</strong> Tap into DBT + EF tools that work in the moment.</li>
      </ul>
    </div>
  )
}
