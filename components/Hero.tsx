'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section
      className="w-full h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* 🔮 Glow & Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-purple-500/5 to-black/40" />
        <motion.div
          className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 opacity-10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* 🎥 Video Background */}
      {isClient && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/mb.mp4" type="video/mp4" />
          <source src="/mb.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* 💬 Hero Text */}
      <motion.h1
        className="z-10 text-white text-6xl md:text-7xl font-bold tracking-wider drop-shadow-lg"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        MARTY
      </motion.h1>

      <p className="z-10 mt-6 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
        Designed for those who don’t fit traditional therapy, but still need someone real to talk to.
      </p>

      {/* 🧠 Call to Action */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="z-10 mt-10 px-6 py-3 border border-white text-white rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
      >
        🧠 Hit Up MARTY Now
      </motion.button>
    </motion.section>
  );
}