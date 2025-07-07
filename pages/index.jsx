import React, { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState('');
  const [entry, setEntry] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    setResponse("Thanks for sharing. It sounds like you're really feeling that today. I'm here.");
    setStep(4);
  };

  const steps = {
    1: (
      <div className="flex flex-col items-center text-center p-6">
        <h1 className="text-3xl text-white mb-4">Sup yo, what’s going on?</h1>
        <button
          className="bg-white text-blue-900 rounded-xl px-4 py-2 mb-2"
          onClick={() => setStep(2)}
        >
          Start Journaling
        </button>
      </div>
    ),
    2: (
      <div className="flex flex-col items-center p-6">
        <h2 className="text-white text-xl mb-4">Pick what’s going on</h2>
        <div className="flex space-x-4">
          {["😔", "😡", "😢", "😐", "😊"].map((emo) => (
            <button
              key={emo}
              className="text-3xl"
              onClick={() => {
                setMood(emo);
                setStep(3);
              }}
            >
              {emo}
            </button>
          ))}
        </div>
      </div>
    ),
    3: (
      <div className="flex flex-col p-6">
        <h2 className="text-white text-xl mb-2">What’s on your mind?</h2>
        <textarea
          className="p-4 rounded-md w-full h-40 text-black"
          placeholder="Type or talk to me…"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button
          className="bg-white text-blue-900 rounded-xl px-4 py-2 mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    ),
    4: (
      <div className="flex flex-col items-center p-6 text-white text-center">
        <h2 className="text-xl mb-2">Here’s what I heard</h2>
        <p className="bg-blue-900/40 p-4 rounded-xl max-w-md">{response}</p>
        <button
          className="mt-6 bg-white text-blue-900 px-4 py-2 rounded-xl"
          onClick={() => setStep(1)}
        >
          Start Over
        </button>
      </div>
    )
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white font-sans">
      {steps[step]}
    </main>
  );
}
