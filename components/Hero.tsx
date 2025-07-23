'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
      >
        <source src="/mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌓 Optional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0" />

      {/* ✨ Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Built for the overthinkers, avoiders, and night-crawlers.
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-xl text-white/90">
          The MARTY App helps you pause, reflect, and move forward — even when your brain won't shut up.
        </p>

        <button className="mt-10 bg-white text-black font-bold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition">
          🧠 Talk to MARTY Now
        </button>
      </motion.div>
    </section>
  );
}