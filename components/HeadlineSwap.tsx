"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
export default function HeadlineSwap() {
  const { t } = useLang();
  const words = t.hero.words;
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <div className="h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          {words[i]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
