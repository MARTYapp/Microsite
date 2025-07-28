import Head from 'next/head'
import MartyHero from '@/components/MartyHero'
import PosterWall from '@/components/PosterWall'
import QuoteCarousel from '@/components/QuoteCarousel'
import FuelTheFounder from '@/components/FuelTheFounder'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and night-crawlers." />
      </Head>
      <main>
        <MartyHero />
        <PosterWall />
        <QuoteCarousel />
        <FuelTheFounder />
        <Footer />
      </main>
    </>
  )
}
