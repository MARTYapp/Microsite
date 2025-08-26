'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CTAButton() {
  return (
    <motion.a
      href="https://buymeacoffee.com/ericadler"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-black text-white hover:bg-white hover:text-black border-2 border-white transition-all duration-300 rounded-full text-lg font-semibold shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Fuel the Founder"
    >
      ☕ Fuel the Founder
    </motion.a>
  )
}