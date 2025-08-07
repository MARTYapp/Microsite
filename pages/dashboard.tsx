export default function Dashboard() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/images/dashboard-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome back.</h1>
        <p className="text-white/70 mb-8 text-lg max-w-xl">MARTY’s waiting for you. Start the conversation.</p>
        <ul className="space-y-4 text-base leading-relaxed">
          <li>💬 <strong>Chat with MARTY:</strong> Voice, text, silence — your call.</li>
          <li>🌀 <strong>Emotional Patterns:</strong> Watch them form. Break the loop.</li>
          <li>🧰 <strong>In-the-Moment Tools:</strong> From DBT to deep focus, built into the convo.</li>
        </ul>
      </div>
    </div>
  )
}
