import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PROTECTED_PATHS = ['/dashboard', '/journal', '/account']

export async function middleware(req: NextRequest) {
  const { supabase, response } = createClient(req)

  const { pathname } = req.nextUrl
  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p))

  // Skip if not protected or already on login, or for non-GET (APIs/forms)
  if (!isProtected || pathname.startsWith('/login') || req.method !== 'GET') {
    return response
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) {
      // Log if you have an error reporter; fail open to avoid hard-blocking users
      return response
    }
    if (!user) {
      const url = new URL('/login', req.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
    return response
  } catch {
    // Fail open on unexpected errors
    return response
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/journal/:path*', '/account/:path*'],
}

