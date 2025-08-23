"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ThreeAccent = dynamic(() => import("./ThreeAccent"), { ssr: false });

export default function ThreeAccentLazy() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    if (prefersReduced || small) return; // skip on small/reduced motion

    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        setShouldMount(true);
        obs.disconnect();
      }
    }, { rootMargin: "200px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {shouldMount ? <ThreeAccent /> : <div className="w-full h-56 sm:h-64 md:h-80 rounded-2xl border border-gray-800 bg-gradient-to-b from-black/40 to-black/10" />}
    </div>
  );
}
