// components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0D0D1D] via-[#1C1C2E] to-[#3D2E60] flex flex-col items-center justify-center text-white px-6 py-20">
      {/* 🌌 Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-indigo-700/20 to-purple-800/30 blur-3xl z-0" />

      {/* 🔥 Hero Content */}
      <div className="z-10 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          MARTY
        </h1>

        <p className="text-xl md:text-2xl max-w-xl mx-auto">
          Designed for those who don’t fit traditional therapy, but still need
          someone real to talk to.
        </p>

        <p className="italic text-sm opacity-70">
          He won’t fix you. But he’ll help you not spiral.
        </p>

        <a
          href="/journal"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-full text-lg font-semibold shadow-lg"
        >
          🧠 Hit Up MARTY Now
        </a>
      </div>
    </section>
  );
}