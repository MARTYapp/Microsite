"use client";

import ThreeAccentLazy from "@/components/ThreeAccentLazy"
import IntroHero from "@/components/IntroHero"
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeadlineSwap from "@/components/HeadlineSwap";
import NowBadge from "@/components/NowBadge";
import { useLang } from "@/lib/i18n";

const ThreeAccent = dynamic(() => import("@/components/ThreeAccent"), { ssr: false });

type Msg = { from: "marty" | "user"; text: string };

const FUND_ONCE = process.env.NEXT_PUBLIC_FUND_ONCE ?? "https://donate.stripe.com/5kQ4gAdj78bA6vQd5baAw03";
const MONTHLY_5 = process.env.NEXT_PUBLIC_MONTHLY_5 ?? "https://buy.stripe.com/00w14o92R4Zo9I25CJaAw01";
const MONTHLY_10 = process.env.NEXT_PUBLIC_MONTHLY_10 ?? "https://buy.stripe.com/6oU14o1ApdvUcUeaX3aAw02";
const PRO_29 = process.env.NEXT_PUBLIC_PRO_29 ?? "https://buy.stripe.com/9B614odj7ajI8DY4yFaAw04";
const ANGEL_99 = process.env.NEXT_PUBLIC_ANGEL_99 ?? "https://buy.stripe.com/8x2eVedj777w6vQc17aAw05";

export default function Home() {
  const { t } = useLang();
  const [messages, setMessages] = useState<Msg[]>([{ from: "marty", text: "Hey. I'm Marty. Not therapy. Just me." }]);
  const [input, setInput] = useState("");
  const [sentCount, setSentCount] = useState(0);

  const sendMessage = () => {
    if (!input || sentCount >= 2) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setSentCount((n) => n + 1);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white">
      <IntroHero />
        <NowBadge />
        <h1 className="text-6xl font-extrabold tracking-tight uppercase mt-4">{t.hero.title}</h1>
        <div className="mt-3"><HeadlineSwap /></div>
        <p className="text-lg text-gray-300 mt-6">{t.hero.tagline}</p>
        <div className="mt-8">
          <Link href="/marty-ai"><Button variant="default" size="lg">Try Marty Now</Button></Link>
        </div>

      <section className="py-12 px-8">
        <div className="mx-auto max-w-5xl">
          <ThreeAccentLazy />
        </div>
      </section>

      <section className="py-20 flex flex-col items-center bg-[#111]">
        <h2 className="text-3xl font-bold mb-6">Prototype Demo</h2>
        <Card className="w-full max-w-md bg-black border border-gray-800">
          <CardContent className="p-4 space-y-3">
            <div className="space-y-2 h-64 overflow-y-auto">
              {messages.map((m: Msg, i: number) => (
                <p key={i} className={m.from === "marty" ? "text-blue-400" : "text-gray-200"}>
                  <strong>{m.from === "marty" ? "Marty" : "You"}: </strong>{m.text}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Say something..."
                className="flex-1 bg-gray-900 text-white px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={sentCount >= 2}
              />
              <Button onClick={sendMessage} disabled={sentCount >= 2}>Send</Button>
            </div>
            {sentCount >= 2 && (
              <div className="mt-3 text-sm text-gray-300 flex items-center gap-3">
                <span>Want to keep chatting? Join the beta.</span>
                <Link href="/marty-ai"><Button size="sm" variant="outline">Join Beta</Button></Link>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="py-20 px-8 bg-gradient-to-b from-[#1C1C1C] to-black">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Fuel the Build • Join the Movement</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Fund the Founder</h3>
                <p className="mb-6 text-gray-300">One-time boost — direct fuel for Eric to ship MARTY.</p>
              </div>
              <Link href={FUND_ONCE} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Donate Once</Button>
              </Link>
            </Card>

            <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Monthly Supporter</h3>
                <p className="mb-6 text-gray-300">Join the inner circle. Small monthly pledge → big impact.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link href={MONTHLY_5} target="_blank" rel="noopener noreferrer"><Button className="w-full">$5 / mo</Button></Link>
                <Link href={MONTHLY_10} target="_blank" rel="noopener noreferrer"><Button className="w-full">$10 / mo</Button></Link>
              </div>
            </Card>

            <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">MARTY Pro / Angel</h3>
                <p className="mb-6 text-gray-300">For power users and angels. Unlock recognition + premium access.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link href={PRO_29} target="_blank" rel="noopener noreferrer"><Button className="w-full">$29 / mo</Button></Link>
                <Link href={ANGEL_99} target="_blank" rel="noopener noreferrer"><Button className="w-full">$99 / mo</Button></Link>
              </div>
            </Card>
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center">
            Support is not tax-deductible; it directly funds development. Stripe handles all payments securely.
          </p>

          <p className="text-center mt-8">
            <Link href="/support" className="underline text-gray-300 hover:text-white">Learn more on the Support page →</Link>
          </p>
        </div>
      </section>

      <footer className="py-10 bg-black text-center text-gray-500 text-sm">
        <p>© 2025 The MARTY App. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="/investor" className="hover:text-white">Investor</a>
          <a href="https://twitter.com/TheMARTYApp" className="hover:text-white">@TheMARTYApp</a>
          <a href="https://instagram.com" className="hover:text-white">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
