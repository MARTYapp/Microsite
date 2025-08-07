export interface Product {
  readonly slug: string;
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly link: string;
  readonly price: string;
  readonly category: string;
}

export const products = [
  {
    slug: 'crewneck-beige-navy',
    id: 'crewneck-beige',
    name: '🧥 MARTY Crewneck (Beige/Navy)',
    description:
      'Beige with navy + orange varsity lettering. Warm, grounded, and built for overstim days. Cozy, collegiate, zero cringe.',
    image: '/assets/crewneck-beige.png',
    link: 'https://printify.com/products/crewneck-beige-navy-id123',
    price: '$54',
    category: 'apparel',
  },
  {
    slug: 'crewneck-navy-gold',
    id: 'crewneck-navy',
    name: '🧥 MARTY Crewneck (Navy/Gold)',
    description:
      'Navy with gold collegiate font. Clean, confident, neuro-spiritual energy. Masculine. Premium. Built for the big-feelings crew who still want to look sharp.',
    image: '/assets/crewneck-navy.png',
    link: 'https://printify.com/products/crewneck-navy-gold-id456',
    price: '$54',
    category: 'apparel',
  },
  {
    slug: 'poster-breathwork',
    id: 'quote-poster',
    name: '🖼️ “Change. Acceptance. Inhale. Exhale.” Poster',
    description:
      '24x36 matte poster. Daily mantra meets masculine recovery visual. Subtle. Sharp. DBT-coded. Lo-fi. Perfect for any wall that needs a little breath and a little backbone.',
    image: '/assets/poster-change-acceptance.png',
    link: 'https://printify.com/products/poster-change-acceptance-id789',
    price: '$18',
    category: 'poster',
  },
  {
    slug: 'lube-radical-acceptance',
    id: 'lube-radical',
    name: '💧 Radical Acceptance Lube',
    description:
      '4oz bottle. Slick, scent-free, and emotionally safe. Inspired by DBT and built for full-contact intimacy with yourself or another. Consent-forward. Friction-free. A nod to pleasure with presence.',
    image: '/assets/lube-radical-acceptance.png',
    link: 'https://printify.com/products/lube-radical-acceptance-id777',
    price: '$28',
    category: 'intimacy',
  },
  {
    slug: 'journal-hardcover',
    id: 'journal-hardcover',
    name: '📓 The MARTY Hardcover Journal',
    description:
      'A5 hardcover. 160 pages of premium paper, dot-grid layout. Built for late-night thoughts, midday breakthroughs, and accountability check-ins. Minimal exterior, maximum self-respect.',
    image: '/assets/journal-hardcover.png',
    link: 'https://printify.com/products/journal-hardcover-id888',
    price: '$22',
    category: 'stationery',
  },
] as const