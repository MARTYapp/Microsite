'use client';
import { useState } from 'react';

type Tier = { label:string; priceId:string; mode?:'payment'|'subscription' };

export default function FundTheFounder({
  bmcUrl,
  tiers = []
}: {
  bmcUrl: string;
  tiers?: Tier[];
}) {
  const [loading, setLoading] = useState<string | null>(null);

  async function go(priceId: string, mode: 'payment'|'subscription' = 'payment') {
    try {
      setLoading(priceId);
      const r = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ priceId, mode })
      });
      const { url } = await r.json();
      if (url) window.location.href = url;
    } finally {
      setLoading(null);
    }
  }

  return (
    <section style={{display:'grid', gap:'16px', maxWidth:480}}>
      <h2 style={{margin:0}}>☕ Fuel the Founder</h2>
      <div style={{display:'grid', gap:'8px'}}>
        {tiers.map(t => (
          <button key={t.priceId} disabled={loading===t.priceId}
            onClick={() => go(t.priceId, t.mode||'payment')}
            style={{padding:'12px 16px', fontWeight:700, cursor:'pointer'}}>
            {loading===t.priceId ? 'Redirecting…' : t.label}
          </button>
        ))}
      </div>
      <a href={bmcUrl} target="_blank" rel="noopener noreferrer" style={{textAlign:'center', textDecoration:'underline'}}>
        ☕ Fuel the Founder
      </a>
    </section>
  );
}
