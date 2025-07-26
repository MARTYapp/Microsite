import { motion } from "framer-motion"

export default function SableHero() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
        Hey Sable, welcome to your HQ 🧠
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-6 text-gray-300">
        You’re officially the Social & Grants Lead of The MARTY App —
        a tech brand built for avoiders, perfectionists, and night-crawlers.
        <br />
        This is your private onboarding zone.
      </p>
      <p className="text-sm text-gray-500 italic">
        Media. Grants. Growth. Let’s build it right.
      </p>
    </motion.section>
  )
}