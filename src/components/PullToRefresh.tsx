'use client';

import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useState } from 'react';

interface PullToRefreshProps {
    children: React.ReactNode;
    onRefresh?: () => Promise<void> | void;
    threshold?: number;
    className?: string;
}

export function PullToRefresh({
    children,
    onRefresh,
    threshold = 100,
    className = ''
}: PullToRefreshProps) {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [canRefresh, setCanRefresh] = useState(false);

    // Spring animations for pull indicator
    const [{ y, opacity, rotate }, api] = useSpring(() => ({
        y: 0,
        opacity: 0,
        rotate: 0
    }));

    // Drag gesture handler
    const bind = useDrag(
        ({ active, movement: [, my], direction: [, yDir] }) => {
            // Only allow pull down when at top of page
            const isAtTop = window.scrollY <= 10;
            if (!isAtTop && !active) return;

            const pullDistance = Math.max(0, my);
            const progress = Math.min(pullDistance / threshold, 1);
            const shouldRefresh = pullDistance > threshold && yDir > 0;

            setCanRefresh(shouldRefresh);

            if (active) {
                api.start({
                    y: pullDistance * 0.5,
                    opacity: progress,
                    rotate: progress * 360,
                    immediate: true
                });
            } else {
                if (shouldRefresh && !isRefreshing && onRefresh) {
                    setIsRefreshing(true);
                    Promise.resolve(onRefresh()).finally(() => {
                        setIsRefreshing(false);
                        setCanRefresh(false);
                        api.start({
                            y: 0,
                            opacity: 0,
                            rotate: 0,
                            config: { tension: 300, friction: 30 }
                        });
                    });
                } else {
                    api.start({
                        y: 0,
                        opacity: 0,
                        rotate: 0,
                        config: { tension: 300, friction: 30 }
                    });
                }
            }
        },
        {
            axis: 'y',
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true
        }
    );

    return (
        <div className={`relative ${className}`}>
            {/* Pull indicator */}
            <animated.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                style={{
                    y: y.to(yVal => `calc(-50px + ${yVal}px)`),
                    opacity
                }}
            >
                <div className="flex flex-col items-center">
                    <animated.div
                        className={`w-8 h-8 rounded-full border-2 border-orange-400 flex items-center justify-center transition-colors duration-200 ${canRefresh ? 'bg-orange-400' : 'bg-transparent'
                            }`}
                        style={{
                            rotate: rotate.to(r => `${r}deg`)
                        }}
                    >
                        {isRefreshing ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <svg
                                className={`w-4 h-4 transition-colors duration-200 ${canRefresh ? 'text-white' : 'text-orange-400'
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        )}
                    </animated.div>
                    <p className={`text-xs mt-2 transition-colors duration-200 ${canRefresh ? 'text-orange-400' : 'text-white/50'
                        }`}>
                        {isRefreshing ? 'Odświeżanie...' : canRefresh ? 'Puść aby odświeżyć' : 'Pociągnij w dół'}
                    </p>
                </div>
            </animated.div>

            {/* Content */}
            <div {...bind()} className="touch-pan-y">
                {children}
            </div>
        </div>
    );
} 