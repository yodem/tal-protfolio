import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/config';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(he|en)/:path*']
};
