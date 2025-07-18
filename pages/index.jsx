import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; // ✅ correct import

export default function Home() {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState('');
  const [entry, setEntry] = useState('');
  const [response, setResponse] = useState('');
  const [bgMood, setBgMood] = useState('default');

  const handleSubmit = async () => {
    const { error } = await supabase
      .from('journal_entries')
      .insert([{ mood, content: entry }]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      setResponse("Sorry, something went wrong. Try again.");
    } else {
      setResponse("Thanks for sharing. I'm here with you.");
    }

    setStep(4);
  };

  const moodOptions = [
    { label: 'Low', icon: '😔', mood: 'sad', bg: 'bg-gradient-to-br from-blue-900 to-indigo-900' },
    { label: 'Mad', icon: '😡', mood: 'angry', bg: 'bg-gradient-to-br from-red-700 to-red-900' },
    { label: 'Wrecked', icon: '😭', mood: 'wrecked', bg: 'bg-gradient-to-br from-blue-500 to-slate-800' },
    { label: 'Blah', icon: '😐', mood: 'numb', bg: 'bg-gradient-to-br from-slate-700 to-slate-900' },
    { label: 'Up', icon: '😄', mood: 'happy', bg: 'bg-gradient-to-br from-yellow-400 to-orange-600' },
  ];

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(bgMood);
  }, [bgMood]);

  const ripple = () => {
    const el = document.createElement("div");
    el.className = "fixed top-0 left-0 w-screen h-screen bg-white animate-ripple z-50";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  };

  const handleMoodSelect = (m) => {
    setMood(m.mood);
    setBgMood(m.bg);
    ripple();
    setTimeout(() => setStep(3), 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white transition-all px-4 text-center">
      {step === 1 && (
        <div>
          <h1 className="text-3xl mb-4">Sup yo, what’s going on?</h1>
          <button onClick={() => setStep(2)} className="bg-white text-blue-900 px-6 py-2 rounded-xl">Start Journaling</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl mb-4">No wrong answers. Just feel it.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {moodOptions.map((m, i) => (
              <button key={i} onClick={() => handleMoodSelect(m)} className="text-4xl hover:scale-110 transition">
                <div className="text-sm mb-1">{m.label}</div>
                <div>{m.icon}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="w-full max-w-md">
          <h2 className="text-2xl mb-2">Wanna talk more?</h2>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="w-full h-40 p-3 text-black rounded-lg mb-4"
            placeholder="Type or speak what’s on your mind..."
          />
          <button className="bg-green-600 px-4 py-2 rounded-lg mr-3" onClick={handleSubmit}>Save Entry</button>
          <button className="bg-slate-600 px-4 py-2 rounded-lg">🎤 Speak</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl mb-4">{response}</h2>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg" onClick={() => setStep(1)}>Back to Home</button>
        </div>
      )}
    </div>
  );
}