"use client";
import { useTheme } from "@/lib/theme";
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="fixed top-4 left-4 z-50 px-3 py-1 rounded-full border border-gray-700 bg-black/60 text-xs text-white hover:bg-black/80"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
