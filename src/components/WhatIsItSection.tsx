'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function WhatIsItSection() {
    const [scrollY, setScrollY] = useState(0);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate parallax offset (subtle movement)
    const parallaxOffset = scrollY * 0.08;

    return (
        <section className="relative flex justify-center items-start min-h-[1180px] bg-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black z-0" />
            {/* Main image with parallax effect */}
            <div
                className="z-10 transform transition-transform duration-75 ease-out"
                style={{
                    transform: `translateY(${parallaxOffset}px)`,
                    willChange: 'transform'
                }}
            >
                <Image
                    src="/images/What_is_it.png"
                    alt="Jak to działa?"
                    width={1440}
                    height={1026}
                    priority
                />
            </div>

            <div
                className="absolute left-0 top-0 w-full h-48 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)"
                }}
            />
            {/* Bottom fade overlay */}
            <div
                className="absolute left-0 bottom-0 w-full h-48 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
                }}
            />
            {/* Extra overlay for even more strength (z-20) */}
            <div
                className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
                }}
            />
        </section>
    );
} 