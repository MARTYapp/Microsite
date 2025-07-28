'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="text-center py-10 text-zinc-500 text-sm">
        © {new Date().getFullYear()} The MARTY App. Built with DBT & realness.
        <br />
        <Link href="/terms" className="underline hover:text-white">
          Terms of Use
        </Link>
        {' • '}
        <Link href="/privacy" className="underline hover:text-white">
          Privacy
        </Link>
        {' • '}
        <Link
          href="https://coff.ee/ericadler"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          💸Fund the Founder 💸
        </Link>
      </footer>
    </>
  )
}