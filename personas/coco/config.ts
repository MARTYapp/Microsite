import type { PersonaConfig } from "../index";
import ThreeAccentLazy from "@/components/ThreeAccentLazy";

const cfg: PersonaConfig = {
  id: "coco",
  title:   { en: "theMARTYapp", es: "theMARTYapp" },
  tagline: { en: "Think less. Live more.", es: "Piensa menos. Vive más." },
  videoSrc: "/videos/coco-loop.webm",
  Accent: ThreeAccentLazy,
};
export default cfg;
