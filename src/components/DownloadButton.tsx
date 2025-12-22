'use client';

interface DownloadButtonProps {
    playStoreUrl: string;
    className?: string;
}

export function DownloadButton({
    playStoreUrl,
    className = ''
}: DownloadButtonProps) {
    const handleClick = () => {
        window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={`group ${className}`}>
            <button
                onClick={handleClick}
                className="relative transform hover:scale-105 transition-all duration-300 focus:outline-none"
                aria-label="Pobierz z Google Play Store"
            >
                <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png"
                    alt="Pobierz z Google Play"
                    className="h-14 sm:h-16 md:h-20 w-auto"
                />
            </button>
        </div>
    );
}
