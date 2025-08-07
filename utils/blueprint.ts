const siteConfig = {
  pages: [
    { path: '/', title: 'Home', isPublic: true },
    { path: '/meet-marty', title: 'Meet Marty', isPublic: true },
    { path: '/terms', title: 'Terms of Use', isPublic: true },
    { path: '/privacy', title: 'Privacy Policy', isPublic: true },
    { path: '/store', title: 'Store', isPublic: true },
    { path: '/404', title: '404', isPublic: true },
    { path: '/sable', title: 'Sable Onboarding', isPublic: false, authRequired: true },
    { path: '/cealan', title: 'Cealan Onboarding', isPublic: false, authRequired: true },
    { path: '/marty', title: 'MARTY', isPublic: false, authRequired: true },
    { path: '/marty-ai', title: 'MARTY AI', isPublic: false, featureFlag: 'v6' },
    { path: '/marty-365', title: 'MARTY 365', isPublic: false, featureFlag: 'v6' },
    { path: '/method', title: 'The Method', isPublic: true },
  ],
  assets: {
    audio: 'public/Assets/hover-sound.mp3',
    visuals: [
      'public/Assets/Particles.svg',
      'public/Assets/waveform-bg.svg',
    ],
  },
  env: process.env.NODE_ENV,
  notes: 'Expanded site configuration for routing, assets, feature flags, and access control.',
}

export default siteConfig
