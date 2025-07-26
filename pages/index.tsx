import Head from "next/head"
import { motion } from "framer-motion"
import HeroScene from "@/components/ui/HeroScene"
import PosterWall from "@/components/ui/PosterWall"
import QuoteCarousel from "@/components/ui/QuoteCarousel"
import FuelTheFounder from "@/components/ui/FuelTheFounder"
import Footer from "@/components/ui/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="MARTY ≠ THERAPY — Built for the avoiders, overthinkers, and night-crawlers™."
        />
      </Head>

      <main className="bg-black text-white overflow-x-hidden">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HeroScene />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <PosterWall />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <QuoteCarousel />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FuelTheFounder />
        </motion.section>

        <Footer />
      </main>
    </>
  )
}