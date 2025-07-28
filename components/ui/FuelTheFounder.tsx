'use client'

import Link from 'next/link'

export default function FuelTheFounder() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-center text-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Believe in the builder?
      </h2>
      <p className="mb-6 text-white/80 max-w-md mx-auto">
        Every dollar helps keep the vision alive. Fund the founder — no fluff.
      </p>
      <Link
        href="https://coff.ee/ericadler"
        target="_blank"
        className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 pulse"
      >
        💸 Fund the Founder 💸
      </Link>
    </section>
  )
}