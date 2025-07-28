// HeroScene.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
  'Not your therapist. Not your dad. Just MARTY.',
]

export default function HeroScene() {
  const [mode, setMode] = useState<'stim' | 'calm'>('calm')
  const [currentTagline, setCurrentTagline] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 text-center text-white">
      <div className="max-w-2xl">
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
          {mode === 'stim' ? 'Switch to Calm Mode' : 'Switch to Stim Mode'}
        </button>
      </div>

      <div className="absolute bottom-4 right-4 text-xs text-gray-400">
        💸 <a href="https://coff.ee/ericadler" className="underline">Fund the Founder</a>
      </div>
    </section>
  )
}