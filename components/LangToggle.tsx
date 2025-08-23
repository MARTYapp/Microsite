"use client";
import { useLang } from "@/lib/i18n";
export default function LangToggle() {
  const { lang, toggle } = useLang();
  const label = lang === "en" ? "ES" : "EN";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs tracking-wide uppercase hover:bg-white/10 transition"
    >
      {label}
    </button>
  );
}
