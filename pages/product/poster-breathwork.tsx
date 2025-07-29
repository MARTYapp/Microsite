import Image from 'next/image'
import Link from 'next/link'

export default function PosterBreathwork() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        🖼️ Poster: 
        <br />
        “Change. Acceptance.<br />Inhale. Exhale.”
      </h1>
      <Image
        src="/assets/poster-change-acceptance.png"
        alt="Change. Acceptance. Inhale. Exhale. Poster"
        width={600}
        height={800}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-300 max-w-2xl">
        DBT-coded. Lo-fi. Perfect for any wall that needs a little breath and a little backbone.
      </p>
      <div className="mt-6">
        <Link href="/store" className="text-blue-400 hover:underline">← Back to all merch</Link>
      </div>
    </div>
  )
}