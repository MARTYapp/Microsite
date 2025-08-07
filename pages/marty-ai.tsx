import Link from 'next/link'

export default function MartyAI() {
  return (
    <div className="min-h-screen p-8 bg-black text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Meet MARTY AI
      </h1>
      <p className="mb-4 text-white/80 text-lg">
        MARTY isn’t a therapist. He’s your emotionally steady, trauma-informed digital bro.
        Voice-first. Neuro-inclusive. Built different.
      </p>
      <p className="mb-8 text-white/70 text-base italic max-w-2xl">
        When you journal with MARTY, you’re not just venting into the void. You’re in an interactive reflection loop
        where real tools meet real talk. Every session builds toward clarity.
      </p>
      <ul className="space-y-4 text-sm text-zinc-300 text-left max-w-md">
        <li>
          🧠 <strong>Pattern Recognizer</strong><br />
          MARTY flags mental loops, distorted thoughts, and recurring narratives — so you can break the cycle and rewire them.
        </li>
        <li>
          📓 <strong>DBT + EF Visualizer</strong><br />
          Visual coaching tools rooted in Dialectical Behavior Therapy and Executive Functioning — calm your chaos.
        </li>
        <li>
          🪞 <strong>Backward Review Journaling</strong><br />
          One day at a time. No judgment. Just emotional debriefing that makes your story feel seen and your patterns feel beatable.
        </li>
      </ul>
      <div className="mt-12">
        <Link href="/journal" passHref legacyBehavior>
          <span className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
            🧠 Journal with MARTY
          </span>
        </Link>
      </div>
    </div>
  );
}
