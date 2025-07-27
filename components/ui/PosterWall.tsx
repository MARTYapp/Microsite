export default function PosterWall() {
    return (
      <section className="py-20 px-8 text-center bg-black text-white">
        <h2 className="text-4xl font-extrabold tracking-tight mb-6">
          🧠 MARTY Method Visuals
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          DBT grids. Breathwork spirals. Quote posters that slap.
          <br />
          All designed to hit where it hurts (in a good way).
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-72 h-96 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center text-center p-4 border border-gray-700">
            <span className="text-sm uppercase text-gray-500">Coming Soon</span>
            <h3 className="text-xl font-semibold mt-2">“Change. Acceptance. Inhale. Exhale.”</h3>
          </div>
          <div className="w-72 h-96 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center text-center p-4 border border-gray-700">
            <span className="text-sm uppercase text-gray-500">Coming Soon</span>
            <h3 className="text-xl font-semibold mt-2">DBT x Executive Function Visualizer</h3>
          </div>
        </div>
      </section>
    )
  }
  