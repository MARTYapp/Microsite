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

        <motion.section
          className="mt-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold mb-8 text-white">📁 Legal Ops Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/docs/terms-of-use.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">📄 Terms of Use + Privacy</h3>
              <p className="text-gray-400 text-sm">Draft policies for user protection, data rights, and platform liability.</p>
            </a>
            <a href="/docs/licensing-models.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">🔍 Licensing Models</h3>
              <p className="text-gray-400 text-sm">Comparative B2B options across health systems, education, and private orgs.</p>
            </a>
            <a href="/docs/medicaid-eligibility.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">🏥 Medicaid Eligibility</h3>
              <p className="text-gray-400 text-sm">Working doc outlining mental health criteria + state-specific pathways.</p>
            </a>
            <a href="/docs/legal-faq.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">🧠 Legal FAQ + Compliance</h3>
              <p className="text-gray-400 text-sm">Quick hits on nonprofit status, grant law, and platform scope edges.</p>
            </a>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 opacity-50">
              <h3 className="text-xl font-bold text-white mb-2 line-through">📑 EIN Filing</h3>
              <p className="text-gray-500 text-sm">Pending your submission — this one’s still on your desk.</p>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  )
}