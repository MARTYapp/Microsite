import Head from 'next/head'
import { motion } from 'framer-motion'
import GrowthRoadmap from '@/components/ui/GrowthRoadmap'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
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

        <motion.section
          className="mt-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-4">📂 Key Docs & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="/docs/Sable_Offer_Letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-800 rounded hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold text-white mb-1">Offer Letter</h3>
              <p className="text-gray-400 text-sm">Your official onboarding document</p>
            </a>
            <a
              href="/docs/Social_Media_Calendar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-800 rounded hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold text-white mb-1">3-Week Social Calendar</h3>
              <p className="text-gray-400 text-sm">Pre-filled rollout plan + ideas</p>
            </a>
            <a
              href="/docs/Analytics_Dashboard_Access.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-800 rounded hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold text-white mb-1">Analytics Access</h3>
              <p className="text-gray-400 text-sm">Track growth, conversions & reach</p>
            </a>
            <a
              href="/docs/PostLaunch_Media_Blast.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-800 rounded hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold text-white mb-1">Post-Launch Media Blast</h3>
              <p className="text-gray-400 text-sm">Copy + instructions to amplify the drop</p>
            </a>
            <a
              href="/docs/Community_Engagement_Protocol.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-800 rounded hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold text-white mb-1">Community Engagement Protocol</h3>
              <p className="text-gray-400 text-sm">How we interact, respond & build trust</p>
            </a>
            <a
              href="/docs/Company_Valuation_Roadmap.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-800 rounded hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold text-white mb-1">$2B by 2028 Valuation Roadmap</h3>
              <p className="text-gray-400 text-sm">How you grow — and how we scale</p>
            </a>
          </div>
        </motion.section>
      </main>
    </>
  )
}