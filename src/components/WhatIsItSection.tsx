'use client';

import Image from 'next/image';

export function WhatIsItSection() {
    return (
        <section className="relative flex justify-center items-start min-h-[400px] sm:min-h-[600px] md:min-h-[1180px] bg-black -mt-6 sm:-mt-8 md:-mt-0">
            <div className="absolute inset-0 w-full h-full bg-black z-0" />
            {/* Main image, centered, no crop */}
            <Image
                src="/images/What_is_it.png"
                alt="Jak to działa?"
                width={1440}
                height={1026}
                className="z-10"
                priority
            />

            <div
                className="absolute left-0 top-0 w-full h-16 sm:h-24 md:h-48 pointer-events-none z-20"
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