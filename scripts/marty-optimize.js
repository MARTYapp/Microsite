#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const cleanDirs = [
  '.next/cache/webpack/client-development',
  '.next/cache/webpack/client-production',
  '.next/cache/webpack/server-development',
  '.next/cache/webpack/server-production',
];

function cleanWebpackCache() {
  for (const dir of cleanDirs) {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`🧹 Removed: ${fullPath}`);
    }
  }
}

function minifyFiles(pattern) {
  glob.sync(pattern).forEach((file) => {
    const raw = fs.readFileSync(file, 'utf8');
    const min = raw.replace(/\s+/g, ' ').trim();
    fs.writeFileSync(file, min);
    console.log(`📦 Minified: ${file}`);
  });
}

async function compressImages() {
  const files = await imagemin(['public/**/*.{jpg,jpeg,png}'], {
    destination: 'public/',
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] })
    ]
  });

  files.forEach(file => console.log(`🖼️ Optimized: ${file.destinationPath}`));
}

(async () => {
  console.log('🚀 Running marty-optimize CLI...');
  cleanWebpackCache();
  minifyFiles('public/**/*.css');
  minifyFiles('public/**/*.json');
  minifyFiles('public/**/*.js');
  await compressImages();
  console.log('✅ Optimization complete!');
})();