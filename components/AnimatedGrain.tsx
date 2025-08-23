"use client";
import { useEffect, useRef } from "react";

/** Full-bleed animated grain/noise overlay (GPU-cheap) */
export default function AnimatedGrain({ opacity=0.06 }: { opacity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0, w = 0, h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight;
      c.width = Math.max(1, Math.floor(w * dpr));
      c.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr,0,0,dpr,0,0);
    };
    const tick = () => {
      // static-like speckles
      ctx.clearRect(0,0,w,h);
      const density = Math.floor((w*h)/1400);
      for (let i=0;i<density;i++){
        const x = Math.random()*w, y = Math.random()*h;
        const a = 0.12 + Math.random()*0.18;
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(x,y,1,1);
      }
      raf = requestAnimationFrame(tick);
    };
    const on = () => { resize(); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
    const off = () => cancelAnimationFrame(raf);
    on(); window.addEventListener("resize", on);
    return () => { off(); window.removeEventListener("resize", on); };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
}
