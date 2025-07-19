import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="description" content="The MARTY App – Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike." />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-black text-white text-center">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl mb-6">
          The MARTY App
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike.
        </p>
        <a
          href="/journal"
          className="text-lg font-semibold underline text-indigo-400 hover:text-indigo-200 transition"
        >
          Try the Demo →
        </a>
      </main>
    </>
  );
}
