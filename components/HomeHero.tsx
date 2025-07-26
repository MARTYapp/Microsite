// components/HeroScene.tsx
"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const taglines = [
  "Quiet tech for loud minds.",
  "Built for the avoiders, the overthinkers, and the night-crawlers.",
  "Not your therapist. Not your dad. Just MARTY."
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
      {/* Background shimmer */}
      <div className="background" />

      {/* Logo */}
      <div className="logo">THE MARTY APP</div>

      {/* CTA shimmer icon */}
      <Link
        href="https://coff.ee/ericadler"
        className="shimmer-m"
        aria-label="Support the Founder"
        target="_blank"
      >
        $END ME $
      </Link>

      {/* Container */}
      <div className="container">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: fade ? 1 : 0, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {taglines[current]}
        </motion.h1>
        <p className="subheading">
          Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike.
        </p>
        <Link href="#demo">
          <button className="cta">🧠 Talk to MARTY Now</button>
        </Link>
      </div>

      {/* Merch elements */}
      <div className="absolute top-1/2 left-[8%] transform -translate-y-1/2">
        <Image
          src="/assets/quote-poster.png"
          alt="Quote Poster"
          width={200}
          height={300}
          className="hover:opacity-100 opacity-80 hover:scale-105 transition"
        />
      </div>

      <div className="absolute top-1/2 right-[8%] transform -translate-y-1/2">
        <Image
          src="/assets/dbt-visualizer.png"
          alt="DBT Poster"
          width={200}
          height={300}
          className="hover:opacity-100 opacity-80 hover:scale-105 transition"
        />
      </div>

      <div className="absolute bottom-[80px] right-[50%] translate-x-1/2">
        <Image
          src="/assets/marty-hoodie.png"
          alt="MARTY Crewneck"
          width={240}
          height={280}
          className="animate-pulse hover:scale-105 transition cursor-pointer"
        />
      </div>
    </section>
  )
}