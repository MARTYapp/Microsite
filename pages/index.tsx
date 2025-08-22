import Head from 'next/head'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

type Slide = {
  id: string
  title: string
  subhead?: string
  tagline?: string
  bullets?: string[]
  ascii?: string
  visualHint?: string
  speakerNote?: string
  video?: string
}

const SLIDES: Slide[] = [
  {
    id: 'title',
    title: 'the\nMARTY\napp',
    subhead: 'Not a therapist, not a vibe app. Just MARTY.\nA new category in emotional tech.',
    tagline: 'MARTY ≠ THERAPY\n≠ means NOT',
    ascii: `
████████████████████████████████████████
██╔══╗███████╔╗██████████████╔██████╔███
██╔╗████████╔╝██╔══╗████╔════╝██╔══██╔██
██║╚╗██████╔══██╔╗████████║██████╔╗████║
████╗█████╔╝███████║████████║██████████║
████╚═════╝████████╚═══════╚═██████████║
██████████████ THE MARTY APP ███████████
████████████████████████████████████████`,
    visualHint: 'Industrial ASCII art logo with stark black/white contrast',
    speakerNote: "We're not fixing therapy. We're creating something entirely new.",
    video: "/LoftLanding.mp4",
  },
  {
    id: 'problem',
    title: "MILLIONS WON'T DO THERAPY — BUT THEY STILL WANT CHANGE.",
    bullets: [
      '⚡ THERAPY DROP-OFF IS BRUTAL: stigma, cost, schedules.',
      '😖 JOURNALS AND "MOOD APPS" FEEL CLINICAL, OR CRINGE.',
      '🔑 THE GAP? PEOPLE NEED A STEADY PARTNER THAT ACTUALLY MOVES WITH THEM.',
    ],
    ascii: `
┌─────────────────────────────────┐
│ THERAPY APPS                    │
│ [████████░░] 20% completion     │
│ 40M downloads → 5M active       │
└─────────────────────────────────┘
              ▼ GAP ▼
┌─────────────────────────────────┐
│ WHAT PEOPLE ACTUALLY WANT       │
│ • Steady partner                │
│ • No clinical feel              │
│ • Actually moves with them      │
└─────────────────────────────────┘`,
    visualHint: 'Data visualization showing the massive drop-off in therapy app usage',
    speakerNote: '40 million Americans tried therapy apps last year. 35 million quit within 30 days.',
  },
  {
    id: 'solution',
    title: 'MARTY — A STEADY AI PARTNER THAT NUDGES, MIRRORS, AND KEEPS RECEIPTS.',
    bullets: [
      '💬 CHAT-FIRST, iPHONE-STYLE UX: ZERO FRICTION.',
      '🔍 ADAPTIVE REFLECTIONS, NOT DIAGNOSES.',
      '🚀 MICRO NUDGES → MOMENTUM → MEASURABLE CHANGE.',
    ],
    ascii: `
┌──────── MARTY CHAT FLOW ────────┐
│ You: "feeling stuck again"       │
│                                  │
│ MARTY: I hear that. What does    │
│ "stuck" look like today? The     │
│ same loop as Tuesday, or         │
│ something new?                   │
│                                  │
│ You: "same loop"                 │
│                                  │
│ MARTY: Got it. What's one tiny   │
│ thing you could shift right now? │
└─────────────────────────────────┘`,
    visualHint: 'Clean chat interface mockup with natural conversation flow',
    speakerNote: 'Think less "digital therapist," more "that friend who remembers what you said last week."',
  },
  {
    id: 'whynow',
    title: 'MENTAL HEALTH APPS FEEL STALE. CULTURE IS READY FOR USEFUL, NOT CLINICAL.',
    bullets: [
      '⚡ GENAI UNLOCKED PARTNER-LEVEL UX.',
      '🎨 CREATOR ECONOMY PRIMED FOR LICENSED RITUALS.',
      '🔑 WE ALREADY OWN “MARTY ≠ THERAPY” IN THE WILD.',
    ],
    ascii: `
2019 ←──── CLINICAL APPS ────→ 2024
  │                              │
  ▼                              ▼
[DR MOOD]                   [MARTY APP]
• Diagnose                  • Partner
• Clinical                  • Cultural
• Dropout                   • Stick

    GenAI + Creator Economy = NEW CATEGORY`,
    visualHint: 'Timeline visualization showing evolution from clinical to cultural',
    speakerNote: "When creators are making MARTY references, you know we've hit something real.",
  },
  {
    id: 'traction',
    title: 'CULT ENERGY > AD SPEND.',
    bullets: [
      '🚫 ZERO PAID ACQUISITION — USERS ARRIVE AND STICK.',
      '🔥 BETA TESTERS ARE ASKING FOR “THE REAL THING.”',
      '👕 MERCH SELL-THROUGH PROVES MARTY IS A CULTURAL BRAND, NOT JUST AN APP.',
    ],
    ascii: `
ORGANIC GROWTH METRICS
─────────────────────
Users:     ██████░░░░ 2.5K beta
Retention: ████████░░ 85%
NPS:       ████████░░ +73
Merch:     ██████░░░░ SOLD OUT

"I need this app to be real" - Beta tester
"When's the full version?" - Beta tester`,
    visualHint: 'Clean metrics dashboard with user testimonial quotes',
    speakerNote: "Our crewnecks are selling faster than we can print them. That's brand power.",
  },
  {
    id: 'product',
    title: 'A CINEMATIC CHAT THAT FEELS HUMAN, NOT CLINICAL.',
    bullets: [
      '🧠 ADAPTIVE DBT-ALIGNED SUMMARIES.',
      '🔍 PATTERN RECOGNITION THAT SPOTS STUCK PATTERNS & NUDGES FORWARD.',
      '📅 DAILY CHECK-INS + LO-FI CINEMATIC ROOMS.',
    ],
    ascii: `
┌─── MARTY PRODUCT SUITE ───┐
│                           │
│ 💬 CHAT ENGINE            │
│ ├─ Pattern recognition    │
│ ├─ DBT-aligned nudges     │
│ └─ Stuck-pattern spotting │
│                           │
│ 🎬 CINEMATIC ROOMS        │
│ ├─ Lo-fi environments     │
│ ├─ Daily check-ins        │
│ └─ Mood atmospheres       │
└───────────────────────────┘`,
    visualHint: 'Product architecture diagram with masculine industrial styling',
    speakerNote: "DBT techniques, delivered like you're texting with someone who actually gets it.",
  },
  {
    id: 'market',
    title: "WE'RE BUILDING A $2B CATEGORY BY 2028.",
    bullets: [
      '🌍 MILLIONS UNDERSERVED BY THERAPY APPS.',
      '70M+ AMERICANS WITH ADHD, OVERTHINKING, OR EXEC DYSFUNCTION.',
      '📈 GLOBAL TAM EXPANDING AS “EMOTIONAL OS” EMERGES.',
    ],
    ascii: `
TOTAL ADDRESSABLE MARKET
─────────────────────────
[███████████████████████] $2B by 2028

BREAKDOWN:
├─ 70M Americans: ADHD/Executive Dysfunction
├─ 40M: Therapy dropouts seeking alternatives
├─ 25M: Emotional wellness early adopters
└─ Global expansion: 3x multiplier

Traditional therapy apps: $800M TAM
"Emotional OS" category: $2B+ opportunity`,
    visualHint: 'Bold market sizing visualization with clean geometric shapes',
    speakerNote: "This isn't about taking market share. It's creating a market that doesn't exist yet.",
  },
  {
    id: 'model',
    title: 'FOUR STACKED REVENUE STREAMS.',
    bullets: [
      '💎 PREMIUM SUBSCRIPTIONS.',
      '🏢 LICENSED B2B PROMPTS + RITUALS.',
      '🛍️ MERCH + AFFILIATE FLOWS.',
      '🎥 BRANDED MEDIA + COLLABS.',
    ],
    ascii: `
REVENUE STACK
─────────────
[1] PREMIUM SUBS      ████████░░ $9.99/mo
[2] B2B LICENSING     ██████░░░░ $50K+/deal
[3] MERCH + AFFILIATE ████░░░░░  40% margins
[4] BRANDED CONTENT   ██░░░░░░░░ Partnership $

Total projection: $15M ARR by Year 3`,
    visualHint: 'Stacked bar chart showing revenue diversification',
    speakerNote: "Multiple revenue streams mean we're not dependent on subscription churn.",
  },
  {
    id: 'brand',
    title: 'MARTY IS ALREADY A CULTURAL OBJECT.',
    bullets: [
      '🔥 SLOGANS IN THE WILD: “MARTY ≠ THERAPY.”',
      '👕 MERCH: CREWNECKS, POSTERS, EVEN RADICAL ACCEPTANCE™ LUBE.',
      '📢 #FUNDTHEFOUNDER TRENDING AS CTA + IDENTITY.',
    ],
    ascii: `
CULTURAL PENETRATION
───────────────────
MARTY ≠ THERAPY ──────── [TRENDING]
├─ TikTok mentions: 50K+
├─ Reddit discussions: Active
└─ Merch in wild: Verified

PRODUCTS IN MARKET:
├─ Crewnecks: SOLD OUT
├─ Posters: SOLD OUT
├─ Radical Acceptance™ lube: CULT HIT

#FundTheFounder = IDENTITY + CTA`,
    visualHint: 'Social media analytics dashboard showing viral spread',
    speakerNote: "When users wear the brand to therapy sessions, you've transcended 'app.'",
  },
  {
    id: 'roadmap',
    title: 'FROM CULT FAVORITE → MAINSTREAM ADOPTION.',
    bullets: [
      '🎯 BETA: 2,500 RETURNING USERS BY THANKSGIVING 2025.',
      '⚙️ NEXT: FEATURE POLISH + LICENSING PILOTS.',
      '🚀 SCALE: EMOTIONAL OS → CATEGORY LEADER BY 2028.',
    ],
    ascii: `
ROADMAP TO DOMINANCE
───────────────────
2025 Q4: ████░░░░░░ Beta (2.5K users)
2026 Q1: ██████░░░░ Polish + Launch
2026 Q2: ████████░░ B2B Licensing
2027 Q1: ██████████ Emotional OS leader

MILESTONES:
├─ Thanksgiving 2025: 2,500 returning users
├─ 2026: Feature polish + licensing pilots
└─ 2028: Category leader, emotional OS`,
    visualHint: 'Timeline with progress bars and key milestone markers',
    speakerNote: "We're not rushing to scale. We're building something that lasts, then taking it everywhere.",
  },
]

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const p = Math.min(1, Math.max(0, scrollTop / max));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return progress;
}

