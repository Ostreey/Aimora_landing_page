'use client';

import { useEffect } from 'react';

interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    specs: string[];
    benefits: string[];
}

interface FeatureModalProps {
    feature: Feature | null;
    isOpen: boolean;
    onClose: () => void;
}

export function FeatureModal({ feature, isOpen, onClose }: FeatureModalProps) {
    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !feature) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                style={{
                    animation: isOpen ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out'
                }}
            />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl transform transition-all duration-300 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                style={{
                    animation: isOpen ? 'slideUp 0.3s ease-out' : 'slideDown 0.3s ease-out'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 group"
                >
                    <svg
                        className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="flex items-center gap-6 p-6 border-b border-gray-700">
                    <div className="flex-shrink-0">
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-16 h-16 sm:w-20 sm:h-20"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
                            {feature.title}
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Detailed Description */}
                    <section>
                        <h3 className="text-xl font-semibold text-white mb-4">Szczegóły</h3>
                        <p className="text-gray-300 leading-relaxed text-base">
                            {feature.detailedDescription}
                        </p>
                    </section>

                    {/* Specifications */}
                    <section>
                        <h3 className="text-xl font-semibold text-white mb-4">Specyfikacja</h3>
                        <div className="grid gap-3">
                            {feature.specs.map((spec, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                                >
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-200 text-sm sm:text-base">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Benefits */}
                    <section>
                        <h3 className="text-xl font-semibold text-white mb-4">Korzyści</h3>
                        <div className="grid gap-3">
                            {feature.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 bg-orange-900/20 rounded-lg border border-orange-700/30"
                                >
                                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-200 text-sm sm:text-base">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(100px) scale(0.9);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                @keyframes slideDown {
                    from { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                    to { 
                        opacity: 0;
                        transform: translateY(100px) scale(0.9);
                    }
                }
            `}</style>
        </div>
    );
} 