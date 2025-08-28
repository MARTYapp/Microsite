'use client';

import Image from 'next/image';
import Link from 'next/link';
// optional star field if you use it:
// import MagicStars from '@/components/MagicStars';

export default function HeroScene() {
  return (
    <section
      className="
        relative
        min-h-[100svh]           /* full safe viewport height */
        w-full
        bg-black
        text-white
        overflow-hidden
        px-4
        pt-[calc(env(safe-area-inset-top)+24px)]
        pb-[calc(env(safe-area-inset-bottom)+32px)]
      "
      aria-label="MARTY hero"
    >
      {/* background overlays (optional) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      {/* <MagicStars /> */}

      {/* constrained content */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center text-center">
        {/* Logo above heading */}
        <div className="mb-5">
          <Image
            src="/images/TMALOGO.png"
            alt="the MARTY app logo"
            width={220}
            height={220}
            priority
            className="h-auto w-[min(220px,40vw)]"
          />
        </div>

        {/* Main heading */}
        <h1
          className="
            font-extrabold tracking-tight leading-none
            text-[clamp(36px,8vw,104px)]
          "
        >
          MARTY ≠ THERAPY
        </h1>

        {/* Subheading */}
        <p
          className="
            mt-3 font-semibold
            text-[clamp(18px,3.5vw,34px)]
          "
        >
          Just MARTY
        </p>

        {/* Taglines (single line block with wrap + max width to avoid clipping) */}
        <p className="mt-5 max-w-2xl text-balance text-white/75 text-[clamp(14px,2.6vw,18px)] leading-relaxed">
          Quiet tech for loud minds. Built for the avoiders, the overthinkers, and the night-crawlers.
          Not your therapist. Not your dad. Just MARTY.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/journal"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90"
          >
            Try Marty Now
          </Link>
          <Link
            href="/fund"
            className="inline-flex items-center rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Fund Marty
          </Link>
        </div>

        {/* subtle scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50">
          scroll
        </div>
      </div>
    </section>
  );
}