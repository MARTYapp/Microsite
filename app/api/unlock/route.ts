import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  const form = await req.formData()
  const input = String(form.get('password') || '')
  const pass = process.env.SITE_PASS || 'MBA2120'
  if (input !== pass) return new NextResponse('Forbidden', { status: 403 })
  const res = new NextResponse('OK', { status: 200 })
  res.headers.append('Set-Cookie', `marty_auth=${pass}; Path=/; Max-Age=${7*24*3600}; HttpOnly; Secure; SameSite=Lax`)
  return res
}
