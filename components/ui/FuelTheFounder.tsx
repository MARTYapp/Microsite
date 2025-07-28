'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button' // ✅ CASE FIXED

export default function FuelTheFounderCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-16 flex flex-col items-center gap-6 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        💸 Fund the Founder 💸
      </h2>
      <p className="max-w-xl text-muted-foreground">
        The MARTY App is built by one guy with a mission, no outside funding (yet).
        Every dollar supports trauma-informed tech for the real ones.
      </p>
      <Button
        size="lg"
        asChild
      >
        <a
          href="https://coff.ee/ericadler"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Me a Coffee
        </a>
      </Button>
    </motion.section>
  )
}