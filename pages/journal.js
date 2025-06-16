import { useState } from 'react';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('/api/journal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entry }),
    });
    const data = await res.json();
    setResponse(data.reply);
    setLoading(false);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🧠 Journal with MARTY</h1>
      <textarea
        rows={6}
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Type your thoughts here..."
        style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !entry.trim()}
        style={{
          marginTop: '1rem',
          backgroundColor: '#111',
          color: 'white',
          padding: '0.5rem 1rem',
        }}
      >
        {loading ? 'MARTY is thinking...' : 'Send to MARTY'}
      </button>
      {response && (
        <div style={{ marginTop: '2rem', background: '#f0f0f0', padding: '1rem' }}>
          <strong>MARTY says:</strong>
          <p>{response}</p>
        </div>
      )}
    </main>
  );
}