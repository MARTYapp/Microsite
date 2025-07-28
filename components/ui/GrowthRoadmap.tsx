'use client'

import { motion } from 'framer-motion'

const growthPhases = [
  {
    title: '📍 DAY 1–30: Ground Zero → Traction',
    points: [
      '✅ Live, animated microsite + functional prototype launched to public acclaim',
      '✅ E-commerce stack deployed with merch, affiliate links, and Stripe integration',
      '✅ Cealan Clifford (Legal & Licensing Lead) and Sable Adler (Social/Grants Lead) fully onboarded',
      '✅ Initial $50–100K in grants + angel investor discovery pipeline initiated with branded decks',
    ],
  },
  {
    title: '🧠 MONTH 2–4: Deepen the Stack',
    points: [
      '🔁 AI-powered Pattern Recognizer v1 launched for mood + thought tracking with reflection prompts',
      '📓 Fully embedded DBT, journaling, and executive function modules — live, styled, and sharable',
      '🎥 Release of 3-part cinematic user story series (Coco, Robert, Dad) capturing MARTY’s real-life impact',
      '📈 Community activation + 2,000+ returning users milestone hit by Thanksgiving (via content + organic reach)',
    ],
  },
  {
    title: '⚙️ MONTH 4–6: Monetize & Scale',
    points: [
      '🏥 Licensing deck + IOP / Medicaid pitch initiative sent to 10+ clinical institutions for review',
      '📡 AI27 B2B tier built — white-labeled version of MARTY’s engine for orgs, therapists, and peer support apps',
      '🛠️ Launch of MARTY Method Planner (daily journal + cue cards) and first drop of premium quote posters',
      '💰 Activation of 3–5 new revenue levers: licensing, group coaching, affiliate bundles, B2B subscriptions',
    ],
  },
  {
    title: '🚀 YEAR 1–2: Institutional Lift-Off',
    points: [
      '🏛️ School districts, universities, and public health systems onboarded for long-term licensing trials',
      '🔒 Launch of HIPAA-compliant therapist dashboards with client insights, journaling visibility, and usage trends',
      '🌍 Global expansion campaign into Canada, UK, Australia — focused on neurodivergent + men’s wellness orgs',
      '📊 Verified $2M+ in revenue and independent $40M–$75M valuation with sustained B2B + D2C traction',
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