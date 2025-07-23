// components/CTAButton.tsx
'use client';

import React from "react";
import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <motion.a
      href="/journal"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-full text-lg font-semibold shadow-lg"
    >
      🧠 Hit Up MARTY Now
    </motion.a>
  );
}