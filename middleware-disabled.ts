import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log(`[MIDDLEWARE DISABLED] Path attempted: ${req.nextUrl.pathname}`);
  return NextResponse.next(); // Allow all requests
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'], // Match all pages, skip Next internals
};