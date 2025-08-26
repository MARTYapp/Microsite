"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TryMarty() {
  return (
    <section className="relative py-20 px-6 text-center bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🧠 Try MARTY Now
      </motion.h2>
      <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
        Not a therapist. Not a vibe app. Just MARTY — here when you need it.
      </p>
      <div className="flex justify-center">
        <Link href="/chat" className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-lg font-semibold shadow-lg transition">
          Talk to MARTY
        </Link>
      </div>
    </section>
  );
}