"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { personas, personaIds, type PersonaId } from "@/personas";
import LangToggle from "@/components/LangToggle";

function pickPersona(): PersonaId {
  try {
    const p = (new URLSearchParams(window.location.search).get("p") as PersonaId) || null;
    if (p && personaIds.includes(p)) return p;
  } catch {}
  return personaIds[Math.floor(Math.random() * personaIds.length)];
}

export default function IntroHero() {
  const { lang } = useLang();
  const [id, setId] = React.useState<PersonaId>("coco");

  React.useEffect(() => { setId(pickPersona()); }, []);
  const cfg = personas[id];

  return (
    <section className="relative overflow-hidden rounded-2xl bg-black/60">
      <div className="absolute right-3 top-3 z-10">
        <LangToggle />
      </div>

      <div className="relative">
        <video
          className="w-full h-[45vh] md:h-[60vh] object-cover"
          autoPlay
          playsInline
          muted
          loop
          preload="metadata"
          src={cfg.videoSrc}
          poster="/videos/poster.jpg"
        />
      </div>

      <div className="absolute inset-0 grid place-content-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${id}-${lang}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            {cfg.title[lang]}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`tag-${id}-${lang}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="mt-4 text-lg md:text-2xl text-white/80"
          >
            {cfg.tagline[lang]}
          </motion.p>
        </AnimatePresence>
      </div>

      {cfg.Accent ? (
        <div className="absolute bottom-3 right-3 opacity-90">
          <cfg.Accent />
        </div>
      ) : null}
    </section>
  );
}
