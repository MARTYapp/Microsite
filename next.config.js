/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // required if using <Image> with static export
  },
}

module.exports = nextConfig