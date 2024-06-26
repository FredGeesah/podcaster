import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicdRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware((auth, req) => {
  if (!isPublicdRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
