import { NextResponse } from 'next/server';

export function middleware(request) {
  const hasVisited = request.cookies.get('hasVisited');
  
  if (!hasVisited && request.nextUrl.pathname === '/') {
    const response = NextResponse.next();
    response.cookies.set('hasVisited', 'true', { maxAge: 86400 });
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};