import Image from 'next/image'

export default function CrewneckNavyGold() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
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
    </div>
  )
}