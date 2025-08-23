import type { PersonaConfig } from "../index";
import ThreeAccentLazy from "@/components/ThreeAccentLazy";

const cfg: PersonaConfig = {
  id: "jason",
  title:   { en: "theMARTYapp", es: "theMARTYapp" },
  tagline: { en: "MARTY ≠ THERAPY", es: "MARTY ≠ TERAPIA" },
  videoSrc: "/videos/jason-loop.webm",
  Accent: ThreeAccentLazy,
  hashtag: "#MartyAintTherapy",
};
export default cfg;
