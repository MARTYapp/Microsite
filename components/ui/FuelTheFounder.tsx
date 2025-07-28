import Head from 'next/head'
import dynamic from 'next/dynamic'

const PitchDeck = dynamic(() => import('@/components/investor/PitchDeck'), { ssr: false })
const Valuation = dynamic(() => import('@/components/investor/Valuation'), { ssr: false })
const Roadmap = dynamic(() => import('@/components/investor/Roadmap'), { ssr: false })

export default function Investors() {
  return (
    <>
      <Head>
        <title>Investor Portal | The MARTY App</title>
      </Head>
      <section className="px-6 py-16 bg-black text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center drop-shadow-glow">
          📈 Investor Portal
        </h1>
        <div className="max-w-4xl mx-auto space-y-16">
          <PitchDeck />
          <Valuation />
          <Roadmap />
        </div>
      </section>
    </>
  )
}