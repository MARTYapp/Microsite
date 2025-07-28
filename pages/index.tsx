// ✅ Eliot’s WWDC-Ready Polish Layer — START HERE

// ✅ Layout Foundation: /pages/index.tsx
import Head from 'next/head'
import HeroScene from '@/components/ui/HeroScene'
import PosterWall from '@/components/ui/poster-wall-export'
import QuoteCarousel from '@/components/ui/QuoteCarousel'
import FuelTheFounder from '@/components/ui/FuelTheFounder'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and the night-crawlers."
        />
        <link rel="preload" as="video" href="/media/mb.mp4" type="video/mp4" />
      </Head>
      <main className="min-h-screen bg-black text-white font-space antialiased">
        <HeroScene />
        <section className="w-full py-16 text-center border-y border-white/10">
          <h2 className="text-3xl font-bold mb-4">🎬 Upcoming: MARTY in Motion</h2>
          <p className="text-gray-400 mb-2">Cinematic short films coming soon — meet Robert, Coco, and the Tech Bro.</p>
          <p className="text-xs text-gray-600">Watch this space. We’re not done yet.</p>
        </section>
        <PosterWall />
        <QuoteCarousel />
        <FuelTheFounder />
        <div className="text-center py-8">
          <a
            href="https://coff.ee/ericadler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            💸 Fund the Founder 💸
          </a>
        </div>
        <Footer />
      </main>
    </>
  )
}