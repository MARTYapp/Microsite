"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const taglines = [
  "Quiet tech for loud minds.",
  "Built for the avoiders, the overthinkers, and the night-crawlers.",
];

export default function HomeHero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white bg-black overflow-hidden">
      {/* 🔵 Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      >
        <source src="/mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧠 Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>

      {/* 🔤 Main content */}
      <div className="relative z-20 text-center px-6 py-20 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          THE MARTY APP
        </motion.h1>

        <motion.p
          key={currentTagline}
          className="text-lg md:text-xl text-gray-300 mb-8 transition-opacity duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {taglines[currentTagline]}
        </motion.p>

        <motion.a
          href="#"
          className="inline-block px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
        >
          🧠 Talk to MARTY Now
        </motion.a>
      </div>
    </section>
  );
}
