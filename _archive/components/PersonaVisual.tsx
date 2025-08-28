"use client";
import { motion } from "framer-motion";
import AnimatedGrain from "./AnimatedGrain";
import LightSweep from "./LightSweep";

/**
 * A hero backdrop that uses pure CSS/JS animation.
 * If /public/personas/<name>.jpg exists, it will be used as a soft poster.
 * Otherwise we render a gradient only.
 */
export default function PersonaVisual({
  name,
  gradientFrom,
  gradientTo,
  rgbTint = "120,180,255",
}: {
  name: string;
  gradientFrom: string; // hex or tailwind token
  gradientTo: string;
  rgbTint?: string;
}) {
  const poster = `/personas/${name}.jpg`; // optional, safe if missing
  return (
    <div className="relative w-full h-[56vh] min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-black">
      {/* gradient base */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.9, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          background: `radial-gradient(60% 80% at 30% 20%, ${gradientFrom} 0%, transparent 60%), radial-gradient(60% 100% at 70% 70%, ${gradientTo} 0%, transparent 70%)`
        }}
      />
      {/* optional poster (no 404 flash if missing) */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover opacity-25"
        style={{ backgroundImage: `url(${poster})` }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      {/* accents */}
      <LightSweep tint={rgbTint} strength={0.10} />
      <AnimatedGrain opacity={0.08} />
    </div>
  );
}
