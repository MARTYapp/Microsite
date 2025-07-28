'use client'

import Head from 'next/head'
import Link from 'next/link'

const products: {
  id: string
  name: string
  price: string
  slug: string
}[] = [
  {
    id: '1',
    name: 'Navy + Gold Crewneck',
    price: '$60',
    slug: 'navy-gold-crewneck',
  },
  {
    id: '2',
    name: 'Beige + Navy Crewneck',
    price: '$60',
    slug: 'beige-navy-crewneck',
  },
  {
    id: '3',
    name: '“Change. Inhale…” Quote Poster',
    price: '$28',
    slug: 'quote-poster',
  },
  {
    id: '4',
    name: '4-Count Breathing Spiral Poster',
    price: '$28',
    slug: 'breathwork-spiral-poster',
  },
  {
    id: '5',
    name: '“Overthinker” Dad Cap',
    price: '$32',
    slug: 'overthinker-dad-cap',
  },
  {
    id: '6',
    name: '“What Just Happened?” Pocket Journal',
    price: '$24',
    slug: 'pocket-journal',
  },
  {
    id: '7',
    name: '“Mirror Talk” Decal Set',
    price: '$18',
    slug: 'mirror-decal-set',
  },
  {
    id: '8',
    name: 'MARTY Desk Mat / Mood Pad',
    price: '$45',
    slug: 'marty-desk-mat',
  },
  {
    id: '9',
    name: '“Built for the Avoiders” Mug',
    price: '$22',
    slug: 'avoidance-mug',
  },
  {
    id: '10',
    name: 'MARTY Daypack Tote',
    price: '$38',
    slug: 'marty-tote',
  },
]

export default function StorePage() {
  return (
    <>
      <Head>
        <title>MARTY Store</title>
        <meta name="description" content="Wear it. Read it. Use it. Real tools, real style, real talk." />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <h1 className="text-4xl font-bold mb-10 text-center">MARTY STORE</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="block group border border-gray-800 hover:border-white p-6 rounded-md transition-colors"
            >
              <h2 className="text-xl font-semibold group-hover:underline">{product.name}</h2>
              <p className="text-gray-400 mt-2">{product.price}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}