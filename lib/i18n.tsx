import { createContext, useContext, useEffect, useMemo, useState } from "react";
type Lang = "en" | "es";
type Dict = {
  hero: { title: string; words: string[]; tagline: string };
};
const dict: Record<Lang, Dict> = {
  en: {
    hero: {
      title: "MARTY",
      words: ["Not Therapy", "Not a Vibe App", "Just MARTY"],
      tagline: "Sharper mind. No fluff. NYC energy.",
    },
  },
  es: {
    hero: {
      title: "MARTY",
      words: ["No es Terapia", "No es una app de vibra", "Solo MARTY"],
      tagline: "Mente afilada. Sin rodeos. Energía NYC.",
    },
  },
};
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved) setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
