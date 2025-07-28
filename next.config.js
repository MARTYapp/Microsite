/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for `npx next export`
  reactStrictMode: true,
  images: {
    unoptimized: true, // required if using <Image> with static export
  },
  experimental: {
    // Optional: if you’re using App Router (Next.js 13+)
    appDir: true,
  },
}

module.exports = nextConfig