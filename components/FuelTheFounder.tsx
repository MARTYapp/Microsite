'use client'

import { Button } from '@/components/ui/button'

export default function FuelTheFounder() {
  return (
    <section className="w-full bg-black py-20 px-6 text-center border-t border-neutral-800">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
        💸 $END ME $
      </h2>
      <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-base sm:text-lg">
        Fuel the founder. Buy a coffee. Fund the mission. Keep the lights on.
      </p>
      <a
        href="https://coff.ee/ericadler"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button className="bg-white text-black text-lg font-semibold px-8 py-4 rounded-full shadow-md hover:bg-neutral-200 transition">
          ☕ BUY ME A COFFEE
        </Button>
      </a>
    </section>
  )
}