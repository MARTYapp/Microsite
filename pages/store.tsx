import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import MartyHeader from "@/components/Subhead"; // adjust if needed
import Footer from "@/components/Footer"; // reuse your existing styled footer
import { products } from "@/lib/products"; // you'll create this next

export default function StorePage() {
  return (
    <>
      <Head>
        <title>MARTY Store — Real Tools. Real Style.</title>
        <meta name="description" content="Merch from The MARTY App. Wear it. Use it. No fluff." />
      </Head>

      <div className="min-h-screen w-full bg-black text-white">
        <MartyHeader />

        <section className="text-center px-6 py-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">WHAT MARTY’S INTO</h1>
          <p className="text-lg opacity-80 mb-6">
            WEAR IT. READ IT. USE IT. Real tools, real style, real talk.<br />
            Picked with purpose. No fluff. All function.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
          {products.map((item) => (
            <motion.div
              key={item.id}
              className="bg-zinc-900 p-4 rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="rounded-xl object-cover w-full h-64"
              />
              <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
              <p className="text-sm text-zinc-400 mt-1">{item.description}</p>
              <a
                href={item.link}
                className="inline-block mt-4 text-blue-300 underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now →
              </a>
            </motion.div>
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}