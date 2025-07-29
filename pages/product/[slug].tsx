'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '@/components/ui/Footer'

export default function ProductPage() {
  const { query } = useRouter()
  const { slug } = query

  const productName = decodeURIComponent(slug as string || '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())

  return (
    <>
      <Head>
        <title>{productName} — MARTY Merch</title>
        <meta name="description" content={`Buy ${productName} from the official MARTY store.`} />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">{productName}</h1>
        <Image
          src={`/images/${slug}.png`}
          alt={productName}
          width={480}
          height={480}
          className="mx-auto mb-6 rounded-xl shadow-md"
        />
        <p className="text-lg max-w-xl mx-auto mb-8">
          This is a placeholder page for the <strong>{productName}</strong>. Product details and checkout integration coming soon.
        </p>
        <a
          href="/store"
          className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          ← Back to Store
        </a>
      </main>

      <Footer />
    </>
  )
}