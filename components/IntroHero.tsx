"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagicStars from "@/components/MagicStars";
import Countdown from "@/components/Countdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function IntroHero() {
  const { t } = useLang();
  const words = t.hero.words;
  const [i,setI]=useState(0);
  useEffect(()=>{ const id=setInterval(()=>setI(n=>(n+1)%words.length),2200); return ()=>clearInterval(id); },[words.length]);

  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center
                        bg-gradient-to-b from-white to-gray-100 text-black dark:from-black dark:to-[#121212] dark:text-white">
      <MagicStars/>
      <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.4}}>
        <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-gray-700 bg-black/10 dark:bg-white/5 text-black/80 dark:text-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Now shipping v0.x
        </div>
      </motion.div>
      <motion.h1
        initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0}}
        transition={{delay:.05,duration:.5}}
        className="mt-4 text-[11vw] leading-none font-extrabold tracking-tight uppercase"
      >
        {t.hero.title}
      </motion.h1>
      <div className="h-12 mt-3 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{y:24,opacity:0}}
            animate={{y:0,opacity:1}}
            exit={{y:-24,opacity:0}}
            transition={{duration:.45}}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            {words[i]}
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.p
        initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0}}
        transition={{delay:.1,duration:.45}}
        className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-xl px-4"
      >
        {t.hero.tagline}
      </motion.p>

      {/* Cinematic countdown (set target date via env or fallback) */}
      <Countdown target={process.env.NEXT_PUBLIC_MARTY_DATE ?? "2025-09-15T00:00:00-04:00"} />

      <motion.div
        initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0}}
        transition={{delay:.15,duration:.45}}
        className="mt-8 flex flex-wrap gap-3 justify-center"
      >
        <Link href="/marty-ai"><Button size="lg">Try Marty Now</Button></Link>
        <Link href="/support"><Button variant="outline" size="lg">Support</Button></Link>
      </motion.div>
    </section>
  );
}
