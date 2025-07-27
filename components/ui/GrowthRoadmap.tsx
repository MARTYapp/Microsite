'use client'

import { motion } from 'framer-motion'

const growthPhases = [
  {
    title: '📍 DAY 1–30: Ground Zero → Traction',
    points: [
      '✅ Live prototype + microsite launched',
      '✅ Merch & affiliate streams activated',
      '✅ Cealan & Sable onboarded (Founding Team)',
      '✅ Initial grants + investor outreach initiated',
    ],
  },
  {
    title: '🧠 MONTH 2–4: Deepen the Stack',
    points: [
      '🔁 Pattern Recognizer v1 deployed',
      '📓 Journal, DBT, and EF tools embedded',
      '🎥 Persona cinematic series live',
      '📈 2,000+ returning users by Thanksgiving',
    ],
  },
  {
    title: '⚙️ MONTH 4–6: Monetize & Scale',
    points: [
      '🏥 Licensing pitch to IOP/Medicaid partners',
      '📡 AI27 API tier + white-label B2B model',
      '🛠️ MARTY Method Planner + Quote Poster live',
      '💰 3–5 new revenue streams activated',
    ],
  },
  {
    title: '🚀 YEAR 1–2: Institutional Lift-Off',
    points: [
      '🏛️ School + public health system partnerships',
      '🔒 HIPAA-grade therapist dashboards live',
      '🌍 Global neurodivergent expansion campaign',
      '📊 Revenue + valuation milestones validated',
    ],
  },
]

export default function GrowthRoadmap() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-14">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        🚧 Growth Roadmap to $2B
      </motion.h2>

      <div className="space-y-14">
        {growthPhases.map((phase, index) => (
          <motion.div
            key={index}
            className="bg-[#121216] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-5 tracking-tight">
              {phase.title}
            </h3>
            <ul className="list-disc list-inside space-y-3 text-zinc-300 text-base leading-relaxed">
              {phase.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}