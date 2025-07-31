'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/ui/Footer'
import { products } from '@/data/products'

export default function ProductPage() {
  const { query } = useRouter()
  const { slug } = query

  if (!slug) return null

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg mb-6">We couldn’t find what you were looking for.</p>
        <Link
          href="/store"
          className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          ← Back to Store
        </Link>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} — MARTY Merch</title>
        <meta name="description" content={`Buy ${product.name} from the official MARTY store.`} />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={480}
          height={480}
          className="mx-auto mb-6 rounded-xl shadow-md"
        />
        <p className="text-lg max-w-xl mx-auto mb-8">{product.description}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition mb-6"
        >
          Buy Now — {product.price}
        </a>
        <br />
        <Link
          href="/store"
          className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          ← Back to Store
        </Link>
      </main>

      <Footer />
    </>
  )
}