// pages/cealan.tsx
import Head from 'next/head'
import CealanHero from '@/components/CealanHero'
import GrowthRoadmap from '@/components/GrowthRoadmap'
import Footer from '@/components/Footer'

export default function CealanPage() {
  return (
    <>
      <Head>
        <title>Cealan Clifford — Private Portal</title>
        <meta name="description" content="Private pitch and onboarding portal for Cealan Clifford, Esq." />
      </Head>

      <main>
        <CealanHero />
        <GrowthRoadmap />
        <Footer />
      </main>
    </>
  )
}