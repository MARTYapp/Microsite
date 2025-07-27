import Image from "next/image"

export default function PosterBreathwork() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">🖼️ “Change. Acceptance. Inhale. Exhale.” Poster</h1>
      <Image
        src="/assets/poster-change-acceptance.png"
        alt="Breathwork Poster"
        width={600}
        height={800}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-300 max-w-2xl">
        DBT-coded. Lo-fi. Perfect for any wall that needs a little breath and a little backbone.
      </p>
    </div>
  )
}