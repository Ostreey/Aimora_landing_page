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

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Link
                href={getAlternateUrl('pl')}
                className={`px-3 py-1.5 text-lg transition-all duration-200 rounded flex items-center justify-center ${
                    currentLocale === 'pl'
                        ? 'bg-[#00B2E3]/20 border-2 border-[#00B2E3]'
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/10 hover:border-white/20'
                }`}
                title="Polski"
            >
                🇵🇱
            </Link>
            <Link
                href={getAlternateUrl('en')}
                className={`px-3 py-1.5 text-lg transition-all duration-200 rounded flex items-center justify-center ${
                    currentLocale === 'en'
                        ? 'bg-[#00B2E3]/20 border-2 border-[#00B2E3]'
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/10 hover:border-white/20'
                }`}
                title="English"
            >
                🇬🇧
            </Link>
        </div>
    );
}
