import { motion } from 'framer-motion'

export default function CealanHero() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
        Yo Coco — come meet MARTY.
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-6 text-gray-300">
        My dad was Marty. You met him, true. <br />
        This one’s Marty — but built for you.
      </p>
      <p className="text-sm text-gray-500 italic">
        Your private portal is live. Legal. Licensing. Legacy. You in?
      </p>
    </motion.section>
  )
}