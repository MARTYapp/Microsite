// pages/sable.tsx
import Head from 'next/head'
import Layout from '@/components/Layout' // adjust path if needed
import Link from 'next/link'

export default function SablePage() {
  return (
    <Layout>
      <Head>
        <title>SABLE MEET MARTY</title>
        <meta name="description" content="Private onboarding for Sable Adler — your MARTY mission starts here." />
      </Head>

      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20 text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">SABLE MEET MARTY</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          This is your command center. Your job? Grow our voice, own our story, and help us win the funding to scale.
        </p>

        <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20 shadow-md max-w-3xl text-left space-y-4 backdrop-blur-md">
          <h2 className="text-2xl font-semibold">📈 MARTY: $2B by 2028</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
            <li><strong>2025:</strong> 2,000 active users by Thanksgiving</li>
            <li><strong>2026:</strong> Grant funding + licensing MVP to school orgs</li>
            <li><strong>2027:</strong> Premium tiers, community, merch, content</li>
            <li><strong>2028:</strong> Brand, B2B, and licensing expansions — <strong>$2B valuation</strong></li>
          </ul>
          <p className="mt-4">You're the operator. Make us loud, make us visible, and secure the money we need to build it all.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link href="/assets/Sable-Onboarding.pdf" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            📄 View Onboarding Packet
          </Link>
          <Link href="/investors" className="text-white underline text-sm hover:text-gray-300">
            🔗 View Investor Preview
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">© {new Date().getFullYear()} The MARTY App. All rights reserved.</p>
      </section>
    </Layout>
  )
}