export default function FundSection() {
  return (
    <section className="relative isolate bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Fund the Founder • Power the App
        </h2>
        <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
          Every dollar goes straight into building MARTY — servers, prototypes, design, survival. 
          No VC filter, no corporate middleman. Just you + the founder making this real.
        </p>
        <a
          href="https://buymeacoffee.com/ericadler"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
        >
          ☕ Fuel the Founder
        </a>
      </div>
    </section>
  );
}