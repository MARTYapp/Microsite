export default function ArabellaSection() {
  return (
    <section className="bg-[#0c0c0c] text-white py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          ✨ Arabella’s Section
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          This space is for Arabella — a modeling opportunity and a custodial Roth IRA breakdown.
          We’re integrating her into the brand's pipeline with clarity, care, and long-term growth in mind.
        </p>

        <div className="bg-[#111] border border-gray-800 rounded-xl py-6 px-4 shadow-inner mb-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">📈 Projected Growth (Custodial Roth)</h3>
          <p className="text-gray-400 text-sm">
            If we contribute $1,000/year from age 5 to 18, she could have:
            <br />
            <strong>$24,000+</strong> at 18 → <strong>$82,000+</strong> by 30 (compounded).
          </p>
        </div>

        <a
          href="/assets/arabella-growth-plan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-5 py-3 text-sm font-medium rounded-full border border-white text-white hover:bg-white hover:text-black transition"
        >
          📝 View Full Plan (PDF)
        </a>

        <div className="mt-8">
          <span className="inline-block text-xs text-gray-500 italic">
            Built to honor her future. Transparent, loving, and smart.
          </span>
        </div>
      </div>
    </section>
  );
}