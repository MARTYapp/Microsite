import { useState } from 'react';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setReply('');
    setError('');

    try {
      const res = await fetch('/api/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entry }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🧠 Journal with MARTY</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Type your thoughts here..."
          rows={6}
          style={{ width: '100%', padding: '1rem' }}
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button type="submit" disabled={loading} style={{ marginTop: '1rem' }}>
          {loading ? 'Thinking...' : 'Send to MARTY'}
        </button>
      </form>

      {reply && (
        <div style={{ marginTop: '2rem', background: '#f0f0f0', padding: '1rem' }}>
          <strong>MARTY says:</strong>
          <p>{reply}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}