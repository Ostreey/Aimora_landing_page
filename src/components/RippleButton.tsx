'use client';

import { useRef, useState } from 'react';

interface RippleButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
}

interface Ripple {
    id: number;
    x: number;
    y: number;
}

export function RippleButton({ children, onClick, className = '', style, disabled = false }: RippleButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;

        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newRipple: Ripple = {
            id: Date.now(),
            x,
            y,
        };

        setRipples(prev => [...prev, newRipple]);

        // Remove ripple after animation completes
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 600);

        // Call the original onClick handler
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            ref={buttonRef}
            className={`relative overflow-hidden ${className}`}
            style={style}
            onClick={createRipple}
            disabled={disabled}
        >
            {children}

            {/* Ripple effects */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute pointer-events-none animate-ripple"
                    style={{
                        left: ripple.x - 20,
                        top: ripple.y - 20,
                        width: 40,
                        height: 40,
                    }}
                />
            ))}
        </button>
    );
} 