'use client';

import { trackVideoFinished, trackVideoStarted } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import { useCallback, useEffect, useRef, useState } from 'react';

interface VideoSectionLocalizedProps {
    locale: Locale;
}

export function VideoSectionLocalized({ locale }: VideoSectionLocalizedProps) {
    const t = getTranslations(locale);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hasTrackedVideoStart, setHasTrackedVideoStart] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handlePlay = () => {
        setIsPlaying(true);
        if (!hasTrackedVideoStart) {
            trackVideoStarted();
            setHasTrackedVideoStart(true);
        }
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Error playing video:', error);
            });
        }
    };

    const handleVideoEnded = () => {
        trackVideoFinished();
    };

    const handleVideoLoad = () => {
        setIsLoaded(true);
        setIsLoading(false);
    };

    const handleCanPlay = () => {
        setIsLoaded(true);
        setIsLoading(false);
    };

    const handleLoadedMetadata = () => {
        setIsLoaded(true);
        setIsLoading(false);
    };

    const handleProgress = useCallback(() => {
        if (videoRef.current && videoRef.current.buffered.length > 0) {
            const buffered = videoRef.current.buffered;
            const duration = videoRef.current.duration;
            const loaded = buffered.end(buffered.length - 1);
            const progress = (loaded / duration) * 100;
            setLoadProgress(Math.min(progress, 100));
        }
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isLoaded) {
                console.log('Video loading timeout - forcing loaded state');
                setIsLoaded(true);
                setIsLoading(false);
            }
        }, 8000);

        return () => clearTimeout(timeout);
    }, [isLoaded]);

    return (
        <section ref={sectionRef} className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 md:mb-16 lg:mb-32">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-20 w-64 h-64 bg-[#017da0] rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#017da0] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 sm:mb-6">
                        {t.videoSection.title} <span className="text-[#017da0]">{t.videoSection.titleHighlight}</span> {t.videoSection.titleEnd}
                    </h2>
                    <div className="w-32 h-1 bg-[#017da0] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
                </div>

                <div className="relative">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                        {isLoading && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-gray-900"
                                style={{
                                    backgroundImage: 'url(/images/video_preview.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className="text-center max-w-md mx-auto px-4 relative z-10">
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 border-4 border-[#017da0]/20 border-t-[#017da0] rounded-full animate-spin mx-auto"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-8 h-8 bg-[#017da0] rounded-full animate-pulse"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-white/80 font-inter text-lg font-medium">
                                            {t.videoSection.preparingVideo}
                                        </p>
                                        <p className="text-white/60 font-inter text-sm">
                                            {t.videoSection.loadingMessage}
                                        </p>
                                    </div>

                                    {loadProgress > 0 && (
                                        <div className="mt-6">
                                            <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                                                <div
                                                    className="bg-[#017da0] h-2 rounded-full transition-all duration-300 ease-out"
                                                    style={{ width: `${loadProgress}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-white/50 font-inter text-xs">
                                                {Math.round(loadProgress)}% {t.videoSection.loaded}
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-6 p-4 bg-white/5 rounded-lg">
                                        <p className="text-white/50 font-inter text-xs">
                                            {t.videoSection.tip}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {isVisible && (
                            <video
                                ref={videoRef}
                                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                                controls={isPlaying}
                                preload="metadata"
                                poster="/images/video_preview.jpg"
                                onLoadedData={handleVideoLoad}
                                onCanPlay={handleCanPlay}
                                onLoadedMetadata={handleLoadedMetadata}
                                onProgress={handleProgress}
                                onPlay={handlePlay}
                                onError={(e) => {
                                    console.error('Video loading error:', e);
                                    setIsLoaded(true);
                                    setIsLoading(false);
                                }}
                                onEnded={handleVideoEnded}
                            >
                                <source src="/videos/vid.mp4" type="video/mp4" />
                                {t.videoSection.videoNotSupported}
                            </video>
                        )}

                        {!isPlaying && isLoaded && (
                            <button
                                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-all duration-300 group"
                                onClick={handlePlay}
                                aria-label={t.videoSection.playVideo}
                            >
                                <div className="w-20 h-20 bg-[#017da0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg
                                        className="w-8 h-8 text-white ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
