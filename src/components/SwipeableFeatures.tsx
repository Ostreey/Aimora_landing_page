'use client';

import { trackSwipeInteraction } from '@/lib/firebase';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useEffect, useRef, useState } from 'react';

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
    const containerRef = useRef<HTMLDivElement>(null);

    // Spring animation for the cards container
    const [{ x }, api] = useSpring(() => ({ x: 0 }));

    // Calculate the percentage to move for each card
    const cardWidthPercent = 100 / features.length;

    // Update position when currentIndex changes
    useEffect(() => {
        api.start({
            x: -currentIndex * cardWidthPercent,
            config: { tension: 300, friction: 30 }
        });
    }, [currentIndex, cardWidthPercent, api]);

    // Drag gesture handler
    const bind = useDrag(
        ({ active, movement: [mx], direction: [xDir], cancel, last }) => {
            setIsDragging(active);

            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            const threshold = containerWidth * 0.15; // 15% of container width

            // When drag ends, check if we should swipe to next/prev
            if (last && Math.abs(mx) > threshold) {
                const newIndex = Math.max(
                    0,
                    Math.min(features.length - 1, currentIndex + (xDir > 0 ? -1 : 1))
                );
                
                // Track swipe interaction
                const direction = xDir > 0 ? 'left' : 'right';
                const currentFeature = features[currentIndex];
                trackSwipeInteraction(direction, currentFeature.id, currentFeature.title);
                
                setCurrentIndex(newIndex);
                return;
            }

            // During drag, show visual feedback
            if (active) {
                const dragPercent = (mx / containerWidth) * cardWidthPercent;
                const targetX = (-currentIndex * cardWidthPercent) + dragPercent;
                
                api.start({
                    x: targetX,
                    immediate: true,
                });
            } else {
                // Snap back to current position when drag ends without threshold
                api.start({
                    x: -currentIndex * cardWidthPercent,
                    config: { tension: 300, friction: 30 }
                });
            }
        },
        {
            axis: 'x',
            rubberband: true,
            pointer: { touch: true }
        }
    );

    // Handle dot navigation
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="block md:hidden w-full">
            {/* Swipeable container */}
            <div ref={containerRef} className="relative w-full overflow-hidden">
                <animated.div
                    {...bind()}
                    className="flex"
                    style={{
                        transform: x.to(x => `translateX(${x}%)`),
                        width: `${features.length * 100}%`,
                        cursor: isDragging ? 'grabbing' : 'grab',
                        opacity: isDragging ? 0.9 : 1,
                        touchAction: 'pan-x'
                    }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="flex-shrink-0 px-4"
                            style={{ width: `${cardWidthPercent}%` }}
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

            {/* Enhanced border glow when active */}
            <div
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-out pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    background: 'linear-gradient(135deg, rgba(0,200,255,0.1) 0%, rgba(0,200,255,0.05) 100%)',
                    border: '1px solid rgba(0,200,255,0.4)',
                    borderRadius: '8px',
                    zIndex: 1,
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
                            className={`w-8 h-8 transition-all duration-300 ease-out ${isActive ? 'scale-110 brightness-110' : ''
                                }`}
                        />
                    </div>
                    {/* Title */}
                    <div className="ml-4 mb-1">
                        <h3
                            className={`transition-colors duration-300 ease-out text-base ${isActive ? 'text-[rgba(0,200,255,0.8)]' : 'text-[rgba(0,200,255,0.65)]'
                                }`}
                            style={{
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
                    <div className="ml-4 pr-4">
                        <p
                            className={`transition-colors duration-300 ease-out text-sm ${isActive ? 'text-gray-100' : 'text-white'
                                }`}
                            style={{
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
                        <p className={`text-xs text-orange-400/80 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
                            }`}>
                            Kliknij aby dowiedzieć się więcej
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 