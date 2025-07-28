'use client'

export default function QuoteCarousel() {
  const quotes = [
    '“This app said what my therapist couldn’t.”',
    '“Feels like talking to the older brother I wish I had.”',
    '“MARTY doesn’t judge. It just helps me not spiral.”',
  ]

  return (
    <section className="py-16 px-4 bg-black text-center text-white">
      {quotes.map((quote, i) => (
        <blockquote
          key={i}
          className="text-xl md:text-2xl font-medium max-w-xl mx-auto mb-8 last:mb-0 drop-shadow-glow"
        >
          {quote}
        </blockquote>
      ))}
    </section>
  )
}