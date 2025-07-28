import Head from 'next/head'
import Image from 'next/image'

export default function CrewneckBeigeNavy() {
  return (
    <>
      <Head>
        <title>MARTY Crewneck — Beige/Navy</title>
        <meta name="description" content="Shop the beige/navy MARTY crewneck — cozy, collegiate, and built for late-night overthinkers." />
      </Head>
      <main className="min-h-screen bg-black text-white p-8 font-space relative">
        <h1 className="text-5xl font-bold mb-3 tracking-tight">🧥 Beige/Navy Crewneck</h1>
        <Image
          src="/assets/crewneck-beige.png"
          alt="Beige/Navy Crewneck"
          width={720}
          height={720}
          className="rounded-lg shadow-lg mb-5"
        />
        <p className="text-xl text-gray-300 max-w-2xl">
          Cozy, collegiate, zero cringe. Built for journaling marathons and late-night overthinking.
        </p>
        <div className="absolute bottom-6 right-6 text-gray-800 opacity-10 text-9xl animate-pulse select-none pointer-events-none">
          M
        </div>
      </main>
    </>
  )
}