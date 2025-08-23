"use client";
import { useLang } from "@/lib/i18n";
export default function LangToggle() {
  const { lang, setLang } = useLang();
  const next = lang === "en" ? "es" : "en";
  return (
    <button
      onClick={() => setLang(next)}
      className="fixed top-4 right-4 z-50 px-3 py-1 rounded-full border border-gray-700 bg-black/60 text-xs text-white hover:bg-black/80"
      aria-label="Toggle language"
    >
      {lang.toUpperCase()}
    </button>
  );
}
