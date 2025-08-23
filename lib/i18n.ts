export type Locale = "en" | "es";
export const t = (en: string, es: string, locale?: Locale) => {
  if (typeof window !== "undefined") {
    const l = (window as any).__LOCALE as Locale | undefined;
    if (l === "es") return es;
  }
  if (locale === "es") return es;
  return en;
};
