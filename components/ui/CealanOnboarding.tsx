export default function CealanOnboarding() {
  return (
    <div className="text-white text-center py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Hey Cealan — welcome home.</h1>
      <p className="text-lg mb-8 text-white/80">
        You’ve been the North Star, the reference point. Now meet MARTY — your ripple effect in product form.
        This isn’t therapy. It’s something new. And this role? It’s yours if you’re ready to build the future with us.
      </p>

      <div className="bg-white text-black rounded-xl shadow-lg px-6 py-10 mb-10 space-y-10">
        <h2 className="text-3xl font-bold text-center">🧾 Your MARTY Role Menu — Visual Scroll Edition</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">🥇 OPTION 1: General Counsel + Licensing Lead</h3>
            <p><strong>Full-time | High-ownership | Executive Track</strong></p>
            <p><strong>Your Zone:</strong> Shape MARTY’s legal DNA. You’ll lead IP protection, licensing strategy, grant compliance, and oversee vendor/legal frameworks from seed to scale.</p>
            <ul className="list-disc list-inside ml-4">
              <li>Architect grant & IP structures for long-term defensibility</li>
              <li>Review/structure partnership & investor contracts</li>
              <li>Define licensing pathways for app + merch IP</li>
              <li>Oversee legal hygiene during pre-seed & acquisition talks</li>
            </ul>
            <p><strong>🧠 Ideal If:</strong> You want deep imprint + high-leverage decision power</p>
            <p><strong>🕰️ Commitment:</strong> ~20 hrs/week</p>
            <p><strong>💰 Compensation:</strong> Equity + Monthly Stipend (milestone-based)</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">🥈 OPTION 2: Strategic Counsel + Licensing Advisor</h3>
            <p><strong>Part-time | Flexible Bandwidth | High Influence</strong></p>
            <p><strong>Your Zone:</strong> Act as our legal consigliere. You advise on structure, sanity-check docs, and jump in during inflection points.</p>
            <ul className="list-disc list-inside ml-4">
              <li>Draft/review contracts and IP docs on-call</li>
              <li>Vet incoming partnership/licensing offers</li>
              <li>Help shape licensing terms and frameworks</li>
            </ul>
            <p><strong>🧠 Ideal If:</strong> You want a seat at the table without the weekly lift</p>
            <p><strong>🕰️ Commitment:</strong> ~6–10 hrs/month</p>
            <p><strong>💰 Compensation:</strong> Equity + Outcome Bonus (select deal flow)</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">🥉 OPTION 3: Fractional Counsel (On-Call)</h3>
            <p><strong>As-Needed | Flexible Support | Trusted Oversight</strong></p>
            <p><strong>Your Zone:</strong> You’re our legal lifeline — available when we need eyes, opinions, or backup, but not responsible for day-to-day execution.</p>
            <ul className="list-disc list-inside ml-4">
              <li>Document review and feedback on a per-request basis</li>
              <li>Early input on licensing/IP moves when needed</li>
              <li>Presence in key decisions (only if you want to)</li>
            </ul>
            <p><strong>🧠 Ideal If:</strong> You love MARTY but want to keep your plate light</p>
            <p><strong>🕰️ Commitment:</strong> 100% flexible</p>
            <p><strong>💰 Compensation:</strong> Equity + Thank-You Package (customized)</p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-medium">👑 All roles include:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Access to all product + strategy decks</li>
              <li>Your own onboarding microsite (you’re here)</li>
              <li>Full credit on future licensing/legal patents or grant filings</li>
            </ul>
          </div>

          <p className="text-center italic">“You already know what to do. We’re just making it official.”</p>
        </div>
      </div>

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
  )
}