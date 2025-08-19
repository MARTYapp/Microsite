import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const pass = process.env.SITE_PASS || 'MBA2120'
  const cookie = req.cookies.get('marty_auth')?.value
  const url = new URL(req.url)
  const path = url.pathname

  if (
    path.startsWith('/unlock') ||
    path.startsWith('/_next') ||
    path.startsWith('/api/unlock') ||
    path.startsWith('/favicon') ||
    path.startsWith('/robots') ||
    path.startsWith('/sitemap') ||
    path.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|mp4|mov|css|js|txt)$/i)
  ) return NextResponse.next()

  if (cookie === pass) return NextResponse.next()
  return NextResponse.redirect(new URL('/unlock', req.url))
}
export const config = { matcher: '/:path*' }
