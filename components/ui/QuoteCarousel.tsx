'use client'

import { motion } from 'framer-motion'

export default function QuoteCarousel() {
  const quotes = [
    '“This app said what my therapist couldn’t.”',
    '“Feels like talking to the older brother I wish I had.”',
    '“MARTY doesn’t judge. It just helps me not spiral.”',
    '“Honestly? I open it before I even brush my teeth.”',
    '“It’s like DBT without the homework dread.”',
    '“The only app that actually gets how I think.”',
  ]

  return (
    <section className="py-16 px-4 bg-black text-center text-white">
      {quotes.map((quote, i) => (
        <motion.blockquote
          key={i}
          className="text-xl md:text-2xl font-medium max-w-xl mx-auto mb-8 last:mb-0 drop-shadow-glow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {quote}
        </motion.blockquote>
      ))}
    </section>
  )
}