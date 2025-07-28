import Image from 'next/image'
import Head from 'next/head'

export default function CrewneckNavyGold() {
  return (
    <>
      <Head>
        <title>MARTY Crewneck — Navy/Gold</title>
        <meta
          name="description"
          content="Shop the official MARTY Navy/Gold Crewneck — sharp, grounded, and emotionally fluent. Built for the big-feelings crew."
        />
      </Head>
      <div className="min-h-screen bg-black text-white p-8 relative">
        <h1 className="text-4xl font-bold mb-4">🧥 Navy/Gold Crewneck</h1>
        <Image
          src="/assets/crewneck-navy.png"
          alt="Navy/Gold Crewneck"
          width={600}
          height={600}
          className="rounded-lg shadow-lg mb-6"
        />
        <p className="text-lg text-gray-300 max-w-2xl">
          Masculine. Premium. Built for the big-feelings crew who still want to look sharp.
        </p>
        <div className="absolute bottom-6 right-6 text-gray-800 opacity-10 text-9xl animate-pulse select-none pointer-events-none">
          M
        </div>
      </div>
    </>
  )
}