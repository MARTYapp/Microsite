import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="Built for the overthinkers, avoiders, and night-crawlers." />
      </Head>

      {/* Background Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/mb.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Hero Content */}
        <main className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">MARTY</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-6">
            Built for the overthinkers, avoiders, and night-crawlers.
          </p>
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-neutral-100 transition"
          >
            🧠 Talk to MARTY Now
          </a>
        </main>
      </div>

      {/* Quote + 4 Pillars Posters */}
      <section className="bg-black text-white py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🖼️ Poster Quote</h2>
          <p className="text-lg">“You are not your worst day.”</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">📜 The Four Tools I Wish I Was Taught in High School</h2>
          <ul className="list-disc pl-5">
            <li>🧘‍♂️ Emotion Regulation</li>
            <li>🧭 Distress Tolerance</li>
            <li>🫶 Interpersonal Effectiveness</li>
            <li>🔍 Mindfulness & Self-Awareness</li>
          </ul>
        </div>
      </section>

      {/* Marty Hoodie Merch Callout */}
      <section className="bg-white text-black py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">🧥 The Marty Hoodie</h2>
        <p className="mb-4">Designed with a subtle pin detail. Wear your recovery with pride.</p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition">
          View Merch Drop
        </button>
      </section>

      {/* What's MARTY Carousel (Static for Now) */}
      <section className="bg-neutral-950 text-white py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">What’s MARTY, really?</h2>
        <div className="grid gap-6 max-w-4xl mx-auto text-lg text-center">
          <p>💬 Your voice-first recovery sponsor — not your therapist.</p>
          <p>🧠 DBT meets executive function, delivered with masculine compassion.</p>
          <p>📱 Looks like an app, feels like a human. Built for the ones who don’t fit.</p>
        </div>
      </section>
    </>
  );
}