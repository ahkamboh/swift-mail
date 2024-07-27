// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const signInUrl = new URL('/login', req.url);
  const promoteUrl = new URL('/promote', req.url);

  // Check if the user is accessing the promote page with guest=true
  const isGuestAccess = req.nextUrl.searchParams.get('guest') === 'true';

  // Redirect to login if user is not authenticated and trying to access /promote
  if (!token && req.nextUrl.pathname.startsWith('/promote')) {
    // Check if `guest=true` is directly in the URL without valid guest access
    if (isGuestAccess) {
      // Rewrite the URL to remove the `guest=true` parameter
      const rewriteUrl = new URL(req.url);
      rewriteUrl.searchParams.delete('guest');
      return NextResponse.redirect(rewriteUrl);
    }
    return NextResponse.redirect(signInUrl);
  }

  // Allow access to /promote if authenticated or guest access is valid
  if (token || (req.nextUrl.pathname.startsWith('/promote') && isGuestAccess)) {
    return NextResponse.next();
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
