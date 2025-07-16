'use client'

import Image from 'next/image'
import { RippleButton } from './RippleButton'

export function Hero() {
    return (
        <section className="relative w-full flex flex-col items-center min-h-[500px] sm:min-h-[600px] md:min-h-[768px]">
            {/* Main hero image, centered, no zoom, no blur, no overlay */}
            <Image
                src="/images/Hero_image.png"
                alt="ShootAI Hero Background"
                width={1440}
                height={1024}
                className="max-w-full h-auto"
                priority
            />
            {/* Bottom fade overlay */}
            <div
                className="absolute left-0 bottom-0 w-full h-24 sm:h-32 md:h-48 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"

                }}
            />
            {/* Overlay content: desktop only */}
            <div className="hidden md:block absolute left-[15vw] top-[32vh] max-w-[550px] z-10">
                <h1 className="text-white font-barlow font-black text-[60px] leading-[54px] tracking-[0.01em] mb-8 drop-shadow-lg font-[900]">
                    Wprowadź strzelanie w nową erę
                </h1>
                <p className="font-exo2 font-normal text-[36px] leading-[47px] tracking-[0.0002em] text-white/80 mb-10 max-w-2xl">
                    Przekształć dowolny stalowy cel w interaktywną grę i osobistego trenera strzeleckiego
                </p>
                <RippleButton
                    className="font-inter font-bold text-[24px] leading-[36px] tracking-[-0.02em] uppercase bg-orange-500 hover:bg-orange-600 text-white px-[3.9rem] py-4 rounded-full shadow-2xl transition-all duration-200 w-fit"
                    onClick={() => console.log('Zamów clicked')}
                >
                    ZAMÓW
                </RippleButton>
            </div>
            {/* Mobile content: below image */}
            <div className="block md:hidden w-full px-4 -mt-12 pb-1 text-center relative z-30">
                <h1 className="text-white font-barlow font-black text-3xl leading-tight tracking-[0.01em] mb-3 drop-shadow-lg font-[900]">
                    Wprowadź strzelanie w nową erę
                </h1>
                <p className="font-exo2 font-normal text-lg leading-[28px] tracking-[0.0002em] text-white/80 mb-3">
                    Przekształć dowolny stalowy cel w interaktywną grę i osobistego trenera strzeleckiego
                </p>
                <RippleButton
                    className="font-inter font-bold text-lg leading-[28px] tracking-[-0.02em] uppercase bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full shadow-2xl transition-all duration-200 w-fit mx-auto"
                    onClick={() => console.log('Zamów clicked')}
                >
                    ZAMÓW
                </RippleButton>
            </div>
        </section>
    )
} 