

'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">No fluff. Just facts.</h1>
      <p className="text-lg sm:text-xl text-zinc-400 mb-12 text-center max-w-2xl">
        Built for the avoiders, the overthinkers, and the night-crawlers. MARTY meets you where you’re at — and grows with you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Free Plan */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-700 shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">🆓 Free Plan</h2>
          <ul className="space-y-3 text-zinc-300">
            <li>✔️ Daily journaling (text + voice)</li>
            <li>✔️ Core DBT skill cards</li>
            <li>✔️ Mood tracking (basic)</li>
            <li>✔️ Backward Review prompts</li>
            <li>✔️ Up to 5 voice entries/month</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-yellow-600 shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">💎 MARTY+</h2>
          <p className="mb-4 text-lg text-yellow-100">$9/month or $99/year</p>
          <ul className="space-y-3 text-zinc-300 mb-6">
            <li>🔥 Everything in Free</li>
            <li>🧠 Pattern Recognizer AI</li>
            <li>🔓 Unlimited voice journaling</li>
            <li>🎯 Smart prompt suggestions</li>
            <li>🎛️ Mood Visualizer Dashboard</li>
            <li>🚀 Priority feature drops</li>
          </ul>
          <Link
            href="/signup"
            className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all duration-300"
          >
            🧠 Upgrade to MARTY+
          </Link>
        </div>
      </div>
    </div>
  )
}