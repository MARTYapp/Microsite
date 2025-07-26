import Head from "next/head"
import { motion } from "framer-motion"
import GrowthRoadmap from "@/components/GrowthRoadmap"

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export default function Cealan() {
  return (
    <>
      <Head>
        <title>Cealan Clifford, Esq. — Legal & Licensing Lead</title>
        <meta
          name="description"
          content="Cealan Clifford’s private portal — Legal & Licensing insights for The MARTY App."
        />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">
            Cealan Clifford, Esq.
          </h1>
          <p className="text-lg mb-4 text-gray-300">
            Welcome to your private MARTY command post.
          </p>
          <p className="mb-2 text-gray-400">
            This is your domain: Legal, Licensing, and Laying the Foundation.
          </p>
          <p className="mb-2 text-gray-400">
            Medicaid research, HIPAA & GDPR compliance, Terms of Use,
            intellectual property licensing — it’s all nested here.
          </p>
          <p className="mb-6 text-gray-400">
            You’re the legal backbone. The reason this isn’t just a bold idea —
            it’s bulletproof.
          </p>
        </motion.section>

        <motion.section
          className="mt-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <GrowthRoadmap />
        </motion.section>
      </main>
    </>
  )
}