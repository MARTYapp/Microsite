/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // required if using <Image> with static export
  },
  experimental: {
    appDir: true, // enables App Router (dynamic SSR/ISR supported)
  },
}

module.exports = nextConfig