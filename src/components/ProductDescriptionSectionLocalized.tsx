'use client';

import { trackCTAClick, trackScrollToProductDescription } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import { ArrowRight, Clock, Crosshair, Lightbulb, Magnet, Radar, Smartphone, Target, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ContactFormLocalized } from './ContactFormLocalized';
import { RippleButton } from './RippleButton';

function useCounter(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!hasStarted) return;

        let current = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            setCount(Math.floor(current));
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, hasStarted]);

    return { count, startCounter: () => setHasStarted(true) };
}

interface ProductDescriptionSectionLocalizedProps {
    locale: Locale;
}

export function ProductDescriptionSectionLocalized({ locale }: ProductDescriptionSectionLocalizedProps) {
    const t = getTranslations(locale);
    const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);
    const [isMainContentVisible, setIsMainContentVisible] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [hasTrackedScroll, setHasTrackedScroll] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsMainContentVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasTrackedScroll) {
                        setTimeout(() => {
                            if (!hasTrackedScroll) {
                                trackScrollToProductDescription();
                                setHasTrackedScroll(true);
                            }
                        }, 500);
                    }
                },
                {
                    threshold: 0.5,
                    rootMargin: '-100px 0px'
                }
            );

            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }

            return () => observer.disconnect();
        }, 2000);

        return () => clearTimeout(delayTimer);
    }, [hasTrackedScroll]);

    const benefitCards = [
        {
            id: 'realtime',
            icon: Radar,
            title: t.productDescription.benefits.realtime.title,
            description: t.productDescription.benefits.realtime.description,
            delay: 0
        },
        {
            id: 'magnetic',
            icon: Magnet,
            title: t.productDescription.benefits.magnetic.title,
            description: t.productDescription.benefits.magnetic.description,
            delay: 100
        },
        {
            id: 'led',
            icon: Lightbulb,
            title: t.productDescription.benefits.led.title,
            description: t.productDescription.benefits.led.description,
            delay: 200
        },
        {
            id: 'weapon',
            icon: Crosshair,
            title: t.productDescription.benefits.weapon.title,
            description: t.productDescription.benefits.weapon.description,
            delay: 300
        },
        {
            id: 'app',
            icon: Smartphone,
            title: t.productDescription.benefits.app.title,
            description: t.productDescription.benefits.app.description,
            delay: 400
        }
    ];

    return (
        <>
            <section ref={sectionRef} className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#017da0] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isMainContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
                            {t.productDescription.title1}<br />
                            <span className="text-[#017da0] hover:text-cyan-400 transition-colors duration-300">{t.productDescription.title2}</span>
                        </h2>
                        <div className="w-32 h-1 bg-[#017da0] mx-auto mb-8 rounded-full hover:w-40 transition-all duration-500"></div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                        <div className="lg:col-span-3 space-y-8">
                            <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-[0_0_40px_rgba(1,125,160,0.3)] transition-all duration-700 group cursor-pointer transform hover:scale-[1.02] ${isMainContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                                <div className="space-y-6">
                                    <p className="text-white/90 font-inter text-2xl leading-relaxed font-bold group-hover:text-white transition-colors duration-500">
                                        {t.productDescription.mainDesc1} <span className="text-[#017da0] font-bold group-hover:text-cyan-400 transition-colors duration-500 cursor-pointer">{t.productDescription.interactiveTargets}</span>.
                                    </p>
                                    <p className="text-white/80 font-inter text-xl leading-relaxed font-bold group-hover:text-white/90 transition-colors duration-500">
                                        {t.productDescription.mainDesc2}
                                    </p>
                                    <p className="text-white/80 font-inter text-xl leading-relaxed font-bold group-hover:text-white/90 transition-colors duration-500">
                                        {t.productDescription.mainDesc3}
                                    </p>
                                    <div className="pt-4 border-t border-gray-600/30 group-hover:border-[#017da0]/70 transition-all duration-500">
                                        <p className="text-[#017da0] font-inter text-xl leading-relaxed font-bold italic group-hover:text-cyan-400 transition-colors duration-500">
                                            {t.productDescription.effectiveAndEngaging}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-4">
                            {benefitCards.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                const isHovered = hoveredBenefit === benefit.id;

                                return (
                                    <div
                                        key={benefit.id}
                                        className={`bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-[#017da0]/20 ${isHovered
                                            ? 'border-[#017da0] ring-2 ring-[#017da0]/50 shadow-lg shadow-[#017da0]/30'
                                            : 'border-blue-500/20 hover:border-[#017da0]'
                                            } ${isMainContentVisible
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-8'
                                            }`}
                                        style={{
                                            transitionDelay: isMainContentVisible ? `${benefit.delay}ms` : '0ms'
                                        }}
                                        onMouseEnter={() => setHoveredBenefit(benefit.id)}
                                        onMouseLeave={() => setHoveredBenefit(null)}
                                        onClick={() => {
                                            setHoveredBenefit(benefit.id);
                                            setTimeout(() => setHoveredBenefit(null), 1000);
                                        }}
                                    >
                                        <div className="flex items-center space-x-4 mb-3">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-500 ${isHovered
                                                ? 'bg-[#017da0]/40 ring-2 ring-cyan-400/50 scale-110'
                                                : 'bg-[#017da0]/20 group-hover:bg-[#017da0]/30'
                                                }`}>
                                                <IconComponent className={`w-6 h-6 transition-all duration-500 ${isHovered
                                                    ? 'text-cyan-300 scale-125'
                                                    : 'text-white group-hover:text-cyan-300 group-hover:scale-110'
                                                    }`} />
                                            </div>
                                            <h3 className={`font-barlow font-bold text-xl transition-colors duration-300 ${isHovered
                                                ? 'text-[#017da0]'
                                                : 'text-white group-hover:text-[#017da0]'
                                                }`}>
                                                {benefit.title}
                                            </h3>
                                        </div>
                                        <p className={`font-inter font-bold text-sm sm:text-[15px] pl-16 transition-colors duration-300 ${isHovered
                                            ? 'text-cyan-400'
                                            : 'text-[#017da0] group-hover:text-cyan-400'
                                            }`} style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                fontSize: 15,
                                                lineHeight: '1.47em',
                                                marginTop: 0,
                                                marginBottom: 4,
                                                whiteSpace: 'pre-line',
                                            }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={`mt-16 text-center transition-all duration-1000 ${isMainContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-gradient-to-br from-[#017da0]/20 to-[#017da0]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#017da0]/30">
                            <h3 className="text-white font-barlow font-bold text-2xl mb-4">
                                {t.productDescription.readyForRevolution}
                            </h3>
                            <p className="text-white/80 font-inter text-lg mb-6 max-w-2xl mx-auto">
                                {t.productDescription.transformTraining}
                            </p>
                            <RippleButton
                                className="btn-primary flex items-center justify-center gap-2 group mx-auto"
                                onClick={() => {
                                    trackCTAClick('product_description_section_order');
                                    setIsContactFormOpen(true);
                                }}
                            >
                                {t.productDescription.orderAimora}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </RippleButton>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormLocalized
                locale={locale}
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </>
    );
}
