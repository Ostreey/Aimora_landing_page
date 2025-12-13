'use client';

import type { Locale } from '@/lib/i18n';
import Image from 'next/image';

export function WhatIsItSection({ locale = 'pl' }: { locale?: Locale }) {
    return (
        <section className="relative flex justify-center items-start min-h-[400px] sm:min-h-[600px] md:min-h-[1180px] bg-black -mt-2 sm:-mt-4 md:-mt-0">
            <div className="absolute inset-0 w-full h-full bg-black z-0" />
            {/* Desktop image */}
            <Image
                src="/images/What_is_it.png"
                alt={locale === 'en' ? 'How it works' : 'Jak to działa?'}
                width={1440}
                height={1026}
                className="z-10 hidden md:block"
                priority
            />
            {/* Mobile image */}
            <Image
                src="/images/what_is_it_mobile.png"
                alt={locale === 'en' ? 'How it works' : 'Jak to działa?'}
                width={1355}
                height={1024}
                className="z-10 block md:hidden"
                priority
            />

            <div
                className="absolute left-0 top-0 w-full h-8 sm:h-12 md:h-24 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)"
                }}
            />
            {/* Bottom fade overlay */}
            <div
                className="absolute left-0 bottom-0 w-full h-16 sm:h-24 md:h-48 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
                }}
            />
            {/* Extra overlay for even more strength (z-20) */}
            <div
                className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-48 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
                }}
            />
        </section>
    );
} 