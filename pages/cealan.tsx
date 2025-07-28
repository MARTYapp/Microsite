'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'
import Footer from '@/components/ui/Footer'
import CealanOnboarding from '@/components/ui/CealanOnboarding'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1] as any // ✅ patched
    }
  }
}

export default function CealanPage() {
  return (
    <>
      <Head>
        <title>Welcome, Cealan</title>
        <meta name="description" content="Onboarding for Cealan Clifford — Legal & Licensing" />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <CealanOnboarding />
        </motion.section>
      </main>

      <Footer />
    </>
  )
}