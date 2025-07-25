import Head from 'next/head'
import HomeHero from '@/components/HomeHero'
import PosterWall from '@/components/PosterWall'
import QuoteCarousel from '@/components/QuoteCarousel'
import FuelTheFounder from '@/components/FuelTheFounder'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="MARTY ≠ THERAPY — Built for the avoiders, overthinkers, and night-crawlers." />
      </Head>

      <HomeHero />
      <PosterWall />
      <QuoteCarousel />
      <FuelTheFounder />
      <Footer />
    </>
  )
}