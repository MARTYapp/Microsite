import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVideoLoaded(true)
    }, 500) // fallback in case onCanPlayThrough doesn't fire

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center text-white overflow-hidden bg-black">
      {/* 🎥 BACKGROUND VIDEO with fallback + fade-in */}
      {!videoLoaded && (
        <Image
          src="/Fallback.jpg"
          alt="Background fallback"
          fill
          className="object-cover absolute inset-0 z-0 transition-opacity duration-500 opacity-100"
          priority
        />
      )}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover z-0 transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onCanPlayThrough={() => setVideoLoaded(true)}
      >
        <source src="/mb.mp4" type="video/mp4" />
      </video>

      {/* 💡 GLOW OVERLAY */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700/30 via-transparent to-transparent animate-pulse pointer-events-none" />

      {/* 🧠 MAIN CONTENT */}
      <motion.div
        className="z-20 max-w-3xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold sm:text-6xl tracking-tight drop-shadow-md">
          MARTY ≠ THERAPY
        </h1>

        <p className="text-lg sm:text-xl text-gray-200">
          Built for the avoiders, the overthinkers, the night-crawlers.
          <br className="hidden sm:inline" />
          Not everyone needs a clinician. Some of us just need a narrator.
        </p>

        <Link href="#talk" passHref>
          <motion.button
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition backdrop-blur"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🧠 Talk to MARTY Now
          </motion.button>
        </Link>
      </motion.div>

      {/* VISUAL ELEMENTS */}
      <div className="absolute bottom-4 left-4 z-20 hidden md:block">
        <Image
          src="/assets/poster-dbt.png"
          alt="DBT Pillars Poster"
          width={160}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="absolute bottom-4 right-4 z-20 hidden md:block">
        <Image
          src="/assets/poster-quote.png"
          alt="Quote Poster"
          width={160}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="absolute top-20 right-1/2 z-20 translate-x-1/2 hidden md:block">
        <Image
          src="/assets/marty-hoodie.png"
          alt="Marty Hoodie"
          width={220}
          height={220}
          className="rounded-xl shadow-xl"
        />
      </div>

      <div className="absolute top-6 left-6 z-20 hidden md:block">
        <Image
          src="/assets/calendar-365.png"
          alt="The MARTY Method 365 Calendar"
          width={160}
          height={160}
          className="rounded-xl shadow-md"
        />
      </div>
    </section>
  )
}