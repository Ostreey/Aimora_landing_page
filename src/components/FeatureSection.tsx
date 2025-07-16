'use client';

import { trackFeatureClick, trackModalClose } from '@/lib/firebase';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FeatureModal } from './FeatureModal';
import { SwipeableFeatures } from './SwipeableFeatures';

interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    specs: string[];
    benefits: string[];
}

const features: Feature[] = [
    {
        id: 'battery',
        icon: '/icons/sun-protection.svg',
        title: 'Akumulator',
        description: 'Wbudowany akumulator zapewnia do 5 godzin pracy. Ładowanie przez port USB-C jest szybkie i wygodne',
        detailedDescription: 'Zaawansowany akumulator litowo-jonowy o pojemności 3000mAh zapewnia nieprzerwane działanie urządzenia przez cały trening. System szybkiego ładowania przez port USB-C pozwala na pełne naładowanie w zaledwie 90 minut.',
        specs: [
            'Pojemność: 3000mAh',
            'Czas pracy: do 5 godzin',
            'Czas ładowania: 90 minut',
            'Złącze: USB-C'
        ],
        benefits: [
            'Całodzienne treningi bez przerw',
            'Szybkie ładowanie między sesjami',
            'Uniwersalne złącze USB-C',
            'Inteligentne zarządzanie energią'
        ]
    },
    {
        id: 'polyurethane',
        icon: '/icons/sun-protection.svg',
        title: 'Obudowa z poliuretanu',
        description: 'Trwała, elastyczna obudowa z poliuretanu chroni diody przed uderzeniami.',
        detailedDescription: 'Wysokiej jakości termoplastyczny poliuretan (TPU) zapewnia doskonałą ochronę przed uderzeniami, wilgocią i kurzem. Elastyczna konstrukcja idealnie dopasowuje się do kształtu, zachowując pełną funkcjonalność.',
        specs: [
            'Materiał: TPU (Termoplastyczny Poliuretan)',
            'Odporność: IP65',
            'Temperatura pracy: -20°C do +60°C',
            'Elastyczność: 300% rozciągnięcia'
        ],
        benefits: [
            'Ochrona przed uderzeniami i upadkami',
            'Wodoodporność i pyłoszczelność',
            'Długotrwała żywotność',
            'Ergonomiczny kształt'
        ]
    },
    {
        id: 'mobile-app',
        icon: '/icons/smartphone.svg',
        title: 'Aplikacja mobilna',
        description: 'Steruj treningiem, analizuj wyniki w czasie rzeczywistym, dostosuj jasność diod. Pełna kontrola',
        detailedDescription: 'Intuicyjna aplikacja mobilna oferuje komplętną kontrolę nad urządzeniem. Monitoruj statystyki w czasie rzeczywistym, personalizuj ustawienia treningowe i śledź swój postęp dzięki zaawansowanej analityce.',
        specs: [
            'Platforma: iOS & Android',
            'Połączenie: Bluetooth 5.0',
            'Zasięg: do 30 metrów',
            'Aktualizacje: automatyczne'
        ],
        benefits: [
            'Pełna kontrola nad urządzeniem',
            'Analiza wyników w czasie rzeczywistym',
            'Personalizacja treningów',
            'Historia postępów'
        ]
    },
    {
        id: 'sensor-updates',
        icon: '/icons/update.svg',
        title: 'Aktualizacja czujnika',
        description: 'Bądź zawsze na bieżąco dzięki aktualizacjom, które poprawiają precyzję działania i dodają nowe funkcje.',
        detailedDescription: 'System automatycznych aktualizacji zapewnia, że Twoje urządzenie zawsze działa z najnowszym oprogramowaniem. Regularne ulepszenia algorytmów zwiększają precyzję pomiarów i dodają nowe funkcjonalności.',
        specs: [
            'Częstotliwość: co 2-4 tygodnie',
            'Typ: OTA (Over-The-Air)',
            'Rozmiar: średnio 2-5MB',
            'Czas instalacji: 3-5 minut'
        ],
        benefits: [
            'Stale rosnąca precyzja pomiarów',
            'Nowe funkcje bez kosztów',
            'Automatyczne ulepszenia',
            'Długoterminowe wsparcie'
        ]
    },
    {
        id: 'magnetic-mount',
        icon: '/icons/magnet.svg',
        title: 'Magnetyczne mocowanie',
        description: 'Błyskawiczny montaż na stalowej tarczy. Stabilność i łatwość użytkowania bez żadnych śrub ani uchwytów.',
        detailedDescription: 'Potężne magnesy neodymowe zapewniają niezawodne mocowanie do metalowych powierzchni. System szybkiego montażu pozwala na natychmiastową instalację bez dodatkowych narzędzi czy elementów mocujących.',
        specs: [
            'Typ: Magnesy neodymowe N52',
            'Siła mocowania: 15kg',
            'Temperatura: -40°C do +80°C',
            'Powierzchnia: stal, żeliwo'
        ],
        benefits: [
            'Montaż w sekundach',
            'Nie wymaga narzędzi',
            'Możliwość szybkiego przenoszenia',
            'Nie uszkadza powierzchni'
        ]
    },
];

export function FeatureSection() {
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFeatureClick = (feature: Feature) => {
        // Track feature card click (which also opens modal)
        trackFeatureClick(feature.id, feature.title);
        
        setSelectedFeature(feature);
        setIsModalOpen(true);
        
        // Note: No separate modal open tracking since clicking feature = opening modal
    };

    const handleCloseModal = () => {
        // Track modal close
        if (selectedFeature) {
            trackModalClose(selectedFeature.id);
        }
        
        setIsModalOpen(false);
        // Wait for animation to complete before clearing selectedFeature
        setTimeout(() => setSelectedFeature(null), 300);
    };

    return (
        <>
            <section className="relative w-full flex flex-col items-center py-4 sm:py-8 md:py-16 lg:py-32 bg-black overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[1024px] -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-32 shadow-2xl z-20">
                {/* Top gradient fade from black for smooth transition */}
                <div
                    className="absolute top-0 left-0 w-full h-8 sm:h-16 md:h-32 pointer-events-none z-30"
                    style={{
                        background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)"
                    }}
                />
                {/* Background image - not stretched, responsive */}
                <img
                    src="/images/Features_image.png"
                    alt="Features background"
                    className="absolute left-1/2 top-0 -translate-x-1/2 object-contain max-w-full h-auto z-0 select-none pointer-events-none hidden md:block"
                    style={{ maxHeight: '100%', width: 'auto', height: '100%' }}
                />
                <img
                    src="/images/Features_image.png"
                    alt="Features background"
                    className="w-full h-auto z-0 select-none pointer-events-none block md:hidden"
                    style={{ objectFit: 'contain' }}
                />
                {/* Bottom gradient fade to black for smooth transition to next section */}
                <div
                    className="absolute bottom-0 left-0 w-full h-8 sm:h-16 md:h-32 pointer-events-none z-30"
                    style={{
                        background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0) 100%)"
                    }}
                />

                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-4 flex flex-col items-center mt-2 sm:mt-6 md:mt-12 lg:mt-24">
                    {/* Desktop: Original two-column layout */}
                    <div className="hidden md:flex flex-col md:flex-row justify-center items-center w-full gap-8 sm:gap-12 md:gap-32">
                        {/* Left column: 3 cards stacked */}
                        <div className="flex flex-col gap-8 sm:gap-12 items-center w-full md:w-auto">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <FeatureCard feature={features[0]} onClick={() => handleFeatureClick(features[0])} />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <FeatureCard feature={features[2]} onClick={() => handleFeatureClick(features[2])} />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300">
                                <FeatureCard feature={features[4]} onClick={() => handleFeatureClick(features[4])} />
                            </div>
                        </div>
                        {/* Right column: 2 cards stacked, centered vertically */}
                        <div className="flex flex-col gap-8 sm:gap-12 items-center justify-center md:mt-24 w-full md:w-auto">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <FeatureCard feature={features[1]} onClick={() => handleFeatureClick(features[1])} />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="500">
                                <FeatureCard feature={features[3]} onClick={() => handleFeatureClick(features[3])} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile: Swipeable feature cards positioned over the background image */}
                <div className="block md:hidden absolute inset-0 z-20 flex items-center justify-center -mt-[25%]">
                    <div className="w-full px-4" data-aos="fade-up" data-aos-delay="100">
                        <SwipeableFeatures
                            features={features}
                            onFeatureClick={handleFeatureClick}
                        />
                    </div>
                </div>
            </section>

            {/* Modal */}
            <FeatureModal
                feature={selectedFeature}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}

function FeatureCard({ feature, onClick }: { feature: Feature; onClick: () => void }) {
    // Disable tilt on mobile devices
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <Tilt
            className="w-full max-w-[500px] mx-auto"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            transitionSpeed={1000}
            tiltEnable={!isMobile}
            gyroscope={false}
            glareEnable={false}
        >
            <div
                className="relative flex flex-col justify-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer group w-full"
                style={{ height: '170px' }}
                onClick={onClick}
            >
                {/* Card background rectangle with hover effects */}
                <div
                    className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out group-hover:shadow-[0_0_30px_rgba(0,200,255,0.3)]"
                    style={{
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.26)',
                        borderRadius: '8px',
                        zIndex: 0,
                    }}
                />
                {/* Enhanced border glow on hover */}
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,200,255,0.1) 0%, rgba(0,200,255,0.05) 100%)',
                        border: '1px solid rgba(0,200,255,0.4)',
                        borderRadius: '8px',
                        zIndex: 1,
                    }}
                />

                {/* Card content, vertically centered */}
                <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-0">
                    {/* Content container - centered as a group */}
                    <div className="flex flex-col">
                        {/* Icon */}
                        <div className="flex items-center ml-4 sm:ml-11 mb-1">
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                width={40}
                                height={40}
                                className="w-8 h-8 sm:w-[50px] sm:h-[50px] transition-all duration-300 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:animate-bounce-gentle"
                            />
                        </div>
                        {/* Title */}
                        <div className="ml-4 sm:ml-[47px] mb-1">
                            <h3
                                className="transition-colors duration-300 ease-out group-hover:text-[rgba(0,200,255,0.8)] text-base sm:text-xl"
                                style={{
                                    color: 'rgba(0,200,255,0.65)',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    fontSize: 20,
                                    lineHeight: '1.2em',
                                    marginBottom: 0,
                                    marginTop: 0,
                                }}
                            >
                                {feature.title}
                            </h3>
                        </div>
                        {/* Description */}
                        <div className="ml-4 sm:ml-[47px] pr-4 sm:pr-8">
                            <p
                                className="transition-colors duration-300 ease-out group-hover:text-gray-100 text-sm sm:text-[15px] max-w-full sm:max-w-[409px]"
                                style={{
                                    color: '#fff',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    fontSize: 15,
                                    lineHeight: '1.47em',
                                    marginTop: 0,
                                    marginBottom: 4,
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {feature.description}
                            </p>
                            <p className="text-xs text-orange-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Kliknij aby dowiedzieć się więcej
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
} 