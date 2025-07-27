'use client'

import Head from 'next/head'
import MartyHoodie from '@/components/ui/MartyHoodie'

export default function HoodiePage() {
  return (
    <>
      <Head>
        <title>MARTY Crewneck — Merch</title>
        <meta
          name="description"
          content="Shop the official MARTY crewneck — collegiate, cozy, and emotionally fluent. Beige/navy and navy/gold available soon."
        />
      </Head>

      <main className="bg-black text-white min-h-screen">
        <MartyHoodie />
      </main>
    </>
  )
}