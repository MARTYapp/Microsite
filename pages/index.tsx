import Head from 'next/head';
import Hero from '@/components/Hero';
import Subheader from '@/components/Subheader';
import QuoteCarousel from '@/components/QuoteCarousel';
import FuelTheFounder from '@/components/FuelTheFounder';
import Footer from '@/components/Footer';

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

      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-x-hidden">
        {/* Optional Background Effect */}
        <div className="absolute w-32 h-32 animate-ripple bg-white/10 rounded-full pointer-events-none" />

        {/* Sections */}
        <Hero />
        <Subheader />
        <QuoteCarousel />
        <FuelTheFounder />
        <Footer />
      </main>
    </>
  );
}