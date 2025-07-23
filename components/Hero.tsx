'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* 🔥 Background Video with optional fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback.jpg" // Optional fallback preview
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
      >
        <source src="/mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌓 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0" />

      {/* 🔗 Top-left header */}
      <Link
        href="/microsite"
        className="absolute top-6 left-6 z-10 text-white text-sm sm:text-base font-semibold tracking-wide uppercase bg-white/10 px-4 py-2 rounded-lg backdrop-blur hover:scale-105 transition"
      >
        The MARTY App
      </Link>

      {/* 🧠 Main Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg max-w-4xl">
          Built for the overthinkers, avoiders, and night-crawlers.
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-xl text-white/90">
          The MARTY App helps you pause, reflect, and move forward — even when your brain won't shut up.
        </p>

        <Link href="/marty-ai">
          <button className="mt-10 bg-white text-black font-bold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition">
            🧠 Talk to MARTY Now
          </button>
        </Link>
      </motion.div>

      {/* ⬇ Bottom-right M Icon */}
      <Link href="/marty-ai">
        <div className="absolute bottom-6 right-6 z-10 bg-white text-black font-extrabold text-xl sm:text-2xl px-4 py-2 rounded-full shadow-lg hover:scale-110 transition">
          M
        </div>
      </Link>
    </section>
  );
}