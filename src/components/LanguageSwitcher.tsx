'use client';

import { Locale } from '@/lib/translations';
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
            return pathname;
        }
    };

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <Link
                href={getAlternateUrl('pl')}
                className={`px-2 py-1 text-sm font-semibold transition-all duration-200 rounded ${
                    currentLocale === 'pl'
                        ? 'text-[#00B2E3] bg-[#00B2E3]/10'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
                PL
            </Link>
            <span className="text-white/30">|</span>
            <Link
                href={getAlternateUrl('en')}
                className={`px-2 py-1 text-sm font-semibold transition-all duration-200 rounded ${
                    currentLocale === 'en'
                        ? 'text-[#00B2E3] bg-[#00B2E3]/10'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
                EN
            </Link>
        </div>
    );
}
