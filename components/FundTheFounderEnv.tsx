'use client';
import { useState } from 'react';

type Tier = { label: string; priceId?: string; mode?: 'payment'|'subscription' };

export default function FundTheFounderEnv({ bmcUrl }: { bmcUrl: string }) {
  const [loading, setLoading] = useState<string | null>(null);

  const tiers: Tier[] = [
    { label: 'One-time $25',  priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ONE_25,  mode: 'payment' },
    { label: 'One-time $100', priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ONE_100, mode: 'payment' },
    { label: 'One-time $250', priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ONE_250, mode: 'payment' },
    { label: 'Monthly $9',    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY_9,  mode: 'subscription' },
    { label: 'Monthly $29',   priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY_29, mode: 'subscription' },
  ];

  async function go(priceId: string, mode: 'payment'|'subscription' = 'payment') {
    try {
      setLoading(priceId);
      const r = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ priceId, mode })
      });
      const data = await r.json();
      if (data?.url) window.location.href = data.url;
      else alert(data?.error || 'Checkout failed');
    } finally {
      setLoading(null);
    }
  }

  const configured = tiers.filter(t => !!t.priceId);
  const missing = tiers.filter(t => !t.priceId);

  return (
    <section style={{display:'grid', gap:'16px', maxWidth:520}}>
      <h2 style={{margin:0}}>Fund the Founder</h2>

      {configured.length > 0 ? (
        <div style={{display:'grid', gap:'8px'}}>
          {configured.map(t => (
            <button
              key={t.label}
              onClick={() => go(t.priceId!, t.mode)}
              disabled={loading===t.priceId}
              style={{padding:'12px 16px', fontWeight:700, cursor:'pointer'}}
            >
              {loading===t.priceId ? 'Redirecting…' : t.label}
            </button>
          ))}
        </div>
      ) : (
        <div style={{padding:'12px 16px', border:'1px solid #444'}}>
          Stripe tiers not configured yet. You can still support via Buy Me a Coffee below.
        </div>
      )}

      {missing.length > 0 && (
        <small style={{opacity:0.8}}>
          Missing env for: {missing.map(m=>m.label).join(', ')}
        </small>
      )}

      <a href={bmcUrl} target="_blank" rel="noopener noreferrer" style={{textAlign:'center', textDecoration:'underline'}}>
        Buy Me a Coffee
      </a>
    </section>
  );
}
