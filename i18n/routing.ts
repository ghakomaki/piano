import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'de', "ar"],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
    }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
    "en": "English",
    "de": "Deutsch",
    "ar": "العربية",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export const { Link, getPathname, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation(routing);