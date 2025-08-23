import type { PersonaConfig } from "../index";
import ThreeAccentLazy from "@/components/ThreeAccentLazy";

const cfg: PersonaConfig = {
  id: "dad",
  title:   { en: "theMARTYapp", es: "theMARTYapp" },
  tagline: { en: "Quiet strength. Daily wins.", es: "Fuerza tranquila. Logros diarios." },
  videoSrc: "/videos/dad-loop.webm",
  Accent: ThreeAccentLazy,
};
export default cfg;
