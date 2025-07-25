// pages/sable.tsx
import Head from 'next/head'
import SableHero from '@/components/SableHero'
import SableOffer from '@/components/SableOffer'
import GrowthRoadmap from '@/components/GrowthRoadmap'
import ArabellaSection from '@/components/ArabellaSection'
import Footer from '@/components/Footer'

export default function SablePage() {
  return (
    <>
      <Head>
        <title>Sable Adler — MARTY HQ</title>
        <meta name="description" content="Private onboarding for Sable Adler." />
      </Head>

      <main>
        <SableHero />
        <SableOffer />
        <GrowthRoadmap />
        <ArabellaSection />
        <Footer />
      </main>
    </>
  )
}