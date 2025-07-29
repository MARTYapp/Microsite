'use client'

import Head from 'next/head'
import MartyCrewneck from '@/components/ui/MartyHoodie' // ✅ Fixed path

export default function HoodiePage() {
  return (
    <>
      <Head>
        <title>MARTY Crewneck — Merch</title>
        <meta
          name="description"
          content="Shop the official MARTY crewneck — collegiate, cozy, and emotionally fluent. Beige/navy and navy/gold options now live."
        />
      </Head>

      <main className="bg-black text-white min-h-screen">
        <MartyCrewneck />
      </main>
    </>
  )
}