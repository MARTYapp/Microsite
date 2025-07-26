"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const taglines = [
  "Quiet tech for loud minds.",
  "Built for the avoiders, the overthinkers, and the night-crawlers.",
];

export default function HomeHero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 text-white text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {taglines[currentTagline]}
      </motion.h1>
    </section>
  );
}
