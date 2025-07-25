export default function Visualizer() {
  return (
    <section className="w-full flex justify-center items-center py-20 px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111]">
      <div className="w-80 h-80 bg-indigo-800/80 border-2 border-indigo-500 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white text-center p-6">
        <div className="text-3xl font-semibold mb-2">🌀 MARTY Visualizer</div>
        <p className="text-sm text-indigo-200">
          Placeholder for DBT / Executive Function matrix grid or animation.
        </p>
        <span className="mt-4 text-xs text-gray-400 italic">
          “Real tools. Real style. Real talk.”
        </span>
      </div>
    </section>
  );
}