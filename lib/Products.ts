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
] as const;