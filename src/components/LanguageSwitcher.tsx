'use client';

import { Locale } from '@/lib/translations';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
    currentLocale: Locale;
    className?: string;
}

export function LanguageSwitcher({ currentLocale, className = '' }: LanguageSwitcherProps) {
    const pathname = usePathname();

    const getAlternateUrl = (targetLocale: Locale): string => {
        if (targetLocale === 'en') {
            if (pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')) {
                return '/en';
            }
            if (pathname === '/') {
                return '/en';
            }
            if (pathname === '/wypozyczenie') {
                return '/en/rental';
            }
            if (pathname.startsWith('/#')) {
                return '/en' + pathname.substring(1);
            }
            return '/en' + pathname;
        } else {
            if (pathname === '/en' || pathname === '/en/') {
                return '/';
            }
            if (pathname === '/en/rental') {
                return '/wypozyczenie';
            }
            if (pathname.startsWith('/en/#')) {
                return '/' + pathname.substring(5);
            }
            if (pathname.startsWith('/en/')) {
                return pathname.substring(3);
            }
            if (pathname === '/' || !pathname.startsWith('/en')) {
                return pathname;
            }
            return pathname;
        }
    };

    const linkClass = (locale: Locale) =>
        `px-3 py-1 text-sm font-bold tracking-wider transition-all duration-200 rounded-full flex items-center justify-center min-w-[44px] ${
            currentLocale === locale
                ? 'bg-[#00B2E3] text-[#06131a] shadow-[0_0_12px_rgba(0,178,227,0.45)]'
                : 'text-white/60 hover:text-white hover:bg-white/10'
        }`;

    return (
        <div className={`inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 py-1 pl-2.5 pr-1 backdrop-blur-sm ${className}`}>
            <Globe className="w-4 h-4 text-[#00B2E3]/80 mr-0.5" aria-hidden="true" />
            <Link
                href={getAlternateUrl('pl')}
                className={linkClass('pl')}
                hrefLang="pl"
                title="Polski"
                aria-current={currentLocale === 'pl' ? 'true' : undefined}
            >
                PL
            </Link>
            <Link
                href={getAlternateUrl('en')}
                className={linkClass('en')}
                hrefLang="en"
                title="English"
                aria-current={currentLocale === 'en' ? 'true' : undefined}
            >
                EN
            </Link>
        </div>
    );
}
