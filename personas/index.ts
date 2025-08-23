import type { ComponentType } from "react";

export type Trans = { en: string; es: string };

export type PersonaSkin = {
  title: Trans;
  tagline: Trans;
  Accent?: ComponentType; // optional accent component
};

// Export registry (adjust as you add/remove skins)
import coco from "./coco/config";
import dad from "./dad/config";
import jason from "./jason/config";

export const personas: Record<string, PersonaSkin> = {
  coco,
  dad,
  jason,
};
