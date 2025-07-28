export default function Visualizer() {
  return (
    <section className="w-full flex justify-center items-center py-24 px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111]">
      <div className="w-80 h-80 sm:w-96 sm:h-96 bg-indigo-900/80 border border-indigo-500 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white text-center p-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">🌀 MARTY Visualizer</h2>
        <p className="text-sm text-indigo-200 max-w-xs">
          A real-time map of what’s going on in your head. Tracks patterns. Reflects your habits. Helps you see what you’ve been avoiding.
        </p>
        <span className="mt-6 text-xs text-gray-400 italic">
          “See yourself clearly. Then act.” — MARTY
        </span>
      </div>
    </section>
  )
}