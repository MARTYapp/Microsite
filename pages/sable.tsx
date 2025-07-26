"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function SablePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>Welcome, Sable — The MARTY App</title>
        <meta
          name="description"
          content="Your onboarding hub to help launch MARTY into orbit."
        />
      </Head>

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/Assets/mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🖤 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />

      {/* 🎉 Content */}
      <main className="relative z-20 px-6 pt-24 pb-32 max-w-3xl mx-auto text-center space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
        >
          Welcome, Sable 🧠
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300"
        >
          You’re officially cleared for launch. This is your custom onboarding
          hub — filled with tools, links, and your mission roadmap to help grow
          The MARTY App.
        </motion.p>

        {/* 🔗 Links Section */}
        <div className="grid gap-6 text-left">
          <SectionLink title="🌍 MARTY Microsite Overview" href="/" />
          <SectionLink
            title="📄 Your Offer Letter + Role"
            href="/Assets/Sable_Offer.pdf"
          />
          <SectionLink
            title="🎯 2025–2028 Roadmap ($2B by 2028)"
            href="/Assets/Marty_Roadmap.pdf"
          />
          <SectionLink
            title="📈 Grant Strategy + Templates"
            href="/Assets/Grant_Strategy.pdf"
          />
          <SectionLink
            title="📊 VC Deck Preview"
            href="/Assets/Marty_VC_Deck.pdf"
          />
          <SectionLink
            title="📸 Arabella: Modeling & Roth IRA Notes"
            href="/Assets/Arabella_Section.pdf"
          />
        </div>

        <p className="text-xs text-gray-500 mt-10">
          All materials © 2025 The MARTY App. This page is private and
          unlisted.
        </p>
      </main>
    </div>
  );
}

function SectionLink({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <a className="block rounded-lg border border-white/20 bg-white/5 px-5 py-4 hover:bg-white/10 transition">
        {title}
      </a>
    </Link>
  );
}
