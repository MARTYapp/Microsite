import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type Persona = {
  key: 'quiet' | 'coco' | 'jason'
  label: string
  video: string   // put files in /public/video/*.mp4
  poster?: string // optional poster images
  caption?: string
}

const PERSONAS: Persona[] = [
  {
    key: 'quiet',
    label: 'Single Dad — The Quiet Ones',
    video: '/video/quiet-ones.mp4',
    poster: '/video/quiet-ones.jpg',
    caption: '≠ means NOT',
  },
  {
    key: 'coco',
    label: 'Coco — The Overthinkers',
    video: '/video/overthinkers.mp4',
    poster: '/video/overthinkers.jpg',
    caption: '≠ means NOT',
  },
  {
    key: 'jason',
    label: "Jason — The 'Manic' graffiti artist",
    video: '/video/graffiti.mp4',
    poster: '/video/graffiti.jpg',
    caption: '≠ means NOT',
  },
]

const FALLBACK_VIDEO = '/video/marty-sign-loop.mp4' // your existing Option B loop

const SECTIONS: {
  id: string
  eyebrow?: string
  title: string
  body: string
  bullets?: string[]
}[] = [
  {
    id: 'problem',
    eyebrow: 'Problem',
    title: 'Millions won’t do therapy — they still want change.',
    body:
      'Therapy drop-off is brutal. Stigma, scheduling, cost, and “this isn’t me.” They don’t want a therapist or a mood diary. They want an always-on, emotionally steady partner that actually helps them move.',
    bullets: [
      'Therapy-resistant ≠ change-resistant',
      'ADHD/executive dysfunction + overthinking are everywhere',
      'Existing apps feel clinical… or cringe',
    ],
  },
  {
    id: 'solution',
    eyebrow: 'Solution',
    title: 'MARTY — a steady AI partner that nudges, mirrors, and keeps receipts.',
    body:
      'Not a therapist, not a vibe app. Just MARTY. Text-first, cinematic, smart reflection summaries, pattern detection, and “do the next right thing” nudges that actually happen.',
    bullets: [
      'iPhone-style chat UI (zero friction)',
      'Adaptive DBT-aligned reflections, not diagnoses',
      'Daily micro-wins → weekly momentum',
    ],
  },
  {
    id: 'whynow',
    eyebrow: 'Why Now',
    title: 'Mental health apps feel stale. Culture wants useful, not clinical.',
    body:
      'Gen-pop is done with sterile wellness. We’re building a sticky, cinematic, founder-led brand with receipts: organic loyalty, merch demand, and a category name people repeat.',
    bullets: [
      'GenAI UX finally good enough for a “partner” metaphor',
      'Creator economy primed for licensed prompts & rituals',
      'We own “MARTY ≠ THERAPY” in the wild',
    ],
  },
  {
    id: 'traction',
    eyebrow: 'Traction',
    title: 'Cult energy > ad spend.',
    body:
      'Organic buzz, repeat testers, and merch sell-through without paid acquisition. Brand performs across personas: Quiet Ones™, Overthinkers™, Nightcrawlers™.',
    bullets: [
      'Zero ad spend → paying fans',
      'Beta testers asking for “the real thing”',
      'MERTY merch proving cultural stickiness',
    ],
  },
  {
    id: 'market',
    eyebrow: 'Market',
    title: 'Path to $2B by 2028.',
    body:
      'Monetization blends premium subs, licensed B2B prompts, affiliate flows, and media. Category is wide open for a non-clinical emotional OS.',
    bullets: [
      'Premium subscription + upsells',
      'Licensing to creators, clinics, campuses',
      'Merch + affiliate = margin fuel',
    ],
  },
  {
    id: 'team',
    eyebrow: 'Team',
    title: 'Founder-led brand with NYC roots and global taste.',
    body:
      'Eric runs toward the hard problems and keeps it human. Advisors and collaborators across product, law, and culture. We ship cinematic, not corporate.',
  },
]

function useRandomPersona(): Persona {
  const [idx, setIdx] = useState(0)
  const list = useMemo(() => PERSONAS, [])
  useEffect(() => {
    setIdx(Math.floor(Math.random() * list.length))
  }, [list])
  return list[idx] ?? { key: 'quiet', label: 'Quiet Ones', video: FALLBACK_VIDEO }
}

function Hero() {
  const persona = useRandomPersona()
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video background */}
      <video
        key={persona.video}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        poster={persona.poster}
      >
        {/* Try persona first, then fallback */}
        <source src={persona.video} type="video/mp4" />
        <source src={FALLBACK_VIDEO} type="video/mp4" />
      </video>

      {/* Gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"></div>

      {/* Centered copy */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-purple-300">
            MARTY ≠ THERAPY
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            “Change. Inhale. Acceptance. Exhale.”
            <br />
            For the Quiet Ones™, the executive dysfunction fam™, and the perfectionist overthinkers™ alike.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/marty-ai" className="rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-black hover:bg-white/90">
              Join Beta
            </Link>
            <Link href="/investor" className="rounded-full px-5 py-2.5 text-sm font-semibold border border-white/30 text-white hover:bg-white/10">
              Investor Access
            </Link>
            <Link href="/store" className="rounded-full px-5 py-2.5 text-sm font-semibold border border-white/30 text-white hover:bg-white/10">
              #FundTheFounder
            </Link>
          </div>

          <div className="mt-10 text-white/70 text-sm">
            <span className="opacity-80">Scroll</span> ↓
            {persona.caption ? <span className="ml-3 opacity-60">{persona.caption}</span> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

function SlideSection({
  id,
  eyebrow,
  title,
  body,
  bullets,
}: {
  id: string
  eyebrow?: string
  title: string
  body: string
  bullets?: string[]
}) {
  return (
    <section id={id} className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {eyebrow ? <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/50">{eyebrow}</div> : null}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">{title}</h2>
        <p className="mt-6 text-white/85 max-w-3xl">{body}</p>
        {bullets && bullets.length ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-white/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>MARTY ≠ THERAPY — The MARTY App</title>
        <meta name="description" content="Not a therapist, not a vibe app. Just MARTY. A steady AI partner for Quiet Ones, Overthinkers, and the executive dysfunction fam." />
      </Head>
      <main className="bg-black text-white">
        <Hero />
        {SECTIONS.map((s) => (
          <SlideSection key={s.id} {...s} />
        ))}
        {/* Footer slice */}
        <section className="bg-black border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">Ready to be early?</h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href="/marty-ai" className="rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-black hover:bg-white/90">
                Join Beta
              </Link>
              <Link href="/investor" className="rounded-full px-5 py-2.5 text-sm font-semibold border border-white/30 text-white hover:bg-white/10">
                Investor Access
              </Link>
              <Link href="/store" className="rounded-full px-5 py-2.5 text-sm font-semibold border border-white/30 text-white hover:bg-white/10">
                #FundTheFounder
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )