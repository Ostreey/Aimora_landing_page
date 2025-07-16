'use client';

import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useState } from 'react';

interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    specs: string[];
    benefits: string[];
}

interface SwipeableFeaturesProps {
    features: Feature[];
    onFeatureClick: (feature: Feature) => void;
}

export function SwipeableFeatures({ features, onFeatureClick }: SwipeableFeaturesProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // Spring animation for the cards container
    const [{ x }, api] = useSpring(() => ({ x: 0 }));

    // Drag gesture handler
    const bind = useDrag(
        ({ active, movement: [mx], direction: [xDir], distance, cancel, velocity }) => {
            setIsDragging(active);

            // If dragging more than threshold, trigger swipe
            if (active && Math.abs(mx) > 50) {
                const newIndex = Math.max(
                    0,
                    Math.min(features.length - 1, currentIndex + (xDir > 0 ? -1 : 1))
                );

                if (newIndex !== currentIndex) {
                    setCurrentIndex(newIndex);
                    cancel();
                }
            }

            // Animate the container
            api.start({
                x: active ? mx : -currentIndex * 100,
                immediate: false,
                config: { tension: 300, friction: 30 }
            });
        },
        {
            axis: 'x',
            bounds: { left: -(features.length - 1) * 100, right: 0 },
            rubberband: true
        }
    );

    // Handle dot navigation
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        api.start({
            x: -index * 100,
            config: { tension: 300, friction: 30 }
        });
    };

    return (
        <div className="block md:hidden w-full">
            {/* Swipeable container */}
            <div className="relative w-full overflow-hidden">
                <animated.div
                    {...bind()}
                    className="flex transition-opacity duration-200"
                    style={{
                        x: x.to(x => `${x}%`),
                        width: `${features.length * 100}%`,
                        cursor: isDragging ? 'grabbing' : 'grab',
                        opacity: isDragging ? 0.9 : 1
                    }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="w-full px-4"
                            style={{ width: `${100 / features.length}%` }}
                        >
                            <SwipeableFeatureCard
                                feature={feature}
                                onClick={() => onFeatureClick(feature)}
                                isActive={index === currentIndex}
                            />
                        </div>
                    ))}
                </animated.div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {features.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-orange-400 w-6'
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Swipe hint */}
            <div className="text-center mt-4">
                <p className="text-xs text-white/50">
                    👈 Przesuń palcem, aby zobaczyć więcej
                </p>
            </div>
        </div>
    );
}

function SwipeableFeatureCard({
    feature,
    onClick,
    isActive
}: {
    feature: Feature;
    onClick: () => void;
    isActive: boolean;
}) {
    return (
        <div
            className={`relative flex flex-col justify-center transition-all duration-300 ease-out cursor-pointer group w-full mx-auto ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
            style={{ height: '170px' }}
            onClick={onClick}
        >
            {/* Card background rectangle with touch feedback */}
            <div
                className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out ${isActive ? 'shadow-[0_0_20px_rgba(0,200,255,0.2)]' : ''
                    }`}
                style={{
                    background: 'rgba(0,0,0,0.4)',
                    border: `1px solid ${isActive ? 'rgba(0,200,255,0.4)' : 'rgba(255,255,255,0.26)'}`,
                    borderRadius: '8px',
                    zIndex: 0,
                }}
            />

            {/* Card content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-4">
                <div className="flex flex-col">
                    {/* Icon */}
                    <div className="flex items-center ml-4 mb-1">
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            width={40}
                            height={40}
                            className={`w-8 h-8 transition-all duration-300 ease-out ${isActive ? 'brightness-110 scale-110' : ''
                                }`}
                        />
                    </div>
                    {/* Title */}
                    <div className="ml-4 mb-1">
                        <h3
                            className={`transition-colors duration-300 ease-out text-base ${isActive ? 'text-cyan-400' : 'text-cyan-400/70'
                                }`}
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: 18,
                                lineHeight: '1.2em',
                                marginBottom: 0,
                                marginTop: 0,
                            }}
                        >
                            {feature.title}
                        </h3>
                    </div>
                    {/* Description */}
                    <div className="ml-4 pr-4">
                        <p
                            className={`transition-colors duration-300 ease-out text-sm ${isActive ? 'text-white' : 'text-white/80'
                                }`}
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 14,
                                lineHeight: '1.47em',
                                marginTop: 0,
                                marginBottom: 4,
                                whiteSpace: 'pre-line',
                            }}
                        >
                            {feature.description}
                        </p>
                        <p className={`text-xs transition-opacity duration-300 ${isActive ? 'text-orange-400/80 opacity-100' : 'text-orange-400/60 opacity-0'
                            }`}>
                            Dotknij aby dowiedzieć się więcej
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 