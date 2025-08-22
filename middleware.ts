import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createClient } from './utils/supabase/middleware'
const PROTECTED_PATHS = ['/dashboard', '/journal', '/account']
export async function middleware(req: NextRequest) {
  const { supabase, response } = createClient(req)
  const { pathname } = req.nextUrl
  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p))
  if (!isProtected || pathname.startsWith('/login') || req.method !== 'GET') return response
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) return response
    if (!user) {
      const url = new URL('/login', req.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
    return response
  } catch { return response }
}
export const config = { matcher: ['/dashboard/:path*', '/journal/:path*', '/account/:path*'] }
