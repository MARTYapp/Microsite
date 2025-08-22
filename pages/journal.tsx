import { useState, useRef, useEffect } from "react";

export default function Journal() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, text]);
    setInput("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0b1a3a] to-black flex flex-col items-center py-16 px-4 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">
        Your MARTY Journal
      </h1>

      <div className="w-full max-w-2xl flex-1 overflow-y-auto space-y-4 mb-6">
        {messages.length === 0 && (
          <div className="rounded-xl border border-blue-400/30 bg-black/40 px-4 py-5 text-white/70">
            Start typing below — this space is for the thoughts you’d rather not
            lose.
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className="px-4 py-3 rounded-xl border border-blue-400/30 bg-black/40 text-lg md:text-xl font-medium text-white/90"
          >
            {msg}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={handleSend}
        className="w-full max-w-2xl flex items-center gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your thought…"
          className="flex-1 rounded-xl bg-black/70 border border-blue-400/30 px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-400/60"
        />
        <button
          type="submit"
          className="rounded-xl bg-blue-500 hover:bg-blue-400 px-6 py-3 font-semibold text-white text-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
        >
          Send
        </button>
      </form>
    </main>
  );
}