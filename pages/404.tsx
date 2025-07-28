'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-black text-center px-6 font-space max-w-2xl mx-auto relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-6xl font-extrabold tracking-tight"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.45, ease: 'easeInOut' }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl text-gray-300"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.45, ease: 'easeInOut' }}
      >
        Page not found. That’s okay.
      </motion.p>
      <motion.p
        className="mt-2 text-lg text-gray-500"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.45, ease: 'easeInOut' }}
      >
        Even avoiders find their way back.
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.45, ease: 'easeInOut' }}
      >
        <Link href="/" passHref legacyBehavior>
          <Button className="bg-white text-black hover:bg-gray-200">
            🧠 Back to MARTY
          </Button>
        </Link>
      </motion.div>
      <div className="absolute bottom-6 right-6 text-gray-800 opacity-10 text-9xl animate-pulse select-none pointer-events-none">
        M
      </div>
    </motion.div>
  )
}