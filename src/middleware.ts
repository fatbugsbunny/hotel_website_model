import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en-US"];
const defaultLocale = "en-US";
const LOCALE_COOKIE = "LOCALE";

function getLocale(request: NextRequest) {
	const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
	if (cookieLocale && locales.includes(cookieLocale)) return { locale: cookieLocale, isCookie: true };

	const headers = { "accept-language": request.headers.get("accept-language") }
	const languages = new Negotiator({ headers }).languages();

	const locale = match(languages, locales, defaultLocale);

	return { locale: locale, isCookie: false };
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

	if (pathnameHasLocale) return;

	const { locale, isCookie } = getLocale(request);

	request.nextUrl.pathname = `/${locale}${pathname}`;

	const res = NextResponse.redirect(request.nextUrl);

	if (!isCookie) {
		res.cookies.set(LOCALE_COOKIE, locale, {
			path: "/",
			maxAge: 60 * 60 * 24 * 365,
		});
	}

	return res;
}

export const config = {
	matcher:     [
        {
            source: '/((?!_next/|api|.*\\..*).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};
