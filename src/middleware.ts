import { NextRequest, NextResponse } from "next/server";
import { getBrowserLanguage, getLocale, locales } from "./utils/locales";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  console.log("pn:", pathname, pathnameHasLocale)

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getBrowserLanguage(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // "/",
  ],
};
