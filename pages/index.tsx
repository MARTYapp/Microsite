import Hero from '@/components/HomeHero'
import Intro from '@/components/Intro'
import TryMarty from '@/components/TryMarty'
import WhyItWorks from '@/components/WhyItWorks'
import FounderManifesto from '@/components/FounderManifesto'
import InvestorLayer from '@/components/InvestorLayer'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* 🎬 SECTION 1 — Hook + Identity */}
      <Hero />

      {/* 🧠 SECTION 2 — What Even Is This? */}
      <Intro />

      {/* 💬 SECTION 3 — Try Marty */}
      <TryMarty />

      {/* 🛠️ SECTION 4 — Why It Works (Kano-inspired feature grid) */}
      <WhyItWorks />

      {/* 📖 SECTION 5 — Founder Manifesto */}
      <FounderManifesto />

      {/* 💰 SECTION 6 — For Investors */}
      <InvestorLayer />

      {/* 🔗 Socials, CTA, etc */}
      <Footer />

      {/* Fund the Founder */}
      <section className="py-32 px-6 bg-black text-center border-t border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-amber-400">Fund the Founder.</h2>
        <p className="mb-6 text-white/70 max-w-xl mx-auto text-base md:text-lg">
          No investors. No noise. Just one founder building something real.
        </p>
        <a
          href="https://coff.ee/ericadler"
          target="_blank"
          className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
        >
          💸 Back the Build 💸
        </a>
      </section>

      {/* Merch Store CTA */}
      <section className="py-24 px-6 bg-zinc-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Drop Incoming</h2>
        <p className="text-white/60 mb-8">
          Crewnecks, posters, journals. No cringe merch. Just calm tech with texture.
        </p>
        <Link href="/store">
          <span className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-full shadow hover:bg-zinc-200 transition">
            🛒 Browse Store
          </span>
        </Link>
      </section>
    </main>
  )
}