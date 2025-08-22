// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import React from "react";

/**
 * MARTY Landing — Jared x Loren
 * - Black→Blue gradients only
 * - Oversized type, tight hierarchy, intrigue-first copy
 * - Sections: Hero → Problem → Solution → Why Now → Traction → Market → Pricing → Roadmap → CTA
 */

type Block = {
  id: string;
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: string[];
  callout?: string;
};

const SECTIONS: Block[] = [
  // 1) Problem
  {
    id: "problem",
    eyebrow: "Problem",
    title: "THERAPY IS BROKEN FOR MOST.",
    body:
      "40M downloaded therapy apps last year. 35M quit in the first 30 days. Journals and “mood apps” feel clinical — or cringe.",
    callout: "People want a partner that actually moves with them.",
  },
  // 2) Solution
  {
    id: "solution",
    eyebrow: "Solution",
    title: "MEET MARTY.",
    bullets: [
      "Not a therapist. Not a diary.",
      "A steady AI partner that nudges, mirrors, and keeps receipts.",
      "Feels like texting someone who remembers — and helps you move.",
    ],
  },
  // 3) Why Now
  {
    id: "whynow",
    eyebrow: "Why Now",
    title: "CULTURE IS DONE WITH CLINICAL.",
    bullets: [
      "GenAI finally unlocked partner-level UX.",
      "Creator economy is primed for licensed rituals and prompts.",
      "We already own the streets with “MARTY ≠ THERAPY.”",
    ],
  },
  // 4) Traction (your revised content)
  {
    id: "traction",
    eyebrow: "Traction",
    title: "CULT ENERGY > AD SPEND.",
    bullets: [
      "Big Goals: 2.5K beta users by Q4 ’25",
      "Zero ad spend.",
      "Merch sell-outs.",
    ],
    callout:
      "When people wear your brand before you even launch, you’ve already won.",
  },
  // 5) Market
  {
    id: "market",
    eyebrow: "Market Opportunity",
    title: "$2B CATEGORY BY 2028.",
    bullets: [
      "Millions underserved by therapy apps.",
      "70M+ with ADHD, overthinking, or executive dysfunction.",
      "Global TAM = emotional OS, not “health.”",
    ],
  },
  // 6) Pricing (replaces former Brand section)
  {
    id: "pricing",
    eyebrow: "Pricing",
    title: "CLEAR, STACKED REVENUE STREAMS.",
    bullets: [
      "Premium subscription — $9.99/mo: core access.",
      "Licensed B2B prompts & rituals — $50k+/deal.",
      "Merch + affiliate flows — ~40% margins.",
      "Branded media & collabs — upside partnerships.",
    ],
    callout: "MARTY scales like software, performs like culture.",
  },
  // 7) Roadmap
  {
    id: "roadmap",
    eyebrow: "Roadmap",
    title: "FROM CULT FAVORITE → CATEGORY LEADER.",
    bullets: [
      "Beta: 2,500 returning users by Thanksgiving 2025.",
      "2026: Feature polish + licensing pilots.",
      "2028: Emotional OS → category king.",
    ],
  },
];

const Eyebrow: React.FC<{ text: string }> = ({ text }) => (
  <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-white/55">
    {text}
  </div>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-white">
    <i className="h-1.5 w-1.5 rounded-full bg-blue-400" />
    {children}
  </span>
);

const Divider = () => (
  <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

const SectionBlock: React.FC<{ block: Block }> = ({ block }) => (
  <section
    id={block.id}
    className="relative w-full bg-gradient-to-b from-black via-[#0b1a3a]/25 to-black text-white"
  >
    <div className="mx-auto max-w-6xl px-6 py-20">
      {block.eyebrow && <Eyebrow text={block.eyebrow} />}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {block.title}
      </h2>
      {block.body && (
        <p className="mt-5 max-w-3xl text-white/85 text-lg">{block.body}</p>
      )}
      {block.bullets && (
        <ul className="mt-6 space-y-3">
          {block.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-white/90">
              <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-blue-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {block.callout && (
        <div className="mt-8">
          <Chip>{block.callout}</Chip>
        </div>
      )}
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>MARTY ≠ THERAPY — The MARTY App</title>
        <meta
          name="description"
          content="Not a therapist. Not a vibe app. A new category in emotional tech. MARTY is a steady AI partner that nudges, mirrors, and keeps receipts."
        />
      </Head>

      {/* HERO */}
      <header className="relative w-full bg-gradient-to-b from-black via-black to-[#0b1a3a] text-white">
        <div className="mx-auto flex min-h-[84vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-white/55">
            the MARTY app
          </div>
          <h1 className="text-left text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            MARTY ≠ THERAPY
          </h1>
          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-white/85">
            Not a therapist. Not a vibe app.
            <br />
            A new category in emotional tech.
          </p>

          <p className="mt-6 max-w-2xl text-white/80">
            <em>
              Built for the millions who will never go to therapy — but still
              demand change.
            </em>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/marty-ai"
              className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            >
              Join Beta
            </Link>
            <Link
              href="/investor"
              className="rounded-full border border-blue-400/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            >
              Investor Access
            </Link>
            <Link
              href="/store"
              className="rounded-full border border-blue-400/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            >
              #FundTheFounder
            </Link>
          </div>

          <div className="mt-8">
            <Chip>Black + Blue. Bold ≠ Clinical.</Chip>
          </div>
        </div>
      </header>

      {/* SCROLL SECTIONS */}
      <main className="bg-black">
        {SECTIONS.map((b) => (
          <SectionBlock key={b.id} block={b} />
        ))}

        {/* CTA Footer */}
        <section className="bg-black text-white">
          <Divider />
          <div className="mx-auto max-w-6xl px-6 pb-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Ready to be early?
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/marty-ai"
                className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              >
                Join Beta
              </Link>
              <Link
                href="/investor"
                className="rounded-full border border-blue-400/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              >
                Investor Access
              </Link>
              <Link
                href="/store"
                className="rounded-full border border-blue-400/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              >
                #FundTheFounder
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              X @TheMARTYApp · Instagram 📷 · #FundTheFounder
            </p>
          </div>
        </section>
      </main>
    </>
  );
}