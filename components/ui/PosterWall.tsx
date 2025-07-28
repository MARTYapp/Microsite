'use client'

import Image from 'next/image'

const posters = [
  {
    src: '/assets/quote-poster.png',
    alt: '“Change. Inhale. Acceptance. Exhale.” Poster',
  },
  {
    src: '/assets/dbt-visualizer.png',
    alt: 'DBT 4-Count Breathing Spiral Poster',
  },
]

export default function PosterWall() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-6 py-16 px-6 bg-black">
      {posters.map(({ src, alt }, idx) => (
        <div
          key={idx}
          className="group relative transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={src}
            alt={alt}
            width={280}
            height={400}
            priority
            className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      ))}
    </section>
  )
}