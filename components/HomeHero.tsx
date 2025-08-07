'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
  'Not your therapist. Not your dad. Just MARTY.',
]

export default function HeroScene() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % taglines.length)
        setFade(true)
      }, 500)
    }, 7000)

    return () => clearInterval(intervalRef.current!)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0e0e11] text-white">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-[#0e0e11] to-black/80 backdrop-blur-sm" />
      <div className="absolute top-6 left-6 text-sm text-white/70 tracking-widest z-20">
        THE MARTY APP
      </div>
      <Link
        href="https://coff.ee/ericadler"
        className="absolute top-6 right-6 text-amber-400 hover:text-amber-300 font-semibold text-xs tracking-wider shimmer-m z-20"
        target="_blank"
      >
        $END ME $
      </Link>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: fade ? 1 : 0, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg max-w-2xl"
          >
            {taglines[current]}
          </motion.h1>
        </AnimatePresence>

        <p className="mt-6 text-base sm:text-lg max-w-md text-white/80 font-light leading-snug">
          Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike.
        </p>

        <Link href="#demo" className="mt-8" legacyBehavior>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 12px #ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="cta px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold text-sm shadow-lg"
          >
            🧠 Talk to MARTY Now
          </motion.button>
        </Link>
      </div>
      <div className="absolute top-1/2 left-[6%] -translate-y-1/2 z-10">
        <Image
          src="/assets/quote-poster.png"
          alt="Change. Inhale. Acceptance. Exhale. Poster"
          width={200}
          height={300}
          className="opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
        />
      </div>
      <div className="absolute top-1/2 right-[6%] -translate-y-1/2 z-10">
        <Image
          src="/assets/dbt-visualizer.png"
          alt="Breathing Spiral / DBT Grid"
          width={200}
          height={300}
          className="opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
        />
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/assets/marty-hoodie.png"
          alt="MARTY Crewneck (beige/navy or navy/gold)"
          width={240}
          height={280}
          className="animate-pulse hover:scale-105 transition duration-300 cursor-pointer"
        />
      </div>
    </section>
  )
}