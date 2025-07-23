import Head from 'next/head';
import Hero from '../components/Hero';
import Subheader from '../components/Subheader';
import QuoteCarousel from '../components/QuoteCarousel';
import FuelTheFounder from '../components/FuelTheFounder';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="The MARTY App 🧠 Designed for the Quiet Bros™, the executive dysfunction fam™, and the perfectionist avoiders™ alike."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 🔥 GLOWING BACKGROUND VIDEO */}
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

      {/* 🔥 MAIN CONTENT */}
      <main className="flex flex-col items-center justify-center min-h-screen text-white overflow-x-hidden relative z-10 bg-black/50">
        <div className="absolute w-32 h-32 animate-ripple bg-white/10 rounded-full pointer-events-none" />

        {/* Hero Sections */}
        <Hero />
        <Subheader />
        <QuoteCarousel />
        <FuelTheFounder />
        <Footer />
      </main>
    </>
  );
}