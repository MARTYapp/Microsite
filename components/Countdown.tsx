"use client";
import { useEffect, useMemo, useState } from "react";
function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms/1000));
  const d = Math.floor(s/86400), h = Math.floor((s%86400)/3600), m = Math.floor((s%3600)/60), sec = s%60;
  return { d, h, m, sec };
}
export default function Countdown({ target }: { target: string }) {
  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const [left, setLeft] = useState(targetMs - Date.now());
  useEffect(() => { const id = setInterval(()=>setLeft(targetMs - Date.now()), 250); return () => clearInterval(id); }, [targetMs]);
  const { d, h, m, sec } = parts(left);
  return (
    <div className="mt-4 inline-flex gap-3 text-sm md:text-base font-mono bg-white/5 dark:bg-black/40 border border-gray-700 rounded-full px-4 py-2">
      <span>{String(d).padStart(2,"0")}d</span>
      <span>{String(h).padStart(2,"0")}h</span>
      <span>{String(m).padStart(2,"0")}m</span>
      <span>{String(sec).padStart(2,"0")}s</span>
    </div>
  );
}
