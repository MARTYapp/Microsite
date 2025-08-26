'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function QuoteCarousel() {
  const quotes = [
    '“This app said what my therapist couldn’t.”',
    '“Feels like talking to the older brother I wish I had.”',
    '“MARTY doesn’t judge. It just helps me not spiral.”',
    '“Honestly? I open it before I even brush my teeth.”',
    '“It’s like DBT without the homework dread.”',
    '“The only app that actually gets how I think.”',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <section className="py-16 px-4 bg-black text-center text-white">
      <div className="relative h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            className="absolute text-xl md:text-2xl font-medium max-w-xl mx-auto drop-shadow-glow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            {quotes[index]}
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  )
}