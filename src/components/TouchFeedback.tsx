'use client';

import { animated, useSpring } from '@react-spring/web';
import { useRef, useState } from 'react';

interface TouchFeedbackProps {
    children: React.ReactNode;
    onTouch?: () => void;
    className?: string;
    feedbackColor?: string;
    intensity?: 'light' | 'medium' | 'strong';
}

export function TouchFeedback({
    children,
    onTouch,
    className = '',
    feedbackColor = 'rgba(255, 255, 255, 0.3)',
    intensity = 'medium'
}: TouchFeedbackProps) {
    const [isPressed, setIsPressed] = useState(false);
    const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Spring animation for press feedback
    const [{ scale, opacity }, api] = useSpring(() => ({
        scale: 1,
        opacity: 1
    }));

    const intensityConfig = {
        light: { scale: 0.98, duration: 100 },
        medium: { scale: 0.95, duration: 150 },
        strong: { scale: 0.92, duration: 200 }
    };

    const config = intensityConfig[intensity];

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsPressed(true);

        // Create ripple effect
        const container = containerRef.current;
        if (container && e.touches[0]) {
            const rect = container.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;

            const newRipple = {
                id: Date.now(),
                x,
                y
            };

            setRipples(prev => [...prev, newRipple]);

            // Remove ripple after animation
            setTimeout(() => {
                setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
            }, 600);
        }

        // Trigger vibration if available
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }

        // Scale animation
        api.start({
            scale: config.scale,
            config: { tension: 300, friction: 30 }
        });
    };

    const handleTouchEnd = () => {
        setIsPressed(false);

        // Reset scale
        api.start({
            scale: 1,
            config: { tension: 300, friction: 30 }
        });

        if (onTouch) {
            onTouch();
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        // Fallback for desktop testing
        setIsPressed(true);

        const container = containerRef.current;
        if (container) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const newRipple = {
                id: Date.now(),
                x,
                y
            };

            setRipples(prev => [...prev, newRipple]);

            setTimeout(() => {
                setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
            }, 600);
        }

        api.start({
            scale: config.scale,
            config: { tension: 300, friction: 30 }
        });
    };

    const handleMouseUp = () => {
        setIsPressed(false);
        api.start({
            scale: 1,
            config: { tension: 300, friction: 30 }
        });

        if (onTouch) {
            onTouch();
        }
    };

    return (
        <animated.div
            ref={containerRef}
            className={`relative overflow-hidden select-none ${className}`}
            style={{ scale, opacity }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {children}

            {/* Ripple effects */}
            {ripples.map((ripple) => (
                <div
                    key={ripple.id}
                    className="absolute pointer-events-none animate-ripple"
                    style={{
                        left: ripple.x - 20,
                        top: ripple.y - 20,
                        width: 40,
                        height: 40,
                        background: `radial-gradient(circle, ${feedbackColor} 0%, transparent 70%)`,
                        borderRadius: '50%',
                    }}
                />
            ))}
        </animated.div>
    );
} 