// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // console.log('Middleware running for:', req.nextUrl.pathname);
  
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const signInUrl = new URL('/login', req.url);
  const promoteUrl = new URL('/promote', req.url);

  // Check if the user is accessing the promote page with guest=true
  const isGuestAccess = req.nextUrl.searchParams.get('guest') === 'true';

  // console.log('Is guest access:', isGuestAccess);
  console.log('Token:', token ? 'exists' : 'does not exist');

  // Allow access to /promote if authenticated or guest access is valid
  if (req.nextUrl.pathname.startsWith('/promote')) {
    // console.log('Accessing /promote path');
    if (token || isGuestAccess) {
      // console.log('Access granted to /promote');
      return NextResponse.next();
    }
    // console.log('Redirecting to sign in page');
    return NextResponse.redirect(signInUrl);
  }

  // Redirect unauthenticated users to sign-in page for protected routes
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('Unauthenticated user trying to access dashboard');
    return NextResponse.redirect(signInUrl);
  }

  // console.log('Middleware allowing request to proceed');
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/promote/:path*', '/dashboard/:path*'],
};