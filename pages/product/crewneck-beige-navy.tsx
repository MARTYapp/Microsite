import Image from "next/image"

export default function CrewneckBeigeNavy() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">🧥 Beige/Navy Crewneck</h1>
      <Image
        src="/assets/crewneck-beige.png"
        alt="Beige/Navy Crewneck"
        width={600}
        height={600}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-300 max-w-2xl">
        Cozy, collegiate, zero cringe. Built for journaling marathons and late-night overthinking.
      </p>
    </div>
  )
}