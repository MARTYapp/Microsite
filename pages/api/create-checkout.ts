import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2023-08-16' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const body = req.body as { priceId: string; quantity?: number; mode?: 'payment'|'subscription' };
    const session = await stripe.checkout.sessions.create({
      mode: body.mode || 'payment',
      line_items: [{ price: body.priceId, quantity: body.quantity ?? 1 }],
      success_url: process.env.NEXT_PUBLIC_SUCCESS_URL!,
      cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL!,
      automatic_tax: { enabled: true }
    });
    return res.status(200).json({ url: session.url });
  } catch (e:any) {
    return res.status(500).json({ error: e.message || 'Stripe error' });
  }
}
