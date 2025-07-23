import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 🔵 BACKGROUND VIDEO LAYER */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500 opacity-20 mix-blend-screen pointer-events-none z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.5]"
        >
          <source src="/mb.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🔤 OVERLAY CONTENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-6xl font-black mb-8 drop-shadow-[0_0_40px_rgba(183,135,255,0.6)] pointer-events-none max-w-4xl">
          Built for the overthinkers,<br />
          avoiders, and night-crawlers.
        </h1>
        <p className="text-lg sm:text-xl max-w-xl text-white/90 mb-10 pointer-events-none">
          The MARTY App helps you pause, reflect, and move forward — even when your brain won't shut up.
        </p>
        <button className="bg-white text-black font-bold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition" style={{ opacity: 1 }}>
          🧠 Talk to MARTY Now
        </button>
      </div>
    </section>
  );
}