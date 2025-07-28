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
        <meta name="description" content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and the perfectionist avoiders™ alike." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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