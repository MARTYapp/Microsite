"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
export type Lang = "en" | "es";
type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (en: React.ReactNode, es: React.ReactNode) => React.ReactNode;
};
const LangContext = createContext<LangCtx | null>(null);
export function LanguageProvider({ children, initial="en" }:{
  children: React.ReactNode; initial?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initial);
  const value = useMemo<LangCtx>(() => ({
    lang, setLang, toggle: () => setLang(l => (l==="en"?"es":"en")),
    t: (en, es) => (lang === "es" ? es : en),
  }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
export function useLang(){ const ctx = useContext(LangContext);
  if(!ctx) throw new Error("useLang must be used within LanguageProvider"); return ctx; }
export function t(en: React.ReactNode, es: React.ReactNode){ const {lang}=useLang(); return lang==="es"?es:en; }
