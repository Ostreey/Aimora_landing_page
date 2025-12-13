'use client';

import { trackCTAClick, trackScrollToProductDescription } from '@/lib/firebase';
import type { Locale } from '@/lib/i18n';
import { ArrowRight, Clock, Crosshair, Lightbulb, Magnet, Radar, Smartphone, Target, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ContactForm } from './ContactForm';
import { RippleButton } from './RippleButton';

// Simple counter animation hook
function useCounter(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!hasStarted) return;

        let current = 0;
        const increment = end / (duration / 16); // 60fps
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

// Interactive stats component
function InteractiveStats({ locale }: { locale: Locale }) {
    const { count: accuracy, startCounter: startAccuracy } = useCounter(99);
    const { count: responseTime, startCounter: startResponse } = useCounter(50);
    const { count: batteryLife, startCounter: startBattery } = useCounter(5);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    setTimeout(() => startAccuracy(), 200);
                    setTimeout(() => startResponse(), 400);
                    setTimeout(() => startBattery(), 600);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('interactive-stats');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [isVisible, startAccuracy, startResponse, startBattery]);

    return (
        <div id="interactive-stats" className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center p-4 bg-gradient-to-br from-[#017da0]/20 to-[#017da0]/5 rounded-xl border border-[#017da0]/30 hover:border-[#017da0] transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#017da0]/20">
                <div className="w-8 h-8 mx-auto mb-2 text-[#017da0] group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300">
                    <Target className="w-full h-full" />
                </div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{accuracy}%</div>
                <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">{locale === 'en' ? 'Accuracy' : 'Dokładność'}</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-[#017da0]/20 to-[#017da0]/5 rounded-xl border border-[#017da0]/30 hover:border-[#017da0] transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#017da0]/20">
                <div className="w-8 h-8 mx-auto mb-2 text-[#017da0] group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300">
                    <Zap className="w-full h-full" />
                </div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{responseTime}ms</div>
                <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">{locale === 'en' ? 'Response time' : 'Czas reakcji'}</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-[#017da0]/20 to-[#017da0]/5 rounded-xl border border-[#017da0]/30 hover:border-[#017da0] transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#017da0]/20">
                <div className="w-8 h-8 mx-auto mb-2 text-[#017da0] group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300">
                    <Clock className="w-full h-full" />
                </div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{batteryLife}h</div>
                <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">{locale === 'en' ? 'Battery life' : 'Czas pracy'}</div>
            </div>
        </div>
    );
}

export function ProductDescriptionSection({ locale = 'pl' }: { locale?: Locale }) {
    const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);
    const [isMainContentVisible, setIsMainContentVisible] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [hasTrackedScroll, setHasTrackedScroll] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Simple entrance animation
        const timer = setTimeout(() => setIsMainContentVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Scroll tracking with delay to prevent immediate triggering
    useEffect(() => {
        // Add a delay to ensure page has fully loaded and settled
        const delayTimer = setTimeout(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasTrackedScroll) {
                        // Additional delay to ensure this is actual scrolling, not initial page load
                        setTimeout(() => {
                            if (!hasTrackedScroll) {
                                trackScrollToProductDescription();
                                setHasTrackedScroll(true);
                            }
                        }, 500);
                    }
                },
                {
                    threshold: 0.5, // Require 50% of the section to be visible
                    rootMargin: '-100px 0px' // Only trigger when section is 100px into viewport
                }
            );

            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }

            return () => observer.disconnect();
        }, 2000); // Wait 2 seconds after component mount before setting up observer

        return () => clearTimeout(delayTimer);
    }, [hasTrackedScroll]);

    const benefitCards = locale === 'en' ? [
        {
            id: 'realtime',
            icon: Radar,
            title: 'Real-time response',
            description: 'Every hit is registered instantly, with accuracy down to 10 ms.',
            delay: 0
        },
        {
            id: 'magnetic',
            icon: Magnet,
            title: 'Fast magnetic mounting',
            description: 'Attach the module to a steel plate and play — no drilling, no tools.',
            delay: 100
        },
        {
            id: 'led',
            icon: Lightbulb,
            title: 'RGB-lit active targets',
            description: 'Color LEDs enable multiple game types, including multiplayer.',
            delay: 200
        },
        {
            id: 'weapon',
            icon: Crosshair,
            title: 'Works with any platform',
            description: 'Airsoft, air rifles, firearms — no calibration, no limitations.',
            delay: 300
        },
        {
            id: 'app',
            icon: Smartphone,
            title: 'Full control in the app',
            description: 'Stats, battery status, leaderboards and game modes — all on your phone.',
            delay: 400
        }
    ] : [
        {
            id: 'realtime',
            icon: Radar,
            title: 'Reakcja w czasie rzeczywistym',
            description: 'Każde trafienie rejestrowane jest natychmiast, z dokładnością do 10 ms.',
            delay: 0
        },
        {
            id: 'magnetic',
            icon: Magnet,
            title: 'Szybki montaż magnetyczny',
            description: 'Przyłóż moduł do stalowej blachy i graj – bez wiercenia i narzędzi.',
            delay: 100
        },
        {
            id: 'led',
            icon: Lightbulb,
            title: 'Podświetlane aktywnych celów RGB ',
            description: 'Kolorowe diody umożliwia różnego typu gry w tym Multiplayer.',
            delay: 200
        },
        {
            id: 'weapon',
            icon: Crosshair,
            title: 'Działa z każdą bronią',
            description: 'ASG, wiatrówki, broń palna – bez potrzeby kalibracji, bez ograniczeń.',
            delay: 300
        },
        {
            id: 'app',
            icon: Smartphone,
            title: 'Pełna kontrola w aplikacji',
            description: 'Statystyki, stan baterii, rankingi i tryby gry – wszystko w Twoim telefonie.',
            delay: 400
        }
    ];

    return (
        <>
            <section ref={sectionRef} className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Enhanced animated background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#017da0] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header with entrance animation */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isMainContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
                            {locale === 'en'
                                ? <>Turn targets into a game.<br /><span className="text-[#017da0] hover:text-cyan-400 transition-colors duration-300">Literally.</span></>
                                : <>Zmień tarcze w grę.<br /><span className="text-[#017da0] hover:text-cyan-400 transition-colors duration-300">Dosłownie.</span></>}
                        </h2>
                        <div className="w-32 h-1 bg-[#017da0] mx-auto mb-8 rounded-full hover:w-40 transition-all duration-500"></div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                        {/* Main content with enhanced interactivity */}
                        <div className="lg:col-span-3 space-y-8">
                            <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-[0_0_40px_rgba(1,125,160,0.3)] transition-all duration-700 group cursor-pointer transform hover:scale-[1.02] ${isMainContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                                <div className="space-y-6">
                                    <p className="text-white/90 font-inter text-2xl leading-relaxed font-bold group-hover:text-white transition-colors duration-500">
                                        {locale === 'en'
                                            ? <>Aimora is a system of smart hit detectors and LED indicators that turns ordinary steel plates into <span className="text-[#017da0] font-bold group-hover:text-cyan-400 transition-colors duration-500 cursor-pointer">interactive training targets</span>.</>
                                            : <>Aimora to system inteligentnych detektorów trafień i wskaźników LED, który zamienia zwykłe stalowe tarcze w <span className="text-[#017da0] font-bold group-hover:text-cyan-400 transition-colors duration-500 cursor-pointer">interaktywne cele treningowe</span>.</>}
                                    </p>
                                    <p className="text-white/80 font-inter text-xl leading-relaxed font-bold group-hover:text-white/90 transition-colors duration-500">
                                        {locale === 'en'
                                            ? 'Our modules detect hits in real time and communicate wirelessly with a mobile app that offers multiple game modes, hit statistics, leaderboards and dynamic scenarios.'
                                            : 'Nasze moduły wykrywają trafienia w czasie rzeczywistym i bezprzewodowo komunikują się z aplikacją mobilną, która oferuje różnorodne tryby rozgrywki, statystyki trafień, rankingi i dynamiczne scenariusze.'}
                                    </p>
                                    <p className="text-white/80 font-inter text-xl leading-relaxed font-bold group-hover:text-white/90 transition-colors duration-500">
                                        {locale === 'en'
                                            ? 'RGB LED indicators with a replaceable reflector, fully protected behind the metal target, show which target to hit. The LED module stays safe even if the reflector gets shot off — reflectors are inexpensive and very easy to replace. RGB LEDs also unlock more varied games with different colors, including modes where two players compete at the same time, each with their own target color. Compatibility with airsoft, air rifles and firearms makes Aimora a great fit in any scenario — regardless of skill level.'
                                            : 'Wskaźniki LED RGB z wymiennym odblaskiem, w pełni schowane za metalową tarczą, wskazują, w który cel należy trafić. Moduł LED nie ulega uszkodzeniu nawet przy odstrzeleniu odblasku - odblaski są tanie i bardzo łatwe w wymianie. Diody RGB umożliwiają zróżnicowanie gier poprzez różne kolory oraz rozgrywki, w których dwóch graczy może grać jednocześnie, każdy z własnym kolorem celu. Kompatybilność z ASG, wiatrówkami i bronią palną sprawia, że Aimora sprawdzi się w każdej sytuacji — niezależnie od poziomu zaawansowania.'}
                                    </p>
                                    <div className="pt-4 border-t border-gray-600/30 group-hover:border-[#017da0]/70 transition-all duration-500">
                                        <p className="text-[#017da0] font-inter text-xl leading-relaxed font-bold italic group-hover:text-cyan-400 transition-colors duration-500">
                                            {locale === 'en'
                                                ? 'So training is not only effective, but genuinely engaging.'
                                                : 'Wszystko po to, by trening był nie tylko skuteczny, ale też wciągający.'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Enhanced Benefits sidebar with staggered animations */}
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
                                            // Add click feedback
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

                    {/* New CTA Section */}
                    <div className={`mt-16 text-center transition-all duration-1000 ${isMainContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-gradient-to-br from-[#017da0]/20 to-[#017da0]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#017da0]/30">
                            <h3 className="text-white font-barlow font-bold text-2xl mb-4">
                                {locale === 'en' ? 'Ready for a training revolution?' : 'Gotowy na rewolucję w treningu?'}
                            </h3>
                            <p className="text-white/80 font-inter text-lg mb-6 max-w-2xl mx-auto">
                                {locale === 'en'
                                    ? 'Turn boring practice into an exciting game full of challenges'
                                    : 'Zamień nudny trening w ekscytującą grę pełną wyzwań'}
                            </p>
                            <RippleButton
                                className="btn-primary flex items-center justify-center gap-2 group mx-auto"
                                onClick={() => {
                                    trackCTAClick('product_description_section_order');
                                    setIsContactFormOpen(true);
                                }}
                            >
                                {locale === 'en' ? 'Order Aimora' : 'Zamów Aimora'}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </RippleButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Modal */}
            <ContactForm
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
                locale={locale}
            />
        </>
    );
} 