'use client';

import { Play, Settings, Trophy } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { DownloadButton } from './DownloadButton';

export function MobileAppSection({ locale = 'pl' }: { locale?: Locale }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('mobile-app-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="mobile-app-section" className="relative w-full py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#017da0] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                        {locale === 'en' ? 'Mobile app' : 'Aplikacja mobilna'}
                    </h2>
                    <p className="text-white/80 font-inter text-xl max-w-3xl mx-auto mb-8">
                        {locale === 'en'
                            ? 'An intuitive interface for full control of your shooting training'
                            : 'Intuicyjny interfejs dla pełnej kontroli nad treningiem strzeleckim'}
                    </p>
                    <div className="w-32 h-1 bg-[#017da0] mx-auto rounded-full"></div>
                </div>

                {/* Mobile App Showcase */}
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:shadow-[0_0_40px_rgba(1,125,160,0.2)] transition-all duration-500">
                        <div className="grid lg:grid-cols-5 gap-12 items-center">
                            {/* Left - Enhanced Phone Mockup */}
                            <div className="lg:col-span-2 relative">
                                {/* Floating background effects */}
                                <div className="absolute -inset-8 bg-gradient-to-r from-[#017da0]/10 to-cyan-400/5 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                                <div className="absolute -inset-4 bg-[#017da0]/5 rounded-2xl blur-xl"></div>

                                {/* Phone container with 3D effect */}
                                <div className="relative transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#017da0]/20 to-transparent rounded-3xl blur-lg transform translate-x-2 translate-y-2"></div>

                                    <div className="relative">
                                        <img
                                            src="/images/duel_game_screen.png"
                                            alt="Aimora Android App - Game Interface"
                                            className="w-full h-auto max-w-80 mx-auto drop-shadow-2xl transform hover:-translate-y-2 transition-all duration-700"
                                            style={{
                                                filter: 'drop-shadow(0 25px 50px rgba(1, 125, 160, 0.3))'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right - Enhanced App Features */}
                            <div className="lg:col-span-3 space-y-8">
                                <div className="mb-8">
                                    <h4 className="text-white font-barlow font-bold text-2xl mb-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                        {locale === 'en' ? 'User experience' : 'Doświadczenie użytkownika'}
                                    </h4>
                                    <p className="text-white/80 font-inter text-lg leading-relaxed">
                                        {locale === 'en'
                                            ? 'Designed for maximum comfort during training — from fast target pairing to precise performance analysis.'
                                            : 'Zaprojektowana z myślą o maksymalnej wygodzie podczas treningu -\n                                        od szybkiego połączenia z celami po precyzyjną analizę wyników'}
                                    </p>
                                </div>

                                <div className="grid gap-6">
                                    <div className="flex items-start space-x-4 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-[#017da0]/50 transition-all duration-300">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#017da0] to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                                            <Play className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-white font-barlow font-bold text-lg mb-1">
                                                {locale === 'en' ? 'Varied training modes' : 'Różnorodne tryby treningowe'}
                                            </h5>
                                            <p className="text-white/70 font-inter text-sm leading-relaxed">
                                                {locale === 'en'
                                                    ? 'Time trials, Gunslinger, Duel, Shoot-off and more — there’s something for everyone. A dynamic timer and progress visualization keep you pushing for better results.'
                                                    : 'Gra na czas, Rewolwerowiec, Pojedynek, Shoo-off i wiele innych - każdy znajdzie coś dla siebie.\n                                                Dynamiczny licznik i wizualizacja postępów motywują do lepszych wyników'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-[#017da0]/50 transition-all duration-300">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#017da0] to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                                            <Settings className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-white font-barlow font-bold text-lg mb-1">
                                                {locale === 'en' ? 'Target management' : 'Zarządzanie celami'}
                                            </h5>
                                            <p className="text-white/70 font-inter text-sm leading-relaxed">
                                                {locale === 'en'
                                                    ? 'Keep every detail under control. Check each sensor’s battery, adjust LED brightness and name devices your way — “Sniper”, “Window” or “Target Alpha”.'
                                                    : 'Każdy szczegół pod kontrolą. Sprawdzaj stan baterii każdego czujnika, reguluj intensywność świecenia diod,\n                                                nazywaj urządzenia według własnych preferencji - &quot;Snajper&quot;, &quot;Okno&quot; czy &quot;Tarcza Alpha&quot;'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-[#017da0]/50 transition-all duration-300">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#017da0] to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                                            <Trophy className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-white font-barlow font-bold text-lg mb-1">
                                                {locale === 'en' ? 'Analysis and progress' : 'Analiza i postęp'}
                                            </h5>
                                            <p className="text-white/70 font-inter text-sm leading-relaxed">
                                                {locale === 'en'
                                                    ? 'Detailed session stats, training history and performance comparisons. Track your progress and set new goals.'
                                                    : 'Szczegółowe statystyki sesji, historia treningów i porównanie wyników.\n                                                Śledź swój rozwój i wyznaczaj nowe cele treningowe'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Download Section */}
                <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                    <div className="text-center">
                        <h3 className="text-white font-barlow font-bold text-2xl mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                            {locale === 'en' ? 'Download the Aimora app' : 'Pobierz aplikację Aimora'}
                        </h3>

                        <div className="flex justify-center">
                            <DownloadButton
                                apkUrl={`/apk/app-release.apk?v=${new Date().getTime()}`}
                                fileName="app-release.apk"
                                version="1.3"
                                className="max-w-sm"
                                locale={locale}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 