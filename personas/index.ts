import type React from "react";

export type PersonaId = "jason" | "coco" | "dad";

export type PersonaConfig = {
  id: PersonaId;
  title: { en: string; es: string };
  tagline: { en: string; es: string };
  videoSrc: string;                // /videos/*.webm|mp4
  Accent?: React.ComponentType | null;
  hashtag?: string;
};

import jason from "./jason/config";
import coco from "./coco/config";
import dad from "./dad/config";

export const personas: Record<PersonaId, PersonaConfig> = {
  jason, coco, dad,
};

export const personaIds: PersonaId[] = ["jason","coco","dad"];
