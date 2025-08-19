// scripts/preflight-check.js

const { execSync } = require('child_process')

console.log('🚀 Running MARTY Preflight Checklist...\n')

const steps = [
  { label: '1. Checking for broken imports + missing files (build)', cmd: 'npm run build' },
  { label: '2. Running ESLint for code issues', cmd: 'npm run lint' },
  { label: '3. Scanning /public/Assets/ for ghost assets', cmd: 'ls -al public/Assets/' },
  { label: '4. Running optimization CLI (marty-optimize)', cmd: 'npm run optimize' },
]

steps.forEach(({ label, cmd }) => {
  console.log(`🔍 ${label}`)
  try {
    execSync(cmd, { stdio: 'inherit' })
    console.log('✅ Passed\n')
  } catch (err) {
    console.error(`❌ Failed: ${label}`)
    process.exit(1)
  }
})

console.log('✅ Preflight Complete — Lock and load. You’re cleared to launch, Commander.\n')