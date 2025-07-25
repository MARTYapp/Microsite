'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { insertMood, getCurrentUser } from '@/lib/supabase'

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
]

export default function HomeHero() {
  const [mode, setMode] = useState<'stim' | 'calm'>('calm')
  const [currentTagline, setCurrentTagline] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('marty-mode')
    if (saved === 'stim') setMode('stim')
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleHoverSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((e) => console.warn('🔇 Audio blocked:', e.message))
    }
  }

  const toggleMode = async () => {
    const newMode = mode === 'calm' ? 'stim' : 'calm'
    setMode(newMode)
    localStorage.setItem('marty-mode', newMode)

    try {
      const user = await getCurrentUser()
      await insertMood(newMode, user?.id)
    } catch (err) {
      console.error('🛑 Failed to save mode:', err)
    }
  }

  return (
    <section
      className={clsx(
        'relative flex min-h-screen items-center justify-center text-center text-white overflow-hidden',
        mode === 'stim' ? 'bg-black' : 'bg-[#0d0d14]'
      )}
    >
      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/Assets/mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🟣 Glow Overlay */}
      <div
        className={clsx(
          'fixed inset-0 pointer-events-none z-10 transition-opacity duration-700',
          mode === 'stim'
            ? 'bg-gradient-radial from-purple-700/30 via-transparent to-transparent animate-pulse'
            : 'bg-gradient-radial from-purple-800/10 via-transparent to-transparent'
        )}
      />

      {/* 🖤 Dark Layer for Contrast */}
      <div className="fixed inset-0 bg-black/60 z-10 pointer-events-none" />

      {/* 🔘 Mode Toggle */}
      <button
        onClick={toggleMode}
        className="absolute top-5 right-5 z-20 bg-white/10 px-3 py-2 text-xs rounded-full backdrop-blur border border-white/20 hover:bg-white/20 transition"
      >
        {mode === 'calm' ? '☀️ Stim Mode' : '🌙 Calm Mode'}
      </button>

      {/* 🔊 Audio Element */}
      <audio ref={audioRef} src="/Assets/hover-sound.mp3" preload="auto" playsInline />

      {/* 🧠 Foreground Content */}
      <div className="relative z-20 max-w-2xl px-6 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#7f5af0] drop-shadow-[0_0_1.5rem_#7f5af0aa]">
          THE MARTY APP
        </h1>

        <div className="h-12 text-base sm:text-xl text-gray-200 relative font-light">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => {
            handleHoverSound()
            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            'inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium backdrop-blur transition',
            mode === 'stim'
              ? 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:shadow-purple-500/40'
              : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:shadow-purple-300/20'
          )}
        >
          💬 Enter Quiet Mode
        </motion.button>

        <p className="text-xs text-gray-500 mt-6">
          MARTY™ is a trademark of The MARTY App. All rights reserved. Not therapy, just tools.
        </p>
      </div>
    </section>
  )
}