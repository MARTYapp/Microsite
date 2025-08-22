'use client'

import Link from 'next/link'

export default function FuelTheFounder() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-center text-white backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-amber-400 drop-shadow-md">
        Fund the Founder.
      </h2>
      <p className="mb-8 text-white/70 max-w-lg mx-auto text-base md:text-lg">
        No investors. No noise. Just one founder building something real
      </p>
      <Link
        href="https://coff.ee/ericadler"
        target="_blank"
        className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
      >
        💸 Back the Build 💸
      </Link>
    </section>
  )
}