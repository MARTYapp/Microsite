export type Trans = { en: string; es: string };
export type PersonaKey = "jason" | "coco" | "dad";

export type PersonaSkin = {
  name: PersonaKey;
  title: Trans;
  tagline: Trans;
  ctaHref: string;
  gradientFrom: string; // e.g. "#0ea5e9"
  gradientTo: string;   // e.g. "#22d3ee"
  rgbTint: string;      // "r,g,b" for the sweep
};

export const personas: Record<PersonaKey, PersonaSkin> = {
  jason: {
    name: "jason",
    title: "MARTY ain’t therapy.",
    tagline: "NYC grit. Blunt clarity. Get unstuck.",
    ctaHref: "/marty-ai",
    gradientFrom: "#1d4ed8",
    gradientTo: "#9333ea",
    rgbTint: "163,125,255",
  },
  coco: {
    name: "coco",
    title: "MARTY for focus.",
    tagline: "Quiet momentum. Do the next right thing.",
    ctaHref: "/marty-ai",
    gradientFrom: "#0ea5e9",
    gradientTo: "#22d3ee",
    rgbTint: "120,180,255",
  },
  dad: {
    name: "dad",
    title: "MARTY for steady days.",
    tagline: "Simple steps. Less noise. More living.",
    ctaHref: "/marty-ai",
    gradientFrom: "#16a34a",
    gradientTo: "#f59e0b",
    rgbTint: "220,190,140",
  },
};

export function pickPersona(query?: string): PersonaSkin {
  const key = (query || "").toLowerCase();
  if (key in personas) return personas[key as PersonaKey];
  return personas.jason;
}
export type PersonaConfig = PersonaSkin;
