'use client';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'white' | 'cyan' | 'orange';
    className?: string;
}

export function LoadingSpinner({ size = 'md', color = 'white', className = '' }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    };

    const colorClasses = {
        white: 'border-white/20 border-t-white',
        cyan: 'border-cyan-400/20 border-t-cyan-400',
        orange: 'border-orange-400/20 border-t-orange-400'
    };

    return (
        <div className={`inline-block ${className}`}>
            <div
                className={`
                    ${sizeClasses[size]} 
                    ${colorClasses[color]}
                    border-2 border-solid rounded-full animate-spin
                `}
                style={{
                    animation: 'spin 1s linear infinite'
                }}
            />
        </div>
    );
}

// Loading button component that combines spinner with text
interface LoadingButtonProps {
    children: React.ReactNode;
    loading?: boolean;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    loadingText?: string;
}

export function LoadingButton({
    children,
    loading = false,
    onClick,
    className = '',
    disabled = false,
    loadingText = 'Ładowanie...'
}: LoadingButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`relative ${className} ${loading || disabled ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
            {loading ? (
                <div className="flex items-center justify-center gap-2">
                    <LoadingSpinner size="sm" color="white" />
                    {loadingText}
                </div>
            ) : (
                children
            )}
        </button>
    );
} 