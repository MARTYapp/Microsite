export default function Home() {
  return (
    <main className="bg-black text-white h-screen w-screen overflow-hidden relative">
      {/* 🎬 Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Video/CocoLanding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🎯 Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-purple-400 text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          MARTY ≠ THERAPY
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-xl mb-6">
          “Change. Inhale. Acceptance. Exhale.”<br />
          For the Quiet Ones™, the executive dysfunction fam™, and the perfectionist overthinkers™ alike.
        </p>
        <p className="animate-bounce text-sm text-white/60">Scroll</p>
      </div>
    </main>
  )
}