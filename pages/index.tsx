import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="Voice-first mental wellness for the emotionally intelligent misfits." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">The MARTY App</h1>
        <p className="text-lg md:text-xl max-w-2xl text-center mb-8">
          Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike.
        </p>
        <a href="/journal" className="bg-white text-black px-6 py-3 rounded-lg text-lg font-medium">
          Try the Demo →
        </a>
      </main>
    </>
  );
}