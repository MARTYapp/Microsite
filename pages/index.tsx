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

      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen w-full"
        style={{ backgroundImage: 'url("/images/landing-hero.png")' }}
      >
        <section className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
          <div className="mb-4 text-xl font-semibold tracking-wide leading-tight">
            “Change. Inhale. Acceptance. Exhale.”
          </div>
          <p className="text-white/80 text-sm sm:text-base mt-2">
            Designed for the Quiet Ones™, the executive dysfunction fam™, and the perfectionist overthinkers™ alike.
          </p>
          <Image
            src="/images/crewneck-beige-navy.png"
            alt="MARTY Crewneck"
            width={240}
            height={240}
            className="mb-6 rounded-md shadow-xl"
          />
          <Image
            src="/images/breath-spiral.png"
            alt="4-Count Breathing Spiral"
            width={200}
            height={200}
            className="my-4"
          />
          <div className="mt-2 mb-6">
            <CTAButton />
          </div>
          <div className="mt-4">
            <FuelTheFounder />
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}