"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Rotating headline with smooth fade/slide transitions.
 * - Pass words via props (defaults provided).
 * - Control speed via `delay` (ms).
 */
export default function HeadlineSwap({
  words = ["Clarity", "Momentum", "Get unstuck"],
  delay = 1800
}: {
  words?: string[];
  delay?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), Math.max(400, delay));
    return () => clearInterval(id);
  }, [words.length, delay]);

  return (
    <span className="inline-block relative min-w-[2ch]" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-block will-change-transform"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
