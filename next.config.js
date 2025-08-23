const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {},
  },
  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'images.unsplash.com',
      'cdn.themartyapp.com',
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('MARTYOptimizePlugin', (compilation) => {
            const { execSync } = require('child_process');
            execSync('npm run optimize', { stdio: 'inherit' });
          });
        },
      });
    }
    return config;
  }
}

module.exports = nextConfig