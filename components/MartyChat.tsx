'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const initialMessages = [
  { id: 1, from: 'marty', text: 'Hey. You made it.', time: '11:00' },
  { id: 2, from: 'marty', text: 'This ain’t therapy. This is us.', time: '11:00' },
]

export default function MartyChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const send = (text: string) => {
    const userMsg = { id: messages.length + 1, from: 'user', text, time: timeNow() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const reply = {
        id: userMsg.id + 1,
        from: 'marty',
        text: replyTo(text),
        time: timeNow(),
      }
      setMessages(prev => [...prev, reply])
      setIsTyping(false)
    }, 1200)
  }

  const replyTo = (txt: string) => {
    const t = txt.toLowerCase()
    if (t.includes('tired')) return 'then rest. you’re allowed.'
    if (t.includes('fuck')) return 'yeah. but you’re still here. that counts.'
    if (t.includes('ok')) return 'ok is enough today.'
    return 'heard.'
  }

  const timeNow = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <section className="h-screen max-w-md mx-auto bg-black text-white flex flex-col px-4 pt-8 pb-6">
      <header className="text-center mb-4 text-white/70 text-sm">🧠 Texting MARTY</header>
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {messages.map((msg) => (
          <div key={msg.id} className={clsx('text-sm max-w-[80%]', msg.from === 'user' ? 'self-end text-right' : 'self-start')}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                'inline-block px-4 py-2 rounded-2xl',
                msg.from === 'user' ? 'bg-white text-black' : 'bg-purple-700 text-white'
              )}
            >
              {msg.text}
            </motion.div>
            <div className="text-[10px] text-gray-400 mt-1">{msg.time}</div>
          </div>
        ))}
        {isTyping && (
          <div className="self-start flex items-center gap-1 text-white/70 text-xs">
            <span className="animate-bounce">•</span><span className="animate-bounce delay-150">•</span><span className="animate-bounce delay-300">•</span>
            <span className="ml-2">MARTY is typing...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <input
          className="flex-1 bg-white/10 text-white px-4 py-2 rounded-full outline-none placeholder:text-white/40"
          placeholder="say it like it is..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && input.trim() && send(input)}
        />
      </div>
    </section>
  )
}