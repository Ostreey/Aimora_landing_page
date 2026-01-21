'use client';

import { Locale } from '@/lib/translations';

interface DownloadButtonLocalizedProps {
    locale: Locale;
    playStoreUrl: string;
    className?: string;
}

export function DownloadButtonLocalized({
    locale,
    playStoreUrl,
    className = ''
}: DownloadButtonLocalizedProps) {
    const getBadgeUrl = () => {
        const langMap: Record<Locale, string> = {
            pl: 'pl',
            en: 'en'
        };
        const lang = langMap[locale] || 'en';
        return `https://play.google.com/intl/en_us/badges/static/images/badges/${lang}_badge_web_generic.png`;
    };

    const handleClick = () => {
        window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={`group ${className}`}>
            <button
                onClick={handleClick}
                className="relative transform hover:scale-105 transition-all duration-300 focus:outline-none"
                aria-label="Download from Google Play Store"
            >
                <img
                    src={getBadgeUrl()}
                    alt="Download from Google Play"
                    className="h-14 sm:h-16 md:h-20 w-auto"
                />
            </button>
        </div>
    );
}
