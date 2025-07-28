// ✅ Eliot’s WWDC-Ready Polish Layer — START HERE

// ✅ Layout Foundation: /pages/index.tsx
import Head from 'next/head'
import HeroScene from '@/components/ui/HeroScene'
import PosterWall from '@/components/ui/PosterWall'
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
      </Head>
      <main className="min-h-screen bg-black text-white font-space">
        <HeroScene />
        <PosterWall />
        <QuoteCarousel />
        <FuelTheFounder />
        <Footer />
      </main>
    </>
  )
}