"use client";
import { useEffect, useState } from "react";

/**
 * Simple rotating headline words without i18n object coupling.
 * Pass words via props or it will use a sensible default.
 */
export default function HeadlineSwap({ words = ["Clarity", "Momentum", "Get unstuck"] }:{
  words?: string[];
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="inline-block will-change-transform">
      {words[i]}
    </span>
  );
}
