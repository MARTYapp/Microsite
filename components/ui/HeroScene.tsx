'use client'

import { useEffect, useState, useRef } from 'react'
import ReactPlayer from 'react-player'

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
  'Not your therapist. Not your dad. Just MARTY.',
]

export default function HomeHero() {
  const [mode, setMode] = useState<'stim' | 'calm'>('calm')
  const [currentTagline, setCurrentTagline] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play().catch(() => {
        // Fail silently on autoplay restrictions
      })
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 text-center text-white bg-black">
      {/* Cinematic background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ReactPlayer
          url="/videos/hero-loop.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="react-player object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0e0e11] to-black/80 backdrop-blur-sm" />
      </div>

      {/* Audio ambiance */}
      <audio ref={audioRef} src="/audio/wind-subtle.mp3" loop />

      {/* Top-left branding */}
      <div className="absolute top-6 left-6 text-sm text-white/70 tracking-widest z-20">
        THE MARTY APP
      </div>

      {/* Main content */}
      <div className="z-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-glow">
          The MARTY App
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-glow">
          {taglines[currentTagline]}
        </p>
        <button
          className="rounded-xl border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition-all duration-200 glow-on-hover"
          onClick={() => setMode(mode === 'stim' ? 'calm' : 'stim')}
        >
          {mode === 'stim' ? '🌙 Calm Mode' : '⚡ Stim Mode'}
        </button>
      </div>

      {/* Bottom-right CTA */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 z-20">
        💸 <a href="https://coff.ee/ericadler" className="underline">Fund the Founder</a>
      </div>
    </section>
  )
}