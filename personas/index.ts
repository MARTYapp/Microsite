import type { ComponentType } from "react";

export type Trans = { en: string; es: string };

export type PersonaSkin = {
  title: Trans;
  tagline: Trans;
  Accent?: ComponentType;    // optional 3D/visual accent
};

export type PersonaConfig = PersonaSkin; // backward-compat alias

// Individual skins
import coco from "./coco/config";
import dad from "./dad/config";
import jason from "./jason/config";

// Registry
export const personas: Record<string, PersonaSkin> = {
  coco,
  dad,
  jason,
};

// Helper: read ?p=<name> and fall back to a default (jason)
export function pickPersona(name?: string): PersonaSkin {
  const key = (name || "").toLowerCase();
  return personas[key as keyof typeof personas] ?? personas.jason;
}
