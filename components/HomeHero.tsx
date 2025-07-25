"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const taglines = [
  "Quiet tech for loud minds.",
  "Built for the avoiders, the overthinkers, and the night-crawlers.",
];

export default function HomeHero() {
  const [mode, setMode] = useState<'stim' | 'calm'>('calm');
  const [currentTagline, setCurrentTagline] = useState(0);
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Assets/mb.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Tagline Content */}
      <div className="relative z-20 max-w-4xl px-6 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          THE MARTY APP
        </motion.h1>

        <motion.p
          key={currentTagline}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300"
        >
          {taglines[currentTagline]}
        </motion.p>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="text-white bg-indigo-600 hover:bg-indigo-700 shadow-md rounded-xl px-6 py-3"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🧠 Talk to MARTY Now
          </Button>
        </div>

        <p className="text-xs text-gray-400 mt-6">MARTY™ is a trademark of The MARTY App. All rights reserved.</p>
      </div>
    </section>
  );
}