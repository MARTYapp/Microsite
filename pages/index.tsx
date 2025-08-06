import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and night-crawlers." />
      </Head>

      <main className="bg-black text-white scroll-smooth min-h-screen overflow-x-hidden">
      {/* 🎬 Hero Slide */}
      <section
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/images/landing-hero.png')" }}
      >
        <div className="text-center z-20 backdrop-blur-sm p-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-md mb-4">
            MARTY ≠ THERAPY
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
            “Change. Inhale. Acceptance. Exhale.”
            <br />
            For the Quiet Ones™, the executive dysfunction fam™, and the perfectionist overthinkers™ alike.
          </p>
        </div>
        <div className="absolute bottom-6 text-sm text-white/50 animate-bounce">Scroll ↓</div>
      </section>

      {/* 💬 MARTY Chat CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-zinc-900 to-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Talk to MARTY</h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
          Not a therapist. Not a vibe app. Just MARTY. Steady, private, AI reflection when you need it.
        </p>
        <Link href="/journal" passHref>
          <span className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
            🧠 Journal with MARTY
          </span>
        </Link>
      </section>

      {/* 💸 Fund the Founder */}
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

      {/* 🛍️ Store Tease */}
      <section className="py-24 px-6 bg-zinc-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Drop Incoming</h2>
        <p className="text-white/60 mb-8">Crewnecks, posters, journals. No cringe merch. Just calm tech with texture.</p>
        <Link href="/store" passHref>
          <span className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-full shadow hover:bg-zinc-200 transition">
            🛒 Browse Store
          </span>
        </Link>
      </section>

      {/* 🧾 Footer */}
      <footer className="w-full py-6 px-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 bg-black/80 backdrop-blur-md border-t border-white/10 shadow-inner shadow-purple-500/20">
        <div className="mb-2 md:mb-0">© 2025 The MARTY App. Built with precision + rebellion.</div>
        <div className="text-white/70 text-sm tracking-wider">MARTY ≠ THERAPY</div>
        <div className="flex gap-4 items-center">
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          <a
            target="_blank"
            href="https://coff.ee/ericadler"
            className="text-amber-400 hover:text-amber-300 font-medium shimmer-m glow-on-hover"
          >
            💸 Fund the Founder 💸
          </a>
        </div>
      </footer>
      </main>
    </>
  )
}