import { motion } from "framer-motion"

export default function CealanHero() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
        COCO, MEET MARTY
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-6 text-gray-300">
        Not my dad. Not your dad. A digital dad.
        <br />
        This is your private portal into what we’re building — and why we need your mind.
      </p>
      <p className="text-sm text-gray-500 italic">
        Legal. Licensing. Legacy.
      </p>
    </motion.section>
  )
}