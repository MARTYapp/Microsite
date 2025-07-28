// components/ui/Footer.tsx

'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 bg-black/80 backdrop-blur-md border-t border-white/10 shadow-inner shadow-purple-500/20">
      <div className="mb-2 md:mb-0">© {new Date().getFullYear()} The MARTY App. Built by Eric Adler. All rights reserved.</div>
      <div className="flex gap-4 items-center">
        <Link href="/terms" className="hover:text-white transition">Terms</Link>
        <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
        <Link href="https://coff.ee/ericadler" target="_blank" className="text-amber-400 hover:text-amber-300 font-medium shimmer-m glow-on-hover">💸 Fund the Founder 💸</Link>
      </div>
    </footer>
  )
}