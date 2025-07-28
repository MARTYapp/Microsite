'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  '“This app said what my therapist couldn’t.”',
  '“Feels like talking to the older brother I wish I had.”',
  '“MARTY doesn’t judge. It just helps me not spiral.”',
]

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 px-4 bg-black text-center text-white">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xl md:text-2xl font-medium max-w-xl mx-auto"
        >
          {quotes[index]}
        </motion.blockquote>
      </AnimatePresence>
    </section>
  )
}