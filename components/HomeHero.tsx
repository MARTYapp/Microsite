'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
]

export default function HomeHero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  return (
    <section
      className={clsx(
        'relative z-20 flex min-h-screen items-center justify-center text-center text-white overflow-hidden transition-colors duration-700',
        'bg-black'
      )}
    >
      {/* 🔹 VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/Assets/mb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* 🔹 OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🔹 HERO CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {taglines[currentTagline]}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg opacity-90 mb-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike.
        </motion.p>

        <motion.button
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onMouseEnter={handleHover}
        >
          🧠 Talk to MARTY Now
        </motion.button>
      </motion.div>

      {/* Hidden audio (optional hover sound) */}
      <audio ref={audioRef} src="/Assets/hover-sound.mp3" preload="auto" />
    </section>
  )
}