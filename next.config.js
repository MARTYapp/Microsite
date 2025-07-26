/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: ["http://127.0.0.1:3000"],
  },
  // output: 'export', ← 🔥 DO NOT USE this with middleware
};

module.exports = nextConfig;