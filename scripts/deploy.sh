#!/bin/bash

### 🚀 deploy.sh — The Official MARTY Auto-Deploy Script
# One command to merge, build, commit, and trigger Netlify cleanly.

set -e  # Exit on first error

### 1. Setup
BRANCH="main"
DEPLOY_TAG="v$(date +%Y.%m.%d)-cinematic"

### 2. Prep: Clean build
rm -rf .next node_modules package-lock.json
npm install
npm run build

### 3. Optional: Tag environment version (for footer, toasts, etc)
echo "NEXT_PUBLIC_DEPLOY_TAG=$DEPLOY_TAG" > .env.production

### 4. Commit empty change to trigger Netlify
git checkout $BRANCH
git pull origin $BRANCH
git commit --allow-empty -m "🚨 Force deploy: $DEPLOY_TAG"
git push origin $BRANCH

### 5. Final Output
echo "\n✅ Deploy triggered: https://themartyapp.com"
echo "🔖 Build tag: $DEPLOY_TAG"
echo "🕒 Check Netlify in 60–90 seconds to verify live changes"

echo "---\n💬 Want to auto-ping Slack, Discord, or iMessage when live? I can add that too."

### 6. Done