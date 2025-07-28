/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for `npx next export`
  reactStrictMode: true,
  images: {
    unoptimized: true, // required if using <Image> with static export
  },
}

module.exports = nextConfig