import Image from 'next/image'

type Poster = { src: string; alt: string; caption?: string }

const POSTERS: Poster[] = [
  { src: '/assets/SubwayLanding.png', alt: 'MARTY — Subway Landing', caption: 'New York Subway — The Quiet Ones' },
  { src: '/assets/LoftLanding.png', alt: 'MARTY — Loft Landing', caption: 'Loft Light — Acceptance' },
  { src: '/assets/CocoLanding.png', alt: 'MARTY — Coco Landing', caption: 'Coco — The Overthinkers' },
]

export default function PosterWall() {
  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Scenes from MARTY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {POSTERS.map((p, i) => (
          <figure
            key={p.src}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,.25)]"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
            {p.caption && (
              <figcaption className="p-3 text-sm text-white/80 border-t border-white/10">
                {p.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  )
}