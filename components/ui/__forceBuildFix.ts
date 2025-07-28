// ✅ Force Netlify to include UI components in the bundle
// Prevents tree-shaking or omission in edge-deployed builds (especially SSR/ISR)

// Explicitly import essential UI modules you want preserved
import { Button } from '@/components/ui/button'
import * as ui from '@/components/ui' // ← Requires index.ts in /ui

if (process.env.NODE_ENV === 'development') {
  // Only log in dev to avoid polluting production logs
  console.log('[ForceInclude] Button:', Button.name)
  console.log('[ForceInclude] UI Components:', Object.keys(ui))
}