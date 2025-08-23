"use client";
import { motion } from "framer-motion";

/** Slow moving light band for cinematic feel */
export default function LightSweep({ tint="255,255,255", strength=0.08 }:{
  tint?: string;       // "r,g,b"
  strength?: number;   // 0..1
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute -inset-1 pointer-events-none"
      initial={{ x: "-20%" }}
      animate={{ x: "120%" }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      style={{
        background: `linear-gradient(100deg, rgba(${tint},0) 0%, rgba(${tint},${strength}) 40%, rgba(${tint},0) 80%)`,
        mixBlendMode: "screen"
      }}
    />
  );
}