const BackgroundVideo: React.FC = () => {
  const progress = useScrollProgress();
  const overlayOpacity = Math.min(0.75, progress * 0.95); // dim heavier as you scroll
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        muted
        autoPlay
        loop
        playsInline
        src="/LoftLanding.mp4"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(7,14,28,0.85))',
          opacity: overlayOpacity,
        }}
      />
    </div>
  );
};

const StickyCTA: React.FC = () => {
  const progress = useScrollProgress();
  const show = progress > 0.4;
  return (
    <div
      className={[
        'fixed inset-x-0 bottom-4 z-40 flex items-center justify-center px-4 transition-all duration-300',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none',
      ].join(' ')}
    >
      <div className="max-w-4xl grow rounded-2xl border border-blue-400/30 bg-black/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <p className="px-1 text-center text-sm font-semibold tracking-wide text-white/90">
            Be early. Build momentum, not mood logs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/marty-ai" className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60">
              Join Beta
            </Link>
            <Link href="/investor" className="rounded-full border border-blue-400/50 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60">
              Investor Access
            </Link>
            <Link href="/store" className="rounded-full border border-blue-400/50 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60">
              #FundTheFounder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function Section({ slide }: { slide: Slide }) {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden bg-gradient-to-b from-black via-[#0b1a3a]/30 to-black/90">
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 font-sans">
        <header className="mb-8">
          <h1 className="whitespace-pre-line text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            {slide.title}
          </h1>
          {slide.subhead && (
            <p className="mt-5 whitespace-pre-line text-white/85 text-lg md:text-xl">
              {slide.subhead}
            </p>
          )}
          {slide.tagline && (
            <p className="mt-3 whitespace-pre-line text-sm uppercase tracking-[0.2em] text-blue-400">
              {slide.tagline}
            </p>
          )}
        </header>

        {slide.bullets && (
          <ul className="mt-6 space-y-3">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-blue-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {slide.ascii && (
          <pre className="mt-8 overflow-x-auto rounded-xl border border-blue-400/40 bg-gradient-to-b from-black/70 to-[#0b1a3a]/60 p-5 text-[12px] leading-[1.35] text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.35)] ring-1 ring-blue-500/20">
            {slide.ascii}
          </pre>
        )}

        {slide.visualHint && (
          <div className="mt-3 text-xs text-gray-500">[Slide visual suggestion: {slide.visualHint}]</div>
        )}


        <footer className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
          X @TheMARTYApp · Instagram 📷 · #FundTheFounder
        </footer>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>MARTY ≠ THERAPY — The MARTY App</title>
        <meta
          name="description"
          content="Not a therapist, not a vibe app. Just MARTY. A steady AI partner for Quiet Ones, Overthinkers, and the executive dysfunction fam."
        />
      </Head>
      <BackgroundVideo />
      <main className="bg-marty-black">
        {SLIDES.map((slide) => (
          <Section key={slide.id} slide={slide} />
        ))}
      </main>
      <StickyCTA />
    </>
  )
}