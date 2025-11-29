'use client';

import { trackScrollToRoadmap } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Target, Trophy, Users, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Roadmap() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTrackedScroll, setHasTrackedScroll] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Track scroll to roadmap event (once)
                    if (!hasTrackedScroll) {
                        trackScrollToRoadmap();
                        setHasTrackedScroll(true);
                    }
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('roadmap-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [hasTrackedScroll]);

    const roadmapItems = [
        {
            date: '07.2025',
            title: 'Pierwsza wersja',
            description: 'Podstawowa funkcjonalność systemu treningowego z mobilną aplikacją i bezprzewodowymi celami',
            icon: Target,
            status: 'completed',
            color: 'from-[#017da0] to-cyan-400'
        },
        {
            date: '11.2025',
            title: 'Nowa seria gier',
            description: 'Dodanie nowej serii gier multiplayer - Zakładnik, Pojedynek oraz popularna na zawodach rozgrywka Shoot-off',
            icon: Calendar,
            status: 'completed',
            color: 'from-blue-500 to-blue-400'
        },
        {
            date: '02.2026',
            title: 'System kont dla strzelnic',
            description: 'Dedykowane konta klientów strzelnic z zapisywaniem statystyk gier, porównywaniem osiągnięć i rankingami dla całej strzelnicy',
            icon: Users,
            status: 'current',
            color: 'from-purple-500 to-purple-400'
        },
        {
            date: '05.2026',
            title: 'Zwiekszenie zasięgu oraz liczba podłączonych detektorów',
            description: 'Zwiększenie zasięgu detektorów do 200 metrów oraz możliwość podłączenia do 100 detektorów jednocześnie',
            icon: Wifi,
            status: 'planned',
            color: 'from-green-500 to-green-400'
        },
        {
            date: '09.2026',
            title: 'Tryb turniejowy',
            description: 'Stworzenie trybu turniejowego dzięki któremu zautomatyzujesz swoje zawody strzeleckie, wszystkie statystyki i wyniki przechowasz bezpiecznie w chmurze oraz będziesz mógł konkurować z innymi organizacjami porównując swoje wyniki. Uczestnicy zawodów będą mogli śledzić na bieżąco przebieg zawodów w aplikacji na swoich telefonach',
            icon: Trophy,
            status: 'planned',
            color: 'from-yellow-500 to-yellow-400'
        },
        {
            date: '01.2027',
            title: 'Dedykowana tarcza z precyzyjną lokalizacją',
            description: 'Zaawansowana tarcza z dokładną lokalizacją trafień wyświetlaną w czasie rzeczywistym w aplikacji. Koniec z chodzeniem do celu lub instalowaniem kamer - wszystkie szczegóły widoczne natychmiast na ekranie telefonu',
            icon: MapPin,
            status: 'planned',
            color: 'from-orange-500 to-orange-400'
        }
    ];

    return (
        <section id="roadmap-section" className="relative w-full py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#017da0] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
                    >
                        Roadmap
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-white/80 font-inter text-xl max-w-3xl mx-auto mb-8"
                    >
                        Zobacz, jak system Aimora będzie się rozwijał w nadchodzących miesiącach
                    </motion.p>
                    <div className="w-32 h-1 bg-[#017da0] mx-auto rounded-full"></div>
                </div>

                {/* Roadmap Timeline */}
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
                    <div className="relative">
                        {/* Timeline line - visible on both mobile and desktop */}
                        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#017da0] via-blue-500 to-purple-500"></div>

                        {/* Timeline items */}
                        <div className="space-y-8 md:space-y-12">
                            {roadmapItems.map((item, index) => (
                                <motion.div
                                    key={item.date}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                                >
                                    {/* Timeline node - positioned differently for mobile vs desktop */}
                                    <div className={`absolute left-3.5 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-black z-10 ${item.status === 'current' ? 'bg-gradient-to-r from-orange-500 to-orange-400' : item.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-green-400' : 'bg-gradient-to-r from-[#017da0] to-cyan-400'}`}></div>

                                    {/* Content card - full width on mobile, 5/12 on desktop */}
                                    <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
                                        <div className={`p-4 md:p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:shadow-[0_0_40px_rgba(1,125,160,0.2)] transition-all duration-500 ${item.status === 'current' ? 'ring-2 ring-[#017da0]/50' : ''}`}>
                                            {/* Icon and date */}
                                            <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <span className="text-[#017da0] font-barlow font-bold text-sm uppercase tracking-wide">
                                                        {item.date}
                                                    </span>
                                                    {item.status === 'current' && (
                                                        <span className="ml-2 px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                                                            Aktualnie
                                                        </span>
                                                    )}
                                                    {item.status === 'completed' && (
                                                        <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                                            Ukończone
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Title and description */}
                                            <h4 className="text-white font-barlow font-bold text-lg md:text-xl mb-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                                                {item.title}
                                            </h4>
                                            <p className="text-white/70 font-inter text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout - only on desktop */}
                                    <div className="hidden md:block w-5/12"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 