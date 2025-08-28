// pages/index.tsx
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>theMARTYapp — MARTY ≠ THERAPY</title>
        <meta name="description" content="Quiet tech for loud minds. Not your therapist. Not your dad. Just MARTY." />
      </Head>

      <main className="min-h-screen w-full bg-black text-white">
        {/* PAGE 1: HERO */}
        <section
          className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 overflow-hidden
                     pt-[calc(env(safe-area-inset-top)+24px)] pb-[calc(env(safe-area-inset-bottom)+32px)]">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,.06),transparent_55%)]" />
          <div className="relative z-10 flex max-w-5xl flex-col items-center text-center mx-auto">
            {/* Logo above heading */}
            <img
              src="/images/TMALOGO.png"
              alt="the MARTY app"
              className="w-[min(220px,40vw)] h-auto mb-5"
            />

            {/* Main heading */}
            <h1 className="text-[clamp(40px,9vw,110px)] leading-none font-extrabold tracking-tight">
              MARTY ≠ THERAPY
            </h1>
            <p className="mt-3 text-[clamp(18px,3.5vw,34px)] font-semibold">Just MARTY</p>

            {/* Tagline block */}
            <p className="mt-6 max-w-2xl text-white/75 text-[clamp(14px,2.6vw,18px)] leading-relaxed">
              Quiet tech for loud minds. Built for the avoiders, the overthinkers, and the night-crawlers.
              Not your therapist. Not your dad. Just MARTY.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#journal" className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90">
                Try Marty Now
              </a>
              <a href="#fund" className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black">
                Fund Marty
              </a>
            </div>

            <div className="mt-12 text-xs text-white/50">scroll</div>
          </div>
        </section>

        {/* PAGE 2: MEET MARTY AI */}
        <section id="meet" className="relative py-20 px-6 bg-gradient-to-b from-black to-[#0b0c12]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">Meet MARTY AI</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-center text-lg leading-relaxed">
              MARTY isn’t a therapist. He’s your emotionally steady, trauma-informed digital bro. Voice-first.
              Neuro-inclusive. Built different. When you journal with MARTY, you’re not just venting into the void.
              You’re in an interactive reflection loop where real tools meet real talk. Every session builds toward clarity.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl mb-2">🧠 Pattern Recognizer</div>
                <p className="text-white/75 text-sm leading-relaxed">
                  MARTY flags mental loops, distorted thoughts, and recurring narratives — so you can break the cycle and rewire them.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl mb-2">📓 DBT + EF Visualizer</div>
                <p className="text-white/75 text-sm leading-relaxed">
                  Visual coaching tools rooted in Dialectical Behavior Therapy and Executive Functioning — calm your chaos.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl mb-2">🪞 Backward Review Journaling</div>
                <p className="text-white/75 text-sm leading-relaxed">
                  One day at a time. No judgment. Just emotional debriefing that makes your story feel seen and your patterns feel beatable.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <a href="#journal" className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90">Try MARTY</a>
              <a href="#fund" className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black">Fund MARTY</a>
            </div>
          </div>
        </section>

        {/* PAGE 3: HOW IS MARTY DIFFERENT */}
        <section id="different" className="relative py-20 px-6 bg-[#0b0c12]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">How is MARTY Different?</h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Less essays, more action. MARTY answers short, direct, and practical — with DBT-flavored nudges and timers
              so you actually move. Not a vibe app, not a diary dump, and not a therapist. Just the steady voice that gets you unstuck.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a href="#journal" className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90">Try MARTY</a>
              <a href="#fund" className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black">Fund MARTY</a>
            </div>
          </div>
        </section>

        {/* JOURNAL (anchor target demo) */}
        <section id="journal" className="py-20 px-6 bg-black">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold mb-6">Your MARTY Journal</h3>
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
              <input
                placeholder="Type your thought…"
                className="w-full rounded-xl bg-black/40 px-4 py-3 outline-none"
              />
              <div className="mt-3 flex justify-end">
                <Link href="/journal" className="rounded-full bg-white text-black px-6 py-2 font-semibold hover:bg-white/90">
                  Open Full Journal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FUND (anchor target demo) */}
        <section id="fund" className="py-16 px-6 bg-gradient-to-b from-[#0b0c12] to-black">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold mb-4">Fund the Founder</h3>
            <p className="text-white/80 max-w-xl mx-auto">
              Every dollar goes straight into building MARTY — servers, prototypes, design, survival. Thank you. 🙏
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/fund" className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90">
                Stripe / Checkout
              </Link>
              <a
                href="https://buymeacoffee.com/ericadler"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black"
              >
                Buy Me a Coffee
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}