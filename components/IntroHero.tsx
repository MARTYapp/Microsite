"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { pickPersona } from "@/personas";
import PersonaVisual from "@/components/PersonaVisual";
import LangToggle from "@/components/LangToggle";
import { useLang, t } from "@/lib/i18n";

export default function IntroHero() {
  const { lang } = useLang();
  const search = useSearchParams();
  const p = useMemo(() => pickPersona(search?.get("p") || undefined), [search]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const title = t(p.title.en, p.title.es); // i18n hook-up later for ES strings
  const tagline = t(p.tagline.en, p.tagline.es);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* top row: badge + lang toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs tracking-wider uppercase text-white/60">
            theMARTYapp — Prototype
          </div>
          <LangToggle />
        </div>

        {/* visual */}
        <PersonaVisual
          name={p.name}
          gradientFrom={p.gradientFrom}
          gradientTo={p.gradientTo}
          rgbTint={p.rgbTint}
        />

        {/* copy */}
        <div className="mt-8 text-center">
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.h1
                key={lang + p.name + "-title"}
                className="text-5xl sm:text-6xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {title}
              </motion.h1>
            )}
          </AnimatePresence>

          <p className="mt-4 text-lg text-white/70">{tagline}</p>

          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-md">
            <a href={p.ctaHref} className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition">
              Try Marty Now
            </a>
            <a href="/support" className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Support Marty
            </a>
          </div>

          <p className="mt-4 text-xs text-white/40">
            Tip: add <code>?p=jason</code>, <code>?p=coco</code>, or <code>?p=dad</code> to the URL.
          </p>
        </div>
      </div>
    </section>
  );
}
