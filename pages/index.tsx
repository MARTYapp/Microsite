import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="The MARTY App 🧠 Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike."
        />
      </Head>

      <main className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden px-6 py-16">
        {/* Glow Ripple Animation */}
        <div className="absolute w-32 h-32 animate-ripple bg-white/10 rounded-full pointer-events-none" />
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 z-10">
          The MARTY App
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 z-10 text-center">
          Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike.
        </p>
        <a
          href="/journal"
          className="text-lg font-semibold underline text-indigo-400 hover:text-indigo-200 transition z-10"
        >
          Try the Demo →
        </a>
      </main>
    </>
  );
}