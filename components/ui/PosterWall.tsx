'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const posters = [
  {
    src: '/assets/quote-poster.png',
    alt: '“Change. Inhale. Acceptance. Exhale.” Poster',
  },
  {
    src: '/assets/dbt-visualizer.png',
    alt: 'DBT 4-Count Breathing Spiral Poster',
  },
]

export default function PosterWall() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-6 py-16 px-6 bg-black">
      {posters.map(({ src, alt }, idx) => (
        <Link
          key={idx}
          href="/store"
          className="group relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={src}
              alt={alt}
              width={280}
              height={400}
              priority
              className="rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300 border border-white/10 hover:border-white/20"
            />
            <div className="absolute inset-0 rounded-lg ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition duration-300 pointer-events-none" />
          </motion.div>
        </Link>
      ))}
    </section>
  )
}