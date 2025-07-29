export default function Dashboard() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-black">
      <h1 className="text-4xl font-bold mb-6">MARTY DASHBOARD</h1>
      <p className="mb-6 text-lg max-w-xl">
        Daily rituals. Emotional reflection. Tools that work. All in one place — built for your real life.
      </p>
      <ul className="space-y-4 text-base leading-relaxed">
        <li>📓 <strong>Journal Entries:</strong> Speak your mind or type it out — judgment-free.</li>
        <li>📊 <strong>Pattern Recognizer:</strong> See what your emotions are really saying.</li>
        <li>🛠️ <strong>Skills Toolkit:</strong> DBT and executive function tools when you need &rsquo;em.</li>
      </ul>
    </div>
  )
}
