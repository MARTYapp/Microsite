import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const publicKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const createClient = (request: NextRequest) => {
  let response = NextResponse.next({ request: { headers: request.headers } })
  const supabase = createServerClient(url, publicKey, {
    cookies: {
      get(name: string) { return request.cookies.get(name)?.value },
      set(name: string, value: string, options?: CookieOptions) { response.cookies.set(name, value, options) },
      remove(name: string, options?: CookieOptions) { response.cookies.set(name, '', { ...options, maxAge: 0 }) },
    },
  })
  return { supabase, response }
}
