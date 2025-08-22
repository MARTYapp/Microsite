import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Script from 'next/script';

// Allow the Stripe custom element in TSX


export default function Home() {
  const [messages, setMessages] = useState([
    { from: "marty", text: "Hey. I'm Marty. Not therapy. Just me." },
  ]);
  const [input, setInput] = useState("");
  const [sentCount, setSentCount] = useState(0);

  const sendMessage = () => {
    if (!input) return;
    if (sentCount >= 2) return; // gate after 2 user messages
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setSentCount(sentCount + 1);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-[#1C1C1C]">
        <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-6">
          MARTY ≠ THERAPY
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Not a therapist. Not a vibe app. Just MARTY.
        </p>
        <Link href="/marty-ai">
          <Button variant="default" size="lg">Try Marty Now</Button>
        </Link>
      </section>

      {/* PROTOTYPE CHAT */}
      <section className="py-20 flex flex-col items-center bg-[#111]">
        <h2 className="text-3xl font-bold mb-6">Prototype Demo</h2>
        <Card className="w-full max-w-md bg-black border border-gray-800">
          <CardContent className="p-4 space-y-3">
            <div className="space-y-2 h-64 overflow-y-auto">
              {messages.map((m, i) => (
                <p
                  key={i}
                  className={`${m.from === "marty" ? "text-blue-400" : "text-gray-200"}`}
                >
                  <strong>{m.from === "marty" ? "Marty" : "You"}: </strong>
                  {m.text}
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
                <Link href="/marty-ai">
                  <Button size="sm" variant="outline">Join Beta</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* CTA SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-8 bg-gradient-to-b from-[#1C1C1C] to-black">
        <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-4">Beta Test Marty</h3>
          <p className="mb-6 text-gray-300">Sign up, chat, and help shape Marty’s growth.</p>
          <Link href="/marty-ai">
            <Button>Join Beta</Button>
          </Link>
        </Card>

        <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-4">Invest in Marty</h3>
          <p className="mb-6 text-gray-300">View traction, roadmap, and pitch materials.</p>
          <Link href="/investor">
            <Button>See Deck</Button>
          </Link>
        </Card>

        <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-4">Fund the Founder</h3>
          <p className="mb-6 text-gray-300">Support directly via Stripe.</p>

          {/* Stripe Buy Button */}
          <stripe-buy-button
            buy-button-id="buy_btn_1RnmLTL45NOzuZAPetj8mdK4"
            publishable-key="pk_live_51RiWkVL45NOzuZAP09C7PjNtYwCweq8djVjxLSGqgqG5PVPq3bJd6GWjcBwpJBOynsvaHwYSKsvitjPJN3n02TLf00vZSARbmJ"
          ></stripe-buy-button>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-black text-center text-gray-500 text-sm">
        <p>© 2025 The MARTY App. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://twitter.com/TheMARTYApp" className="hover:text-white">@TheMARTYApp</a>
          <a href="https://instagram.com" className="hover:text-white">Instagram</a>
        </div>
      </footer>

      {/* Stripe script loader */}
      <Script async src="https://js.stripe.com/v3/buy-button.js" />
    </div>
  );
}