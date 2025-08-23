"use client";

import { useMemo } from "react";
export default function MagicStars() {
  const stars = useMemo(() => Array.from({ length: 80 }).map((_, i) => ({
    id: i, top: Math.random()*100, left: Math.random()*100,
    d: 2 + Math.random()*3, delay: Math.random()*3, scale: 0.6 + Math.random()*0.9
  })), []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map(s => (
        <span
          key={s.id}
          style={{ top: s.top+"%", left: s.left+"%", animationDuration: s.d+"s", animationDelay: s.delay+"s", transform: `scale(${s.scale})` }}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/70 animate-[twinkle_linear_infinite]"
        />
      ))}
      <style jsx global>{`
        @keyframes twinkle { 0%{opacity:.2;transform:translateY(0) scale(1)}
          50%{opacity:.9;transform:translateY(-2px) scale(1.2)} 100%{opacity:.2;transform:translateY(0) scale(1)} }
      `}</style>
    </div>
  );
}
