'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Button } from '@/components/ui/Button' // ✅ FIXED: capital B

const taglines = [
  'Quiet tech for loud minds.',
  'Built for the avoiders, the overthinkers, and the night-crawlers.',
]

export default function HeroScene() {
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
    <section className="relative flex min-h-screen items-center justify-center px-4 text-center">
      <div className="z-10">
        <h1 className="text-4xl font-bold text-white">{taglines[currentTagline]}</h1>
        <Button size="lg" className="mt-6">
          🧠 Talk to MARTY Now
        </Button>
      </div>
    </section>
  )
}