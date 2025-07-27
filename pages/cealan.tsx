'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import GrowthRoadmap from '@/components/ui/GrowthRoadmap'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut", // Fixed Framer Motion format
    },
  },
}

export default function CealanPage() {
  return (
    <>
      <Head>
        <title>Legal & Licensing — The MARTY App</title>
        <meta
          name="description"
          content="Private offer page for Cealan Clifford, Esq. — Join The MARTY App as Legal & Licensing Lead."
        />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Cealan Clifford, Esq.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            This is your private onboarding portal. We’re offering you the role of{' '}
            <strong>Legal & Licensing Lead</strong> at The MARTY App. Review our roadmap,
            valuation, IP assets, and strategic vision below.
          </p>

          <GrowthRoadmap />

          <div className="mt-12 text-gray-400 text-sm">
            Questions? Text Eric directly. This page is just for you.
          </div>
        </motion.section>
      </main>
    </>
  )
}