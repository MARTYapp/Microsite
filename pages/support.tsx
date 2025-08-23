import GoalBar from "@/components/GoalBar"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FUND_ONCE = process.env.NEXT_PUBLIC_FUND_ONCE ?? "https://donate.stripe.com/5kQ4gAdj78bA6vQd5baAw03";
const MONTHLY_5 = process.env.NEXT_PUBLIC_MONTHLY_5 ?? "https://buy.stripe.com/00w14o92R4Zo9I25CJaAw01";
const MONTHLY_10 = process.env.NEXT_PUBLIC_MONTHLY_10 ?? "https://buy.stripe.com/6oU14o1ApdvUcUeaX3aAw02";
const PRO_29 = process.env.NEXT_PUBLIC_PRO_29 ?? "https://buy.stripe.com/9B614odj7ajI8DY4yFaAw04";
const ANGEL_99 = process.env.NEXT_PUBLIC_ANGEL_99 ?? "https://buy.stripe.com/8x2eVedj777w6vQc17aAw05";

export default function Support() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-20 text-center bg-gradient-to-b from-black to-[#1C1C1C]">
        <h1 className="text-5xl font-extrabold tracking-tight uppercase mb-4">Support MARTY</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">Back the build, join the inner circle, or go premium. Every dollar turns into product.</p>
      </header>
      <div className="max-w-2xl mx-auto px-8"><GoalBar /></div>

      <main className="py-16 px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Fund the Founder</h3>
              <p className="mb-6 text-gray-300">One-time boost — direct fuel for Eric to ship MARTY.</p>
            </div>
            <Link href={FUND_ONCE} target="_blank" rel="noopener noreferrer"><Button className="w-full">Donate Once</Button></Link>
          </Card>

          <Card className="bg-black border border-gray-700 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Monthly Supporter</h3>
              <p className="mb-6 text-gray-300">Small pledge, big impact. Keep momentum steady.</p>
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

        <section className="mx-auto max-w-3xl mt-16 space-y-6">
          <h2 className="text-2xl font-bold">FAQs</h2>

          <details className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">Is this tax-deductible?</summary>
            <p className="mt-2 text-gray-300">No. MARTY is a startup, not a 501(c)(3). Support is not tax-deductible; it directly funds development. You’ll receive a normal Stripe receipt.</p>
          </details>

          <details className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">Where does the money go?</summary>
            <p className="mt-2 text-gray-300">Infra (hosting, storage, analytics), design/engineering time, prototyping, and shipping features faster.</p>
          </details>

          <details className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">Refunds?</summary>
            <p className="mt-2 text-gray-300">One-time donations are final. Monthly supporters and Pro/Angel tiers can cancel anytime; future charges stop immediately.</p>
          </details>

          <details className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-4">
            <summary className="cursor-pointer font-semibold">Do I need an account?</summary>
            <p className="mt-2 text-gray-300">No account required to donate/support. Pro/Angel tiers may include app features that require sign-in once they’re live.</p>
          </details>
        </section>
      </main>

      <footer className="py-10 bg-black text-center text-gray-500 text-sm">
        <p>© 2025 The MARTY App. All rights reserved.</p>
      </footer>
    </div>
  );
}
