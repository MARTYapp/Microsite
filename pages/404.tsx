import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-black text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-6xl font-extrabold tracking-tight"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl text-gray-300"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Page not found — but you’re not lost.
      </motion.p>
      <motion.p
        className="mt-2 text-lg text-gray-500"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Even avoiders find their way back eventually.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          🧠 Back to MARTY
        </Link>
      </motion.div>
    </motion.div>
  )
}
