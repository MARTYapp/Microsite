'use client'

import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/ui/Footer'

const merch = [
  {
    title: 'Beige/Navy Crewneck',
    price: '$54',
    img: '/images/crewneck-beige-navy.png',
    href: '/products/crewneck-beige-navy',
  },
  {
    title: 'Navy/Gold Crewneck',
    price: '$54',
    img: '/images/crewneck-navy-gold.png',
    href: '/products/crewneck-navy-gold',
  },
  {
    title: '"Change. Inhale..." Poster',
    price: '$22',
    img: '/images/poster-quote.png',
    href: '/products/poster-quote',
  },
  {
    title: 'Breathing Spiral Poster',
    price: '$22',
    img: '/images/poster-spiral.png',
    href: '/products/poster-spiral',
  },
  {
    title: '"Overthinker" Dad Cap',
    price: '$32',
    img: '/images/hat-overthinker.png',
    href: '/products/hat-overthinker',
  },
  {
    title: '“What Just Happened?” Pocket Journal',
    price: '$18',
    img: '/images/journal-pocket.png',
    href: '/products/journal-pocket',
  },
  {
    title: 'Mirror Talk Decal Set',
    price: '$14',
    img: '/images/decals-mirror-talk.png',
    href: '/products/decals-mirror-talk',
  },
  {
    title: 'MARTY Mood Pad / Desk Mat',
    price: '$28',
    img: '/images/mat-deskpad.png',
    href: '/products/mat-deskpad',
  },
  {
    title: '"Built for the Avoiders" Mug',
    price: '$18',
    img: '/images/mug-avoiders.png',
    href: '/products/mug-avoiders',
  },
  {
    title: 'MARTY Daypack Tote',
    price: '$36',
    img: '/images/tote-daypack.png',
    href: '/products/tote-daypack',
  },
]

export default function Store() {
  return (
    <>
      <Head>
        <title>MARTY Store</title>
        <meta name="description" content="Shop official MARTY gear and tools." />
      </Head>

      <main className="bg-black text-white px-6 pb-16">
        {/* 🛍️ Store Header */}
        <section className="max-w-4xl mx-auto text-center py-14">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            WHAT MARTY’S INTO
          </h1>
          <p className="mt-4 text-lg leading-snug">
            WEAR IT. <br />
            READ IT. <br />
            USE IT. <br />
            <br />
            Real tools, real style, real talk. <br />
            Picked with purpose. No fluff. All function.
          </p>
        </section>

        {/* 🧒 Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {merch.map(({ title, price, img, href }) => (
            <div key={title} className="bg-neutral-900 p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <Image
                src={img}
                alt={title}
                width={500}
                height={500}
                className="rounded-md object-cover w-full h-64"
              />
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-400">{price}</p>
              <a
                href={href}
                className="inline-block mt-3 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
              >
                View
              </a>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
