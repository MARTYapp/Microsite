import Head from 'next/head'
import { motion } from 'framer-motion'
import GrowthRoadmap from '@/components/ui/GrowthRoadmap'

// ✅ FIXED: Replaced string ease with cubic bezier array
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] }, // easeInOut equivalent
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
            {[
              {
                title: 'Offer Letter',
                file: 'Sable_Offer_Letter.pdf',
                desc: 'Your official onboarding document',
              },
              {
                title: '3-Week Social Calendar',
                file: 'Social_Media_Calendar.pdf',
                desc: 'Pre-filled rollout plan + ideas',
              },
              {
                title: 'Analytics Access',
                file: 'Analytics_Dashboard_Access.pdf',
                desc: 'Track growth, conversions & reach',
              },
              {
                title: 'Post-Launch Media Blast',
                file: 'PostLaunch_Media_Blast.pdf',
                desc: 'Copy + instructions to amplify the drop',
              },
              {
                title: 'Community Engagement Protocol',
                file: 'Community_Engagement_Protocol.pdf',
                desc: 'How we interact, respond & build trust',
              },
              {
                title: '$2B by 2028 Valuation Roadmap',
                file: 'Company_Valuation_Roadmap.pdf',
                desc: 'How you grow — and how we scale',
              },
            ].map(({ title, file, desc }) => (
              <a
                key={title}
                href={`/docs/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-gray-800 rounded hover:bg-gray-900 transition"
              >
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </a>
            ))}
          </div>
        </motion.section>
      </main>
    </>
  )
}