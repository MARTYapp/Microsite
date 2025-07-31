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
        <title>Cealan — Legal & Licensing Onboarding</title>
        <meta name="description" content="You're not just joining the team — you're defining it. Welcome to your private onboarding space." />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            You met the inspiration — now meet the legacy.
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl">
            This role isn’t just open — it was designed with you in mind. Legal. Licensing. Protection. Expansion. You already know what to do.
          </p>
          <CealanOnboarding />
        </motion.section>
      </main>

      <motion.footer
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Footer />
      </motion.footer>
    </>
  )
}