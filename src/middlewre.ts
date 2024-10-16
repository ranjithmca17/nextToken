// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
// //   return NextResponse.redirect(new URL('/home', request.url))
// const path=request.nextUrl.pathname

// const isPublicPath=path=='/login' || path=='/signup'

// const token=request.cookies.get('token')?.value||''

// if(isPublicPath && token){
//   return NextResponse.redirect(new URL('/',request.nextUrl))
// }
// if(!isPublicPath && !token){
//   return NextResponse.redirect(new URL('/login',request.nextUrl))
// }
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     '/',
//     '/profile',
//     '/login',
//     '/signup',
//   ]
// }


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths
  const isPublicPath = path === '/login' || path === '/signup';

  // Get token from cookies
  const token = request.cookies.get('token')?.value || '';

  // If the user is trying to access a private path without a token, redirect to login
  if ((path === '/' || path === '/profile') && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // If the user is on a public path but already has a token, redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
}

// Define the paths the middleware should apply to
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
  ],
};
