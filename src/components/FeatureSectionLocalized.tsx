'use client';

import { trackModalUnfold } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import { Battery, ChevronDown, ChevronUp, Gamepad2, Settings, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FeatureSectionLocalizedProps {
    locale: Locale;
}

export function FeatureSectionLocalized({ locale }: FeatureSectionLocalizedProps) {
    const t = getTranslations(locale);
    const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const features = [
        {
            id: 'battery',
            icon: Battery,
            title: t.featureSection.features.battery.title,
            shortDescription: t.featureSection.features.battery.shortDescription,
            detailedDescription: t.featureSection.features.battery.detailedDescription,
            specs: Object.values(t.featureSection.features.battery.specs),
            benefits: t.featureSection.features.battery.benefits,
            technicalDetails: t.featureSection.features.battery.technicalDetails
        },
        {
            id: 'games-software',
            icon: Gamepad2,
            title: t.featureSection.features.gamesSoftware.title,
            shortDescription: t.featureSection.features.gamesSoftware.shortDescription,
            detailedDescription: t.featureSection.features.gamesSoftware.detailedDescription,
            specs: Object.values(t.featureSection.features.gamesSoftware.specs),
            benefits: t.featureSection.features.gamesSoftware.benefits,
            technicalDetails: t.featureSection.features.gamesSoftware.technicalDetails
        },
        {
            id: 'firmware-updates',
            icon: Settings,
            title: t.featureSection.features.firmwareUpdates.title,
            shortDescription: t.featureSection.features.firmwareUpdates.shortDescription,
            detailedDescription: t.featureSection.features.firmwareUpdates.detailedDescription,
            specs: Object.values(t.featureSection.features.firmwareUpdates.specs),
            benefits: t.featureSection.features.firmwareUpdates.benefits,
            technicalDetails: t.featureSection.features.firmwareUpdates.technicalDetails
        },
        {
            id: 'ble-communication',
            icon: Wifi,
            title: t.featureSection.features.bleCommunication.title,
            shortDescription: t.featureSection.features.bleCommunication.shortDescription,
            detailedDescription: t.featureSection.features.bleCommunication.detailedDescription,
            specs: Object.values(t.featureSection.features.bleCommunication.specs),
            benefits: t.featureSection.features.bleCommunication.benefits,
            technicalDetails: t.featureSection.features.bleCommunication.technicalDetails
        }
    ];

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
            trackModalUnfold(featureId);
        }
    };

    return (
        <section id="feature-section" className="relative w-full py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#017da0] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                        {t.featureSection.title}
                    </h2>
                    <div className="w-32 h-1 bg-[#017da0] mx-auto rounded-full"></div>
                </div>

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

                                <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-white font-barlow font-bold text-lg mb-3">{t.featureSection.detailedDescription}</h4>
                                                    <p className="text-white/80 font-inter leading-relaxed">
                                                        {feature.detailedDescription}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-white font-barlow font-bold text-lg mb-3">{t.featureSection.benefits}</h4>
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

                                            <div>
                                                <h4 className="text-white font-barlow font-bold text-lg mb-4">{t.featureSection.specifications}</h4>
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
