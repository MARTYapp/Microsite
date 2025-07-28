import Head from 'next/head'
import HomeHero from '@/components/HomeHero'
import PosterWall from '@/components/ui/PosterWall'
import QuoteCarousel from '@/components/ui/QuoteCarousel'
import FuelTheFounder from '@/components/ui/FuelTheFounder'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and night-crawlers." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* 🔖 Live Deploy Label */}
      <div className="fixed top-2 left-2 z-[9999] bg-black text-white text-xs px-3 py-1 rounded-full shadow-md">
        ✅ MARTY V5 — Clean Deploy @ {new Date().toLocaleString()}
      </div>

      <main>
        <HomeHero />
        <PosterWall />
        <QuoteCarousel />
        <FuelTheFounder />
        <Footer />
      </main>
    </>
  )
}