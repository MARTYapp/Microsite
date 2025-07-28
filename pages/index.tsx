// Eliot’s WWDC-Ready Polish Layer — START HERE

// ✅ Layout Foundation: /pages/index.tsx
import Head from 'next/head'
import Hero from '@/components/Hero'
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
      <main className="min-h-screen bg-black text-white font-space">
        <Hero />
        <PosterWall />
        <QuoteCarousel />
        <FuelTheFounder />
        <Footer />
      </main>
    </>
  )
}

// ✅ Hero Redesign: /components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CTAButton from '@/components/ui/CTAButton'

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] text-center overflow-hidden px-6 sm:px-12">
      {/* Background Video/Visual */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80"
      >
        <source src="/media/bg-loop.mp4" type="video/mp4" />
      </video>

      {/* Animated Logo */}
      <motion.div
        className="absolute top-6 left-6 text-sm tracking-wide text-purple-300/80"
        whileHover={{ scale: 1.08, rotate: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        THE MARTY APP
      </motion.div>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl sm:text-7xl font-bold leading-tight text-purple-100 drop-shadow-md"
      >
        Quiet tech<br />for loud minds.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 max-w-xl text-base sm:text-lg text-gray-300"
      >
        Built for the avoiders, the overthinkers, and the night-crawlers.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <CTAButton />
      </motion.div>
    </section>
  )
}

// ✅ CTA Button Glow Polish: /components/ui/CTAButton.tsx
'use client'
import { motion } from 'framer-motion'

export default function CTAButton() {
  return (
    <motion.a
      href="/journal"
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-black text-white hover:bg-white hover:text-black border-2 border-white transition-all duration-300 rounded-full text-lg font-semibold shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Talk to MARTY"
    >
      🧠 Talk to MARTY Now
    </motion.a>
  )
}