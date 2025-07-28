'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button' // ✅ FIXED: capital B

export default function FuelTheFounderCTA() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Button size="lg" className="mt-6">
        💸 Fund the Founder 💸
      </Button>
    </motion.div>
  )
}