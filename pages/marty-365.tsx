'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Footer from '@/components/ui/Footer'

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1]
    }
  }
}

export default function Marty365() {
  return (
    <>
      <Head>
        <title>MARTY 365</title>
        <meta name="description" content="Structure without shame — a year-long journey with MARTY." />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4">THE MARTY METHOD — 365</h1>
          <p className="mb-6 text-lg max-w-xl">
            Structure without shame. 365 days of support that meets you where you’re at.
          </p>
          <ul className="space-y-3 text-base leading-relaxed">
            <li>📅 Daily prompt + reflection</li>
            <li>📈 Mood tracking + trends</li>
            <li>🧭 Weekly goal recalibration</li>
          </ul>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}
