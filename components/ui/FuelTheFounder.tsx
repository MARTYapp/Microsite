'use client'

import Link from 'next/link'

export default function FuelTheFounder() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-center text-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Real ones fund the vision.
      </h2>
      <p className="mb-6 text-white/80 max-w-md mx-auto">
        No VC yet. No fluff ever. Every dollar fuels the mission. 
      </p>
      <Link
        href="https://coff.ee/ericadler"
        target="_blank"
        className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:border-b-2 hover:border-[#FF6B6B] shimmer-m"
      >
        💸 Support the Build 💸
      </Link>
    </section>
  )
}