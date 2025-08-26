"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Msg = { id: number; from: "marty" | "user"; text: string; time: string };

const SEED: Msg[] = [
  { id: 1, from: "marty", text: "Hey. You made it.", time: "11:00" },
  { id: 2, from: "marty", text: "This ain’t therapy. This is us.", time: "11:00" },
];

const STORAGE_KEY = "marty_chat_v1";

export default function MartyChat() {
  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Reduced motion
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const set = () => setPrefersReduced(!!m?.matches);
    set();
    m?.addEventListener?.("change", set);
    return () => m?.removeEventListener?.("change", set);
  }, []);

  // Load history
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as Msg[];
        if (Array.isArray(data) && data.length) setMessages(data);
      }
    } catch {}
  }, []);

  // Persist history
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  const timeNow = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const replyTo = useCallback((txt: string) => {
    const t = (txt || "").toLowerCase().trim();

    // Lightweight intent & DBT-ish nudges
    if (/tired|exhaust|sleep/.test(t)) return "Then rest. You’re allowed. 20 minutes. Set a timer.";
    if (/anx|panic|nervous/.test(t)) return "Name it. 1–2 words. Then 4-7-8 breathe once. After: one tiny action.";
    if (/overwhelm|too much|can.?t/i.test(t)) return "Pick one slice. 10 minutes. What’s the smallest start?";
    if (/avoid|later|tomorrow/.test(t)) return "Opposite action. Start now for 5 minutes. Then reassess.";
    if (/fuck|shit|damn/.test(t)) return "Yeah. And you’re still here. That counts. What’s one concrete move?";
    if (/ok(ay)?\b/.test(t)) return "Okay is enough today. What’s the next 10-minute step?";
    if (/help|what do i do|advice/.test(t)) return "Tell me the exact blocker in 7 words or less.";
    if (/goal|plan/.test(t)) return "One goal for today. Make it measurable. Go.";

    // Default
    if (t.length < 8) return "Say it straight. Fewer words, more truth.";
    return "Heard. Now pick one next action. 10 minutes, timer on.";
  }, []);

  // Commands
  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "/reset") {
      setMessages(SEED);
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
      return true;
    }
    if (cmd === "/export") {
      try {
        const blob = new Blob([JSON.stringify(messages, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "marty-chat-export.json";
        a.click();
        URL.revokeObjectURL(url);
      } catch {}
      return true;
    }
    return false;
  };

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;

    // Slash commands
    if (handleCommand(clean)) {
      setInput("");
      return;
    }

    const userMsg: Msg = {
      id: messages.length + 1,
      from: "user",
      text: clean,
      time: timeNow(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply: Msg = {
        id: userMsg.id + 1,
        from: "marty",
        text: replyTo(clean),
        time: timeNow(),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, prefersReduced ? 0 : 900);
  };

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  }, [messages, isTyping, prefersReduced]);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 160) + "px"; // cap height
  }, [input]);

  // Clear chat (button)
  const reset = () => {
    setMessages(SEED);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) send(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) send(input);
    }
  };

  return (
    <section
      className="h-[92vh] max-w-md mx-auto bg-black text-white flex flex-col px-4 pt-6 pb-4"
      style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <header className="mb-3 flex items-center justify-between text-xs text-white/60">
        <span>🧠 Texting MARTY</span>
        <button
          onClick={reset}
          className="rounded border border-white/10 px-2 py-1 hover:bg-white/10 transition"
          aria-label="Reset conversation"
        >
          Reset
        </button>
      </header>

      <div
        className="flex-1 overflow-y-auto space-y-4 pr-1"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={clsx(
              "text-sm max-w-[80%]",
              msg.from === "user" ? "self-end ml-auto text-right" : "self-start"
            )}
          >
            <motion.div
              initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.25 }}
              className={clsx(
                "inline-block px-4 py-2 rounded-2xl",
                msg.from === "user"
                  ? "bg-white text-black"
                  : "bg-purple-700 text-white"
              )}
            >
              {msg.text}
            </motion.div>
            <div className="text-[10px] text-gray-400 mt-1">{msg.time}</div>
          </div>
        ))}

        {isTyping && (
          <div className="self-start flex items-center gap-1 text-white/70 text-xs">
            <span className="animate-bounce">•</span>
            <span className="animate-bounce [animation-delay:.12s]">•</span>
            <span className="animate-bounce [animation-delay:.24s]">•</span>
            <span className="ml-2">MARTY is typing…</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <form onSubmit={onSubmit} className="mt-4 flex items-end gap-2">
        <textarea
          ref={textareaRef}
          className="flex-1 bg-white/10 text-white px-4 py-3 rounded-2xl outline-none placeholder:text-white/40 resize-none"
          placeholder="Say it like it is…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Message input"
          rows={1}
          maxLength={2000}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className={clsx(
            "rounded-full px-4 py-3 font-semibold transition",
            input.trim()
              ? "bg-white text-black hover:bg-white/90"
              : "bg-white/10 text-white/40 cursor-not-allowed"
          )}
          aria-label="Send message"
        >
          Send
        </button>
      </form>
    </section>
  );
}