export default function CealanOnboarding() {
  return (
    <div className="text-white text-center py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Hey Cealan — welcome home.</h1>
      <p className="text-lg mb-8 text-white/80">
        You met the inspiration. Now meet his digital legacy — embodied. This isn’t just an app. It’s MARTY.
        And this role? It’s yours if you want it.
      </p>

      <div className="space-y-6 text-left text-white/90">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🔒 Your Role</h2>
          <p>
            Legal & Licensing Lead — you’ll shape the frameworks that let MARTY grow: IP, grants, partnerships,
            long-term compliance. We’re talking everything from protection to proliferation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">📂 Key Documents</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><a href="/docs/marty-legal-method-deck.pdf" className="underline text-blue-400">📄 MARTY Method & Legal Strategy Deck (PDF)</a></li>
            <li><a href="/docs/org-structure-chart.pdf" className="underline text-blue-400">📊 Org Structure: Who’s Doing What</a></li>
            <li><a href="/docs/ip-roadmap.pdf" className="underline text-blue-400">🛡️ IP Roadmap & Filing Strategy</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 Your Next Step</h2>
          <p>
            We’re not asking for a résumé. Just your real “yes” or “no.” If this feels like a fit, tap the link below
            and we’ll formalize everything.
          </p>
          <div className="mt-4">
            <a
              href="mailto:eric@themartyapp.com?subject=I%27m%20In%20For%20MARTY"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold"
            >
              ✅ I’m In For MARTY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}