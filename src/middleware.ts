import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const signInUrl = new URL('/login', req.url);
  const promoteUrl = new URL('/promote', req.url);

  const isGuestAccess = req.nextUrl.searchParams.get('guest') === 'true';
  const guestEmail = req.cookies.get('guestEmail');

  if (req.nextUrl.pathname.startsWith('/promote')) {
    if (token || (isGuestAccess && guestEmail)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInUrl);
  }

  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/promote/:path*', '/dashboard/:path*'],
};
