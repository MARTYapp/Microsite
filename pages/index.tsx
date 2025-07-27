'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'

import HeroScene from '@/components/ui/HeroScene'
import PosterWall from '@/components/ui/PosterWall'
import QuoteCarousel from '@/components/ui/QuoteCarousel'
import FuelTheFounder from '@/components/ui/FuelTheFounder'
import GrowthRoadmap from '@/components/ui/GrowthRoadmap'
import Footer from '@/components/ui/Footer'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

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

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroScene />
          <PosterWall />
          <QuoteCarousel />
          <FuelTheFounder />
          <GrowthRoadmap />
        </motion.section>
      </main>

      <Footer />
    </>
  )
}