'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { insertMood, getCurrentUser } from '@/lib/supabase'

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
]

export default function MartyHero() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [mode, setMode] = useState<'stim' | 'calm'>('calm')
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

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
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
      console.error('Error saving mood toggle:', err)
    }
  }

  return (
    <section
      className={clsx(
        'relative flex min-h-screen items-center justify-center px-6 text-center text-white overflow-hidden transition-colors duration-700',
        mode === 'stim' ? 'bg-black' : 'bg-[#0d0d14]'
      )}
    >
      {/* Toggle */}
      <button
        onClick={toggleMode}
        className="absolute top-6 right-6 z-30 bg-white/10 text-xs px-3 py-2 rounded-full backdrop-blur hover:bg-white/20 transition shadow-sm border border-white/20"
      >
        {mode === 'calm' ? '☀️ Stim Mode' : '🌙 Calm Mode'}
      </button>

      {/* Sound */}
      <audio ref={audioRef} src="/assets/hover-sound.mp3" preload="auto" />

      {/* Background */}
      <Image
        src="/assets/waveform-bg.svg"
        alt="Waveform"
        fill
        className={clsx(
          'object-cover z-0 transition-opacity duration-700',
          mode === 'stim' ? 'opacity-40' : 'opacity-20'
        )}
      />
      <Image
        src="/assets/particles.svg"
        alt="Particles"
        fill
        className={clsx(
          'object-cover z-0 transition-opacity duration-700',
          mode === 'stim' ? 'opacity-30' : 'opacity-10'
        )}
      />
      <div
        className={clsx(
          'absolute inset-0 pointer-events-none z-0 transition-opacity duration-700',
          mode === 'stim'
            ? 'bg-gradient-radial from-purple-700/30 via-transparent to-transparent animate-pulse'
            : 'bg-gradient-radial from-purple-800/10 via-transparent to-transparent'
        )}
      />

      {/* Main */}
      <div className="z-10 max-w-3xl space-y-6">
        <div
          className={clsx(
            'mx-auto w-[280px] sm:w-[360px]',
            mode === 'stim'
              ? 'drop-shadow-[0_0_1.5rem_#7f5af0aa]'
              : 'drop-shadow-[0_0_1rem_#7f5af066]'
          )}
        >
          <Image
            src="/assets/logo-marty-glow.png"
            alt="MARTY Logo"
            width={360}
            height={100}
            className="mx-auto"
            priority
          />
        </div>

        <div className="h-12 text-lg sm:text-xl text-gray-200 relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.button
          className={clsx(
            'mt-6 inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition backdrop-blur shadow-md',
            mode === 'stim'
              ? 'border-white/30 bg-white/10 text-white hover:bg-white/20 hover:shadow-purple-500/40'
              : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:shadow-purple-300/20'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={handleHover}
          onClick={() =>
            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          💬 Enter Quiet Mode
        </motion.button>
      </div>
    </section>
  )
}