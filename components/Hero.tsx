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
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Fallback Overlay (gradient, safe) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10" />

      {/* 🧠 All Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        
        {/* 🌈 Glow Text (Optional) */}
        <h1 className="text-6xl font-black mb-8 drop-shadow-[0_0_40px_rgba(183,135,255,0.6)] pointer-events-none select-none">
          MARTY
        </h1>

        {/* 🗣 Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-md"
        >
          Built for the overthinkers,<br />
          avoiders, and night-crawlers.
        </motion.h2>

        {/* 💬 Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl max-w-xl text-white/90"
        >
          The MARTY App helps you pause, reflect, and move forward — even when your brain won't shut up.
        </motion.p>

        {/* 🧠 CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 bg-white text-black font-bold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          🧠 Talk to MARTY Now
        </motion.button>
      </div>

      {/* 🔳 Top-left: “THE MARTY APP” Label */}
      <div className="absolute top-5 left-5 z-30">
        <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded">
          THE MARTY APP
        </span>
      </div>

      {/* ⚪ Bottom-right: “M” Button */}
      <div className="absolute bottom-6 right-6 z-30">
        <button className="w-10 h-10 bg-white text-black text-xl font-bold rounded-full shadow hover:scale-110 transition">
          M
        </button>
      </div>
    </section>
  );
}