import Head from 'next/head'
import React from 'react'

type Slide = {
  id: string
  title: string
  subhead?: string
  tagline?: string
  bullets?: string[]
  ascii?: string
  visualHint?: string
  speakerNote?: string
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
  },
  {
    id: 'problem',
    title: "Millions won't do therapy — but they still want change.",
    bullets: [
      'Therapy drop-off is brutal: stigma, cost, schedules.',
      'Journals and "mood apps" feel clinical, or cringe.',
      'The gap? People need a steady partner that actually moves with them.',
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
    title: 'MARTY — a steady AI partner that nudges, mirrors, and keeps receipts.',
    bullets: [
      'Chat-first, iPhone-style UX: zero friction.',
      'Adaptive reflections, not diagnoses.',
      'Micro nudges → momentum → measurable change.',
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
    title: 'Mental health apps feel stale. Culture is ready for useful, not clinical.',
    bullets: [
      'GenAI unlocked partner-level UX.',
      'Creator economy primed for licensed rituals.',
      'We already own “MARTY ≠ THERAPY” in the wild.',
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
    title: 'Cult energy > ad spend.',
    bullets: [
      'Zero paid acquisition — users arrive and stick.',
      'Beta testers are asking for “the real thing.”',
      'Merch sell-through proves MARTY is a cultural brand, not just an app.',
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
    title: 'A cinematic chat that feels human, not clinical.',
    bullets: [
      'Adaptive DBT-aligned summaries.',
      'Pattern recognition that spots avoidance & nudges action.',
      'Daily check-ins + lo-fi cinematic rooms.',
    ],
    ascii: `
┌─── MARTY PRODUCT SUITE ───┐
│                           │
│ 💬 CHAT ENGINE            │
│ ├─ Pattern recognition    │
│ ├─ DBT-aligned nudges     │
│ └─ Avoidance detection    │
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
    title: "We're building a $2B category by 2028.",
    bullets: [
      'Millions underserved by therapy apps.',
      '70M+ Americans with ADHD, overthinking, or exec dysfunction.',
      'Global TAM expanding as “emotional OS” emerges.',
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
    title: 'Four stacked revenue streams.',
    bullets: [
      'Premium subscriptions.',
      'Licensed B2B prompts + rituals.',
      'Merch + affiliate flows.',
      'Branded media + collabs.',
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
    title: 'MARTY is already a cultural object.',
    bullets: [
      'Slogans in the wild: “MARTY ≠ THERAPY.”',
      'Merch: crewnecks, posters, even Radical Acceptance™ lube.',
      '#FundTheFounder trending as CTA + identity.',
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
    title: 'From cult favorite → mainstream adoption.',
    bullets: [
      'Beta: 2,500 returning users by Thanksgiving 2025.',
      'Next: feature polish + licensing pilots.',
      'Scale: emotional OS → category leader by 2028.',
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

function Section({ slide }: { slide: Slide }) {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-black via-[#0a0a0b] to-[#0b1220] text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 font-sans">
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
            <p className="mt-3 whitespace-pre-line text-sm uppercase tracking-[0.2em] text-purple-300">
              {slide.tagline}
            </p>
          )}
        </header>

        {slide.bullets && (
          <ul className="mt-6 space-y-3">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-white/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {slide.ascii && (
          <pre className="mt-8 overflow-x-auto rounded-lg border border-white/10 bg-black/60 p-5 text-[12px] leading-[1.35] text-[#cdd5e0] shadow-inner">
            {slide.ascii}
          </pre>
        )}

        {slide.visualHint && (
          <div className="mt-3 text-xs text-gray-500">[Slide visual suggestion: {slide.visualHint}]</div>
        )}

        {slide.speakerNote && (
          <p className="mt-6 italic text-sm text-gray-400">{'> Speaker note: '}{slide.speakerNote}</p>
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
      <main className="bg-black">
        {SLIDES.map((slide) => (
          <Section key={slide.id} slide={slide} />
        ))}
      </main>
    </>
  )
}