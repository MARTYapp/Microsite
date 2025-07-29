'use client'

import Head from 'next/head'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'
import Footer from '@/components/ui/Footer'
import FuelTheFounder from '@/components/ui/FuelTheFounder'

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and night-crawlers." />
      </Head>

      <main className="relative w-full h-screen overflow-hidden bg-black text-white">
        {/* 🔁 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        >
          <source src="/videos/mb.mp4" type="video/mp4" />
        </video>

        {/* 🔆 Glow overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

        {/* 👁️‍🗨️ Hero Content */}
        <section className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">

          {/* 🧥 MARTY Crewneck */}
          <Image
            src="/images/crewneck-beige-navy.png"
            alt="MARTY Crewneck"
            width={240}
            height={240}
            className="mb-6 rounded-md shadow-xl"
          />

          {/* 🖼️ Quote Poster */}
          <div className="mb-4 text-xl font-semibold tracking-wide leading-tight">
            “Change. Inhale. Acceptance. Exhale.”
          </div>

          {/* 🧠 CTA Button */}
          <div className="mt-2 mb-6">
            <CTAButton />
          </div>

          {/* 🌀 Breathing Spiral Poster (static for now) */}
          <Image
            src="/images/breath-spiral.png"
            alt="4-Count Breathing Spiral"
            width={200}
            height={200}
            className="my-4"
          />

          {/* 💸 Fund the Founder */}
          <div className="mt-4">
            <FuelTheFounder />
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}