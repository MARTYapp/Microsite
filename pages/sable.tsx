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

export default function Sable() {
  return (
    <>
      <Head>
        <title>Sable Adler — Growth Ops & Grants</title>
        <meta
          name="description"
          content="Sable Adler’s official portal to growth, grants, and global impact via The MARTY App."
        />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 sm:px-12 md:px-24">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4">Hey Sable, welcome to the mission.</h1>
          <p className="text-lg mb-4 text-gray-300">
            You’re officially running grants, social, and our full growth ops stack.
          </p>
          <p className="mb-2 text-gray-400">
            This portal has everything: offer letter, social media templates, analytics links,
            and a 3-week calendar to get you rolling.
          </p>
          <p className="mb-2 text-gray-400">
            We’ve got big plans, big backing, and a bigger purpose. You’re a huge part of that.
          </p>
          <p className="mb-6 text-gray-400">
            Let’s go make mental health culturally fluent, trauma-aware, and actually scalable.
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