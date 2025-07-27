'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button' // 🧠 MARTY custom button

export default function FuelTheFounderCTA() {
  return (
    <div className="flex justify-center mt-10">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl shadow-xl tracking-tight"
          onClick={() =>
            document
              .getElementById('how-it-works')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          🔥 Fuel the Founder
        </Button>
      </motion.div>
    </div>
  )
}
