'use client'

import Image from 'next/image'

export default function MartyHoodie() {
  return (
    <section className="py-20 px-6 text-center relative bg-[#0e0e11]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        🧥 The MARTY Crewneck
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
        Real-world armor for the emotionally fluent. Cozy, collegiate, and built for recovery-season layering.
      </p>

      <div className="flex justify-center">
        <Image
          src="/assets/marty-hoodie.png"
          alt="MARTY Crewneck Sweater"
          width={320}
          height={380}
          className="hover:scale-105 transition duration-300 drop-shadow-xl"
        />
      </div>

      <p className="mt-6 text-sm text-gray-500 italic">
        Available in beige/navy and navy/gold. Coming soon to the MARTY store.
      </p>
    </section>
  )
}