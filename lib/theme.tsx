"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
type Theme = "light" | "dark";
type Ctx = { theme: Theme; toggle: () => void };
const ThemeContext = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  // initialize from prefers-color-scheme or localStorage
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") as Theme | null : null;
    if (stored) setTheme(stored);
    else if (window?.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);
  // apply class to <html>
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.classList.toggle("light", theme === "light");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => (t === "dark" ? "light" : "dark")) }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
