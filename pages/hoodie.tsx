'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function MartyHoodie() {
  return (
    <div className="px-6 py-12 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8">🧥 MARTY Hoodies</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="text-center">
          <Image
            src="/assets/crewneck-beige.png"
            alt="Beige/Navy Crewneck"
            width={500}
            height={500}
            className="rounded-lg shadow-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Beige/Navy Crewneck</h2>
          <p className="text-gray-400 mb-4">Warm, grounded, zero cringe. Varsity-coded.</p>
          <Link
            href="https://printify.com/products/crewneck-beige-navy-id123"
            className="inline-block px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200"
          >
            Buy Now
          </Link>
        </div>

        <div className="text-center">
          <Image
            src="/assets/crewneck-navy.png"
            alt="Navy/Gold Crewneck"
            width={500}
            height={500}
            className="rounded-lg shadow-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Navy/Gold Crewneck</h2>
          <p className="text-gray-400 mb-4">Clean. Confident. Big-feelings crew approved.</p>
          <Link
            href="https://printify.com/products/crewneck-navy-gold-id456"
            className="inline-block px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}