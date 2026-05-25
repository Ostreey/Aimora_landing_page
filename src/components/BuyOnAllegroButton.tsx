'use client';

import { trackAllegroClick } from '@/lib/firebase';

const ALLEGRO_URL = 'https://allegro.pl/oferta/aimora-system-detektorow-trafien-w-tarcze-strzeleckie-interaktywny-cel-18580862411';

interface BuyOnAllegroButtonProps {
    label: string;
    trackingId: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeClasses = {
    sm: 'text-sm px-6 py-3 gap-2',
    md: 'text-base px-8 py-3.5 gap-2.5',
    lg: 'text-xl px-10 py-4 gap-3',
};

const wordmarkSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
};

export function BuyOnAllegroButton({
    label,
    trackingId,
    size = 'lg',
    className = '',
}: BuyOnAllegroButtonProps) {
    return (
        <a
            href={ALLEGRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAllegroClick(trackingId)}
            className={`group relative inline-flex items-center justify-center font-semibold text-white rounded-full bg-[#FF5A00] hover:bg-[#e65100] shadow-[0_8px_24px_rgba(255,90,0,0.35)] hover:shadow-[0_12px_32px_rgba(255,90,0,0.5)] hover:-translate-y-0.5 transition-all duration-200 ${sizeClasses[size]} ${className}`}
            aria-label={`${label} (otwiera Allegro w nowej karcie)`}
        >
            <span className="font-medium">{label}</span>
            <span
                className={`font-black lowercase tracking-tighter leading-none text-white ${wordmarkSizes[size]}`}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                aria-hidden="true"
            >
                allegro
            </span>
        </a>
    );
}
