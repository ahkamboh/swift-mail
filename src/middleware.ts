import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { parse } from 'cookie';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const signInUrl = new URL('/login', req.url);

  // Check if the user is accessing the promote page with guest=true
  const isGuestAccess = req.nextUrl.searchParams.get('guest') === 'true';

  // Parse cookies
  const cookies = parse(req.headers.get('cookie') || '');

  // Check for guestEmail in cookies
  const guestEmail = cookies.guestEmail;

  // Allow access to /promote if authenticated or guest access is valid and email is provided
  if (req.nextUrl.pathname.startsWith('/promote')) {
    if (token || (isGuestAccess && guestEmail)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInUrl);
  }

  // Redirect unauthenticated users to sign-in page for protected routes
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/promote/:path*', '/dashboard/:path*'],
};
