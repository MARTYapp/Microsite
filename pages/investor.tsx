import Link from "next/link";

export default function Investor() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-24 text-center bg-gradient-to-b from-black to-[#111]">
        <h1 className="text-5xl font-extrabold uppercase tracking-tight">Why Fund the Founder?</h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Clarity, culture, and a sharper mind product. This is not therapy — this is MARTY.</p>
        <div className="mt-8 flex gap-3 justify-center">
          <Link href="/support" className="underline">Support MARTY</Link>
          <a href={(process.env.NEXT_PUBLIC_INVESTOR_DECK_URL ?? "/deck.pdf")} className="underline">View Deck</a>
          <a href="{process.env.NEXT_PUBLIC_INVESTOR_CAL_URL ?? "https://cal.com/your-handle/marty"}" className="underline">Book Call</a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid gap-8">
        <div data-traction-cards className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-800 p-4"><div className="text-3xl font-extrabold">{process.env.NEXT_PUBLIC_METRIC_SIGNUPS ?? "—"}</div><div className="text-gray-400 text-sm">Signups</div></div>
          <div className="rounded-xl border border-gray-800 p-4"><div className="text-3xl font-extrabold">{process.env.NEXT_PUBLIC_METRIC_MERCH ?? "—"}</div><div className="text-gray-400 text-sm">Merch sold</div></div>
          <div className="rounded-xl border border-gray-800 p-4"><div className="text-3xl font-extrabold">{process.env.NEXT_PUBLIC_METRIC_PRESS ?? "—"}</div><div className="text-gray-400 text-sm">Press mentions</div></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Traction</h2>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>Early adopters and waitlist growth</li>
            <li>Merch sold / community touchpoints</li>
            <li>Press mentions</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Roadmap</h2>
          <ol className="text-gray-300 list-decimal ml-5 space-y-1">
            <li>Alpha polish & supporter community</li>
            <li>Pro tier + retention loops</li>
            <li>Mobile form factor + distribution</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Positioning</h2>
          <p className="text-gray-300">MARTY ≠ therapy; it’s an assertive cognitive tool. Clear wedge against vibe apps and self-help sludge.</p>
        </div>
      </section>

      <section className="py-12 text-center">
        <a href={(process.env.NEXT_PUBLIC_INVESTOR_DECK_URL ?? "/deck.pdf")} className="inline-block px-6 py-3 rounded-xl border border-gray-700 hover:bg-white/5">View Full Deck</a>
        <a href="{process.env.NEXT_PUBLIC_INVESTOR_CAL_URL ?? "https://cal.com/your-handle/marty"}" className="inline-block px-6 py-3 ml-3 rounded-xl border border-gray-700 hover:bg-white/5">Book Call</a>
      </section>
    </main>
  );
}
