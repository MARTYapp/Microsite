"use client";
import { motion } from "framer-motion";

/** Slow moving light band for cinematic feel */
export default function LightSweep({
  tint = "255,255,255",
  strength = 0.08,
  angle = 100,
  duration = 14
}: {
  tint?: string;       // "r,g,b"
  strength?: number;   // 0..1
  angle?: number;      // gradient angle in degrees
  duration?: number;   // seconds for full sweep
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute -inset-1 pointer-events-none"
      initial={{ x: "-20%" }}
      animate={{ x: "120%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{
        background: `linear-gradient(${angle}deg, rgba(${tint},0) 0%, rgba(${tint},${strength}) 40%, rgba(${tint},0) 80%)`,
        mixBlendMode: "screen"
      }}
    />
  );
}
