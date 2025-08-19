import { useMemo } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const PosterWall = dynamic(async () => {
  const m = await import('@/components/ui/poster-wall-export')
  // support either default export or a named export
  // fall back to the first exported member if needed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (m as any).default ?? (m as any).PosterWall ?? (Object.values(m)[0] as any)
})
import MartyHoodie from '@/components/ui/MartyHoodie'
import FuelTheFounder from '@/components/ui/FuelTheFounder'
import Footer from '@/components/ui/Footer'

export default function Home() {
  // rotate Coco / Loft / Subway each load
  const hero = useMemo(() => {
    const vids = [
      { src: '/Video/CocoLanding.mp4', poster: '/assets/CocoLanding.png' },
      { src: '/Video/LoftLanding.mp4', poster: '/assets/LoftLanding.png' },
      { src: '/Video/SubwayLanding.mp4', poster: '/assets/SubwayLanding.png' },
    ]
    return vids[Math.floor(Math.random() * vids.length)]
  }, [])

  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="MARTY ≠ THERAPY — Built for the quiet ones, avoiders, and overthinkers."
        />
      </Head>

      {/* Stack: hero → posters → merch → fund → footer */}
      <main className="bg-black text-white min-h-screen w-full">
        {/* HERO */}
        <section className="relative h-screen w-full flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={hero.poster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={hero.src} type="video/mp4" />
          </video>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-purple-400 text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              MARTY ≠ THERAPY
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-6">
              “Change. Inhale. Acceptance. Exhale.”
              <br />
              For the Quiet Ones™, the executive dysfunction fam™, and the perfectionist overthinkers™ alike.
            </p>
            <p className="animate-bounce text-sm text-white/60">Scroll ↓</p>
          </div>
        </section>

        {/* POSTERS */}
        <section className="bg-black">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <PosterWall />
          </div>
        </section>

        {/* MERCH */}
        <section className="bg-zinc-950">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <MartyHoodie />
          </div>
        </section>

        {/* FUND CTA */}
        <section className="bg-black">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <FuelTheFounder />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}