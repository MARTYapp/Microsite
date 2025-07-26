'use client'

import { motion } from 'framer-motion'

const quotes = [
  {
    text: "MARTY feels like a real one. Not a shrink. Just someone who actually gets it.",
    author: "— 27yo grad student, NYC"
  },
  {
    text: "I’ve never stuck with journaling. Until now. This one actually talks back.",
    author: "— Freelance designer, Chicago"
  },
  {
    text: "It’s like having an older brother who studied DBT and knows my chaos.",
    author: "— Tech lead, Berlin"
  },
]

export default function QuoteCarousel() {
  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-white">
        🗣️ What People Are Saying
      </h2>

      <div className="space-y-12 max-w-3xl mx-auto">
        {quotes.map((quote, index) => (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl italic text-zinc-300"
          >
            <p>“{quote.text}”</p>
            <footer className="mt-4 text-sm text-zinc-500">{quote.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}