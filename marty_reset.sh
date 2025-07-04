#!/bin/bash

# Ensure we're in a Git repo
if [ ! -d .git ]; then
  echo "❌ Not a git repo. Abort."
  exit 1
fi

echo "🔁 Cleaning up old Next.js files..."
git rm -r pages .DS_Store .rerender.txt next.config.js package.json package-lock.json 2>/dev/null
rm -rf node_modules

echo "📁 Setting up single-file MVP structure..."
mkdir -p public
mv -f ~/Downloads/MARTY_MVP_Retry_FINAL.html public/index.html

echo "📝 Writing README.md..."
echo -e "# MARTY\n\nSingle-file MVP prototype. Built with HTML/CSS/JS. Deployed via Vercel." > README.md

echo "📦 Committing changes..."
git add .
git commit -m "Replace Next.js with single-file HTML MVP"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done. Your repo is now a single-file HTML MVP."
