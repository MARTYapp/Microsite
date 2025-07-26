'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
  'Designed for the executive dysfunction fam™.',
]

export default function HeroScene() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Animated Glowing Text */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={clsx(
          'text-center text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400',
          'drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all duration-700 ease-in-out'
        )}
      >
        {taglines[currentTagline]}
      </motion.h1>

      {/* Optional Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-0" />

      {/* Future CTA Anchor */}
      <div className="absolute bottom-12 z-10">
        <button className="rounded-xl border border-purple-500 bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-purple-700 hover:shadow-lg">
          🧠 Talk to MARTY Now
        </button>
      </div>
    </section>
  )
}