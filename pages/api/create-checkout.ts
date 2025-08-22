import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { priceId, quantity = 1, mode = 'payment' } = req.body as { priceId: string; quantity?: number; mode?: 'payment' | 'subscription' };
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity }],
      success_url: process.env.NEXT_PUBLIC_SUCCESS_URL!,
      cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL!,
      automatic_tax: { enabled: true }
    });
    res.status(200).json({ url: session.url });
  } catch (e:any) {
    res.status(500).json({ error: e.message || 'Stripe error' });
  }
}
