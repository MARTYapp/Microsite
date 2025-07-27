import Head from 'next/head'

import HeroScene from '@/components/ui/HeroScene'
import PosterWall from '@/components/ui/PosterWall'
import QuoteCarousel from '@/components/ui/QuoteCarousel'
import FuelTheFounder from '@/components/ui/FuelTheFounder'
import GrowthRoadmap from '@/components/GrowthRoadmap'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and night-crawlers."
        />
      </Head>

      <main className="bg-hero text-white">
        <HeroScene />
        <PosterWall />
        <QuoteCarousel />
        <FuelTheFounder />
        <GrowthRoadmap />
      </main>

      <Footer />
    </>
  )
}