import Head from "next/head"
import { motion } from "framer-motion"
import HeroScene from "@/components/ui/HeroScene"
import PosterWall from "@/components/ui/PosterWall"
import QuoteCarousel from "@/components/ui/QuoteCarousel"
import FuelTheFounder from "@/components/ui/FuelTheFounder"
import GrowthRoadmap from "@/components/GrowthRoadmap"
import Footer from "@/components/ui/Footer"

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and night-crawlers."
        />
      </Head>

      <main className="relative w-full overflow-x-hidden bg-black text-white">
        <motion.section
          key="hero"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <HeroScene />
        </motion.section>

        <motion.section
          key="poster"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <PosterWall />
        </motion.section>

        <motion.section
          key="quotes"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <QuoteCarousel />
        </motion.section>

        <motion.section
          key="fuel"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <FuelTheFounder />
        </motion.section>

        <motion.section
          key="growth"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <GrowthRoadmap />
        </motion.section>

        <motion.section
          key="footer"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <Footer />
        </motion.section>
      </main>
    </>
  )
}