import React, { createContext, useContext, useState, useMemo } from "react";

export type Lang = "en" | "es";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "en" ? "es" : "en")),
    }),
    [lang]
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

// inline text helper: t("English", "Español")
export function t(en: React.ReactNode, es: React.ReactNode) {
  const { lang } = useLang();
  return lang === "es" ? es : en;
}
