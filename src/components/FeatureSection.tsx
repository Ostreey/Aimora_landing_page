'use client';


import { trackModalUnfold } from '@/lib/firebase';
import { Battery, ChevronDown, ChevronUp, Gamepad2, Settings, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Feature {
    id: string;
    icon: React.ComponentType<any>;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    specs: { label: string; value: string }[];
    benefits: string[];
    technicalDetails: string;
}

const features: Feature[] = [
    {
        id: 'battery',
        icon: Battery,
        title: '5 godzin nieprzerwanej pracy',
        shortDescription: 'Wbudowany akumulator Li-Ion z szybkim , uniwersalnym ładowaniem USB-C ',
        detailedDescription: 'Wbudowany akumulator litowo-jonowy o pojemności 750mAh zapewnia nieprzerwane działanie urządzenia przez cały trening. System szybkiego ładowania przez port USB-C pozwala na naładowanie do 90% w zaledwie 30 minut.',
        specs: [
            { label: 'Pojemność', value: '750mAh' },
            { label: 'Czas pracy', value: 'do 5 godzin' },
            { label: 'Czas ładowania', value: '30 min (0-90%)' },
            { label: 'Złącze', value: 'USB-C' },
            { label: 'Napięcie', value: '3.7V' },
            { label: 'Cykl życia', value: '500+ ładowań' }
        ],
        benefits: [
            'Całodzienne treningi bez przerw',
            'Szybkie ładowanie między sesjami',
            'Uniwersalne złącze USB-C',
            'Inteligentne zarządzanie energią'
        ],
        technicalDetails: 'Akumulator wykorzystuje zaawansowane algorytmy zarządzania energią, które automatycznie dostosowują pobór mocy w zależności od intensywności użytkowania. System deep sleep redukuje zużycie energii do minimum podczas bezczynności.'
    },
    {
        id: 'games-software',
        icon: Gamepad2,
        title: 'Rozbudowane gry i funkcje',
        shortDescription: 'Typy gier: single player i multiplayer, rozgrywki turniejowe typu Shoot-off, tryb turniejowy oraz czasy split trafień',
        detailedDescription: 'Aimora oferuje szeroki wybór gier zarówno dla pojedynczych graczy jak i w trybie multiplayer, gdzie dwóch graczy może grać jednocześnie. System zawiera rozgrywki turniejowe typu Shoot-off, które mogą zautomatyzować zawody strzeleckie, eliminując potrzebę ręcznego liczenia punktów i czasów.. Dodatkowo, system oferuje pomiar czasów split trafień, pozwalając na szczegółową analizę sesji strzeleckiej pomagając w ciągłym doskonaleniu umiejętności.',
        specs: [
            { label: 'Wolny trening', value: 'Single player' },
            { label: 'Czasówka', value: 'Single player' },
            { label: 'Max trafień', value: 'Single player' },
            { label: 'Pojedynek', value: 'Tryb multiplayer' },
            { label: 'Zakładnik', value: 'Single/Multiplayer' },
            { label: 'Shoot-off', value: 'Tryb turniejowy' },
            { label: 'Zombie', value: 'Single/Multiplayer' },
            { label: 'Rewolwerowiec', value: 'Single/Multiplayer' }
        ],
        benefits: [
            'Świetna zabawa zarówno w pojedynkę jak i rywalizując z innymi graczami',
            'Wsparcie dla sędziów, organizatorów zawodów oraz trenerów strzeleckich',
            'Możliwość doskonalenia umiejętności dzięki statystykom i analizie sesji',
            'Automatyczne zliczanie wyników i rankingi'
        ],
        technicalDetails: 'Oprogramowanie wykorzystuje zaawansowane algorytmy do analizy trafień i czasu reakcji. System automatycznie rejestruje każdy strzał z dokładnością do milisekundy, umożliwiając precyzyjny pomiar czasów split. Tryb turniejowy integruje się z systemem rankingowym, automatycznie generując wyniki i klasyfikacje. Rozgrywki ShootOff są w pełni zautomatyzowane, eliminując błędy ludzkie i zapewniając sprawiedliwe warunki dla wszystkich uczestników. Oprogramowanie oferuje szczegółowe statystyki, wizualizacje i raporty, które pomagają graczom w identyfikacji obszarów do poprawy.'
    },
    {
        id: 'firmware-updates',
        icon: Settings,
        title: 'Aktualizacje oprogramowania',
        shortDescription: 'Aktualizacje zarówno aplikacji mobilnej jak i oprogramowania czujnika z nowymi grami i funkcjami',
        detailedDescription: 'System automatycznych aktualizacji OTA obejmuje zarówno aplikację mobilną jak i oprogramowanie każdego czujnika. Aktualizacja czujników wykonuje się wygodnie za pomocą aplikacji mobilnej - wystarczy jedno kliknięcie. Nawet po zakupie urządzenia otrzymujesz nowe gry, tryby treningowe i funkcjonalności. Regularne ulepszenia algorytmów zwiększają precyzję pomiarów, a nowe tryby gry utrzymują świeżość treningu.',
        specs: [
            { label: 'Typ', value: 'Bezprzewodowo' },
        ],
        benefits: [
            'Nowe gry i tryby treningowe po zakupie'
        ],
        technicalDetails: 'System OTA wykorzystuje podpis cyfrowy do weryfikacji integralności aktualizacji. Implementuje mechanizm rollback w przypadku nieudanej aktualizacji, zapewniając ciągłość działania urządzenia.'
    },
    {
        id: 'ble-communication',
        icon: Wifi,
        title: 'Komunikacja bezprzewodowa BLE',
        shortDescription: 'Niezawodna komunikacja Bluetooth Low Energy z obsługą wielu celów',
        detailedDescription: 'Zaawansowana komunikacja Bluetooth Low Energy 5.0 zapewnia stabilne połączenie w czasie rzeczywistym. System obsługuje jednoczesną komunikację z wieloma celami, przesyłając dane o trafieniach z minimalnym opóźnieniem.',
        specs: [
            { label: 'Standard', value: 'Bluetooth Low Energy 5.0' },
            { label: 'Zasięg', value: 'do 60 metrów' },
            { label: 'Opóźnienie', value: '<100ms' },
            { label: 'Jednoczesne cele', value: 'do 8 urządzeń' },
            { label: 'Częstotliwość', value: '2.4 GHz' },
            { label: 'Protokół', value: 'GATT' }
        ],
        benefits: [
            'Natychmiastowe powiadomienia o trafieniach',
            'Obsługa wielu celów jednocześnie',
            'Niezawodne połączenie',
            'Niskie zużycie energii'
        ],
        technicalDetails: 'Wykorzystuje protokół GATT z dedykowanymi charakterystykami dla danych o trafieniach, stanu baterii i kontroli urządzenia. Adaptacyjne zarządzanie mocą sygnału zapewnia optymalne połączenie w różnych warunkach.'
    }
];

export function FeatureSection() {
    const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
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

        const element = document.getElementById('feature-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const toggleFeature = (featureId: string) => {
        if (expandedFeature === featureId) {
            setExpandedFeature(null);
        } else {
            setExpandedFeature(featureId);
            // Track modal unfold event
            trackModalUnfold(featureId);
        }
    };

    return (
        <section id="feature-section" className="relative w-full py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
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
                        Co wyróżnia Aimora
                    </h2>

                    <div className="w-32 h-1 bg-[#017da0] mx-auto rounded-full"></div>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        const isExpanded = expandedFeature === feature.id;

                        return (
                            <div
                                key={feature.id}
                                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Feature Header */}
                                <div
                                    className={`bg-gradient-to-r from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-xl border transition-all duration-500 cursor-pointer group hover:shadow-[0_0_30px_rgba(1,125,160,0.2)] ${isExpanded
                                        ? 'border-[#017da0] shadow-lg shadow-[#017da0]/20'
                                        : 'border-gray-700/50 hover:border-[#017da0]/50'
                                        }`}
                                    onClick={() => toggleFeature(feature.id)}
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${isExpanded
                                                    ? 'bg-[#017da0]/40 ring-2 ring-cyan-400/50 scale-110'
                                                    : 'bg-[#017da0]/20 group-hover:bg-[#017da0]/30'
                                                    }`}>
                                                    <IconComponent className={`w-7 h-7 transition-all duration-500 ${isExpanded
                                                        ? 'text-cyan-300 scale-110'
                                                        : 'text-white group-hover:text-cyan-300'
                                                        }`} />
                                                </div>
                                                <div>
                                                    <h3 className={`font-barlow font-bold text-xl transition-colors duration-300 ${isExpanded
                                                        ? 'text-[#017da0]'
                                                        : 'text-white group-hover:text-[#017da0]'
                                                        }`}>
                                                        {feature.title}
                                                    </h3>
                                                    <p className={`font-inter font-bold text-sm transition-colors duration-300 ${isExpanded
                                                        ? 'text-cyan-400'
                                                        : 'text-[#017da0] group-hover:text-cyan-400'
                                                        }`}>
                                                        {feature.shortDescription}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`transition-all duration-500 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                                                {isExpanded ? (
                                                    <ChevronUp className="w-6 h-6 text-[#017da0]" />
                                                ) : (
                                                    <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-[#017da0]" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Left Column - Description & Benefits */}
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-white font-barlow font-bold text-lg mb-3">Opis szczegółowy</h4>
                                                    <p className="text-white/80 font-inter leading-relaxed">
                                                        {feature.detailedDescription}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-white font-barlow font-bold text-lg mb-3">Korzyści</h4>
                                                    <ul className="space-y-2">
                                                        {feature.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="flex items-center space-x-3">
                                                                <div className="w-2 h-2 bg-[#017da0] rounded-full flex-shrink-0"></div>
                                                                <span className="text-white/80 font-inter text-sm">{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>


                                            </div>

                                            {/* Right Column - Specifications */}
                                            <div>
                                                <h4 className="text-white font-barlow font-bold text-lg mb-4">Specyfikacje</h4>
                                                <div className="space-y-3">
                                                    {feature.specs.map((spec, idx) => (
                                                        <div key={idx} className="flex justify-between items-center py-2 px-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                                            <span className="text-white/70 font-inter font-medium text-sm">{spec.label}</span>
                                                            <span className="text-[#017da0] font-inter font-bold text-sm">{spec.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}

