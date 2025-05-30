import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define the paths that are public and don't require authorization
const PUBLIC_PATHS = ['/', '/verify'];

// Define the paths that require authorization
const PROTECTED_PATHS_PREFIXES = ['/chat', '/policies', '/search'];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow requests to public paths and API routes to pass through early
  if (PUBLIC_PATHS.includes(pathname) || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check if the current path is one of the protected path prefixes
  const isProtectedPath = PROTECTED_PATHS_PREFIXES.some(prefix => pathname.startsWith(prefix));

  if (isProtectedPath) {
    // The primary auth check will now happen on the client-side after redirecting to /verify.
    // The cookie can act as a secondary check or a remember-me hint if set after successful OTP verification.
    const authToken = request.cookies.get('letstransport_auth_token'); 

    if (!authToken) {
      // If no auth token cookie, redirect to the verify page
      // Preserve the original intended destination to redirect back after verification
      const verifyUrl = request.nextUrl.clone();
      verifyUrl.pathname = '/verify';
      // Add the original destination as a query parameter for redirection after login
      if (pathname !== '/') { // Avoid adding returnTo for the landing page itself if it were protected
        verifyUrl.searchParams.set('returnTo', pathname);
      }
      return NextResponse.redirect(verifyUrl);
    }
  }

  // If it's not a defined protected path (or user is authorized by cookie), allow the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any files in the public folder (e.g., images, SVGs)
     *
     * API routes are handled explicitly above now.
     * This ensures the middleware runs for page navigations.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
} 