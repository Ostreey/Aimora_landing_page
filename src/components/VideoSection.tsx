'use client';

import { useState } from 'react';

export function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleVideoLoad = () => {
        setIsLoaded(true);
    };

    return (
        <section className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 md:mb-16 lg:mb-32">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-20 w-64 h-64 bg-[#017da0] rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#017da0] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                        Zobacz <span className="text-[#017da0]">Aimora</span> w akcji
                    </h2>
                    <div className="w-32 h-1 bg-[#017da0] mx-auto mb-8 rounded-full"></div>
                    <p className="text-white/80 font-inter text-xl leading-relaxed max-w-3xl mx-auto">


                    </p>
                </div>

                {/* Video Container */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                        {/* Loading placeholder */}
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                                <div className="text-center">
                                    <div className="w-16 h-16 border-4 border-[#017da0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                    <p className="text-white/60 font-inter">Ładowanie wideo...</p>
                                </div>
                            </div>
                        )}

                        {/* Video element */}
                        <video
                            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            controls={isPlaying}
                            preload="metadata"
                            onLoadedData={handleVideoLoad}
                            onPlay={handlePlay}
                            poster="/images/video-thumbnail.jpg" // Optional: add a thumbnail image
                        >
                            <source src="/videos/vid.mp4" type="video/mp4" />
                            <source src="/videos/vid.webm" type="video/webm" />
                            Twoja przeglądarka nie obsługuje odtwarzania wideo.
                        </video>

                        {/* Play button overlay (shows until video is playing) */}
                        {!isPlaying && isLoaded && (
                            <button
                                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-all duration-300 group"
                                onClick={handlePlay}
                                aria-label="Odtwórz wideo"
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