export default function CealanOnboarding() {
  return (
    <div className="text-white text-center py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Hey Cealan — welcome home.</h1>
      <p className="text-lg mb-8 text-white/80">
        This is your private onboarding page. It’s just for you, and it&rsquo;s loaded with everything you need to dive in as Legal & Licensing Lead for The MARTY App.
      </p>
      <div className="space-y-6 text-left text-white/90">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🔒 Your Role</h2>
          <p>
            Legal & Licensing Lead — you’ll shape the frameworks that let MARTY grow: IP, grants, partnerships, and long-term compliance.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">📂 Key Documents</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><a href="/legal/marty-terms.pdf" className="underline text-purple-300 hover:text-purple-100">Terms of Use (Draft)</a></li>
            <li><a href="/legal/privacy-policy.pdf" className="underline text-purple-300 hover:text-purple-100">Privacy Policy (Draft)</a></li>
            <li><a href="/legal/licensing-models.pdf" className="underline text-purple-300 hover:text-purple-100">Licensing Models Overview</a></li>
            <li><a href="/legal/medicaid-research.pdf" className="underline text-purple-300 hover:text-purple-100">Medicaid Eligibility Research</a></li>
            <li><a href="/legal/grant-compliance-matrix.pdf" className="underline text-purple-300 hover:text-purple-100">Grant Compliance Matrix</a></li>
            <li><a href="/legal/legal-faq.pdf" className="underline text-purple-300 hover:text-purple-100">Legal FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">📌 Tasks</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>✔️ Review all linked documents above</li>
            <li>⏳ File EIN (ownership/structure TBD)</li>
            <li>✅ Join Slack + Notion (invite sent)</li>
            <li>📅 Set up 1:1 with Eric (30 min)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">💡 Reminders</h2>
          <p>
            You’re not here to fit in. You’re here to protect the mission. You’ve got great taste, a killer legal brain, and the trust to lead.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center text-white/60 text-sm italic">
        It&rsquo;s not just a job, it&rsquo;s Cealan&rsquo;s mission.
      </div>
    </div>
  )
}