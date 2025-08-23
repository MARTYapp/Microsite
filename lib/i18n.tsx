import React, { createContext, useContext, useMemo, useState } from "react";
export type Lang = "en" | "es";
const COPY = {
  en: { hero: { title: "MARTY ≠ THERAPY", tagline: "Not a therapist. Not a vibe app. Just MARTY.", words: ["Not therapy","Not a vibe app","Just MARTY"] } },
  es: { hero: { title: "MARTY ≠ TERAPIA", tagline: "No es terapeuta. No es una app de vibras. Solo MARTY.", words: ["No es terapia","No es una app de vibras","Solo MARTY"] } },
} as const;
type CopyShape = typeof COPY["en"];
type LangCtx = { lang: Lang; setLang: (l: Lang)=>void; toggle: ()=>void; t: CopyShape; };
const Ctx = createContext<LangCtx | null>(null);
export function LanguageProvider({ children, initial="en" }: { children: React.ReactNode; initial?: Lang }) {
  const [lang, setLang] = useState<Lang>(initial);
  const value = useMemo<LangCtx>(() => ({ lang, setLang, toggle: () => setLang(l => l === "en" ? "es" : "en"), t: COPY[lang] as CopyShape }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useLang() { const ctx = useContext(Ctx); if (!ctx) throw new Error("useLang must be used within LanguageProvider"); return ctx; }
export function t(en: React.ReactNode, es: React.ReactNode) { const { lang } = useLang(); return lang === "es" ? es : en; }
export type { CopyShape };
