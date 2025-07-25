// pages/cealan.tsx
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function CealanPage() {
  return (
    <Layout title="Cealan — Private Offer Portal">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Hey Coco. This one’s just for you.
        </h1>

        <p className="text-gray-300 text-lg">
          Welcome to your private MARTY portal. It’s confidential, personalized, and tailored for what we talked about — Legal & Licensing Lead. You’ll find everything you need below:
        </p>

        <div className="border border-gray-700 rounded-xl p-6 bg-gray-950 space-y-4">
          <h2 className="text-2xl font-semibold text-white">🧾 Offer Overview</h2>
          <p className="text-gray-400">
            Cealan Clifford — we’re offering you a defining role in MARTY as our <strong>Legal & Licensing Lead</strong>. Your responsibilities would include:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Overseeing legal structuring & licensing agreements</li>
            <li>IP protection (US & international)</li>
            <li>Strategic contracts for content, partnerships, and AI deployment</li>
          </ul>
        </div>

        <div className="border border-gray-700 rounded-xl p-6 bg-gray-950 space-y-4">
          <h2 className="text-2xl font-semibold text-white">💸 Compensation & Equity</h2>
          <p className="text-gray-400">
            We’re early — but your equity will be real. This is a founding team offer. We'll structure compensation flexibly depending on time commitment and revenue/grant stage. Expect:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Equity in the parent company</li>
            <li>Rev share from licensed content (e.g. DBT decks, journals)</li>
            <li>Involvement in IP negotiations and international rights</li>
          </ul>
        </div>

        <div className="border border-gray-700 rounded-xl p-6 bg-gray-950 space-y-4">
          <h2 className="text-2xl font-semibold text-white">🛠️ What’s Already Built</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Live microsite at <Link href="/" className="text-blue-400 underline">themartyapp.com</Link></li>
            <li>Proprietary AI architecture — MARTY ≠ therapy</li>
            <li>Pitch deck, 7-day user prototype, and merch line</li>
          </ul>
        </div>

        <div className="border border-gray-700 rounded-xl p-6 bg-gray-950 space-y-4">
          <h2 className="text-2xl font-semibold text-white">🚀 Why Now?</h2>
          <p className="text-gray-300">
            This is a pivotal moment — we're building a platform for neurodivergent, therapy-resistant, and emotionally reactive users. We need your expertise to lock in:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Licensing protection across all core content</li>
            <li>Brand protection across US + international</li>
            <li>Terms, policies, and ethical structuring</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <Link
            href="mailto:ericdanieladler@gmail.com?subject=Let’s build MARTY — I’m in"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            ✍️ I’m In. Let’s Talk.
          </Link>
        </div>
      </section>
    </Layout>
  )
}