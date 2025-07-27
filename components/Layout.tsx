import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'

export default function Layout({
  children,
  title = 'The MARTY App',
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white font-sans">
      <Head>
        <title>{title}</title>
        <meta name="description" content="MARTY ≠ THERAPY — A digital dad built for the avoiders, the overthinkers, and the night-crawlers." />
      </Head>

      <header className="p-4 text-sm text-zinc-400">
        <Link href="/">← Back to Home</Link>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex-1 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="relative p-4 pt-12 text-xs text-center text-zinc-500 border-t border-zinc-800">
        <CTABanner />
        <p className="mt-8">© {new Date().getFullYear()} The MARTY App — All rights earned.</p>
      </footer>
    </div>
  )
}