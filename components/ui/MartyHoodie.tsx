import Image from 'next/image'
import Link from 'next/link'

type Item = {
  title: string
  src: string
  href: string
  note?: string
}

const ITEMS: Item[] = [
  {
    title: 'Crewneck — Beige / Navy',
    src: '/images/crewneck-beige-navy.png',
    href: '/shop',
    note: 'Limited drop — The Quiet Ones'
  },
  {
    title: 'Crewneck — Navy / Gold',
    src: '/images/crewneck-navy-gold.png',
    href: '/shop',
    note: 'Limited drop — Overthinkers'
  },
]

export default function MartyHoodie() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Merch, not cringe</h2>
        <Link
           href="/shop"
           className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
        >
          🛒 Browse Store
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ITEMS.map((it) => (
          <article
            key={it.title}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/[.07] transition shadow-[0_10px_40px_rgba(0,0,0,.25)]"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image src={it.src} alt={it.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{it.title}</h3>
              {it.note && <p className="text-sm text-white/70 mt-1">{it.note}</p>}
              <div className="mt-3">
                <Link
                  href={it.href}
                  className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}