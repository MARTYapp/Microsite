import Head from 'next/head'

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Head>
        <title>MARTY Investor Microsite</title>
        <meta
          name="description"
          content="Discover MARTY's innovative platform revolutionizing decision-making with proprietary AI features. Join us as we scale and monetize with a passionate team."
        />
      </Head>
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            MARTY: The Future of Intelligent Decision-Making
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Harnessing proprietary AI to identify patterns, visualize insights, and optimize your workflow — empowering smarter choices every day.
          </p>
        </section>

        {/* Pitch Deck Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Pitch Deck</h2>
          <a
            href="https://example.com/marty-pitch-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition"
          >
            View Our Deck
          </a>
        </section>

        {/* Proprietary Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Proprietary Features</h2>
          <div className="grid gap-10 md:grid-cols-3 text-gray-300">
            <div>
              <h3 className="text-xl font-bold mb-2">Pattern Recognizer</h3>
              <p>
                Our AI engine detects complex data patterns, enabling predictive insights that adapt to your unique needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Visualizer</h3>
              <p>
                Transform raw data into intuitive, interactive visuals that highlight opportunities and risks at a glance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Calendar Integration</h3>
              <p>
                Seamlessly sync insights with your schedule to optimize timing and execution of key decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Merch & Monetization Section */}
        <section className="mb-16 bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Merch & Monetization</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center">
            Beyond software, MARTY extends its brand through exclusive merchandise and strategic partnerships, creating diversified revenue streams and building a loyal community.
          </p>
        </section>

        {/* Team Snapshot Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet the Team</h2>
          <div className="flex flex-col md:flex-row justify-around text-center text-gray-300">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Sable</h3>
              <p>Chief Technology Officer - Architect of MARTY’s cutting-edge AI algorithms.</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Cealan</h3>
              <p>Head of Product - Driving user-centric design and seamless experiences.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Founder</h3>
              <p>Visionary leader with a passion for transforming data into actionable intelligence.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-300">
            Interested in joining our journey? Reach out to us at{' '}
            <a
              href="mailto:investors@marty.ai"
              className="text-indigo-400 underline hover:text-indigo-300"
            >
              investors@marty.ai
            </a>
            .
          </p>
          <a
            href="mailto:investors@marty.ai"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  )
}
