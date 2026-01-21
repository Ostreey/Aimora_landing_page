'use client';

import { trackYouTubeVideoFinished, trackYouTubeVideoProgress, trackYouTubeVideoStarted, trackYouTubeVideoStopped } from '@/lib/firebase';
import { useYouTubeAPI } from '@/lib/useYouTubeAPI';
import { useEffect, useState } from 'react';

export function ClientTestVideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [player, setPlayer] = useState<any>(null);
    const isAPIReady = useYouTubeAPI();
    const [hasStartedTracking, setHasStartedTracking] = useState(false);
    const [progressMilestones, setProgressMilestones] = useState<Set<number>>(new Set());

    const videoId = '6n6qWvT0Uzs';
    const videoTitle = 'Testy Aimora na strzelnicy - profesjonalne testy strzeleckie';

    useEffect(() => {
        if (isAPIReady && isPlaying && !player) {
            const newPlayer = new window.YT.Player('youtube-player-test', {
                height: '100%',
                width: '100%',
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                    rel: 0,
                    modestbranding: 1,
                    controls: 1,
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                },
            });
            setPlayer(newPlayer);
        }
    }, [isAPIReady, isPlaying, player]);

    const onPlayerReady = (event: any) => {
        if (!hasStartedTracking) {
            trackYouTubeVideoStarted(videoId, videoTitle);
            setHasStartedTracking(true);
        }
    };

    const onPlayerStateChange = (event: any) => {
        const state = event.data;
        const currentTime = event.target.getCurrentTime();
        const duration = event.target.getDuration();
        const percentWatched = (currentTime / duration) * 100;

        switch (state) {
            case window.YT.PlayerState.PLAYING:
                const milestone = Math.floor(percentWatched / 25) * 25;
                if (milestone > 0 && milestone <= 75 && !progressMilestones.has(milestone)) {
                    trackYouTubeVideoProgress(videoId, currentTime, duration, percentWatched, videoTitle);
                    setProgressMilestones(prev => new Set(Array.from(prev).concat([milestone])));
                }
                break;

            case window.YT.PlayerState.PAUSED:
                trackYouTubeVideoStopped(videoId, currentTime, duration, percentWatched, videoTitle);
                break;

            case window.YT.PlayerState.ENDED:
                trackYouTubeVideoFinished(videoId, duration, videoTitle);
                break;
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 md:mb-16 lg:mb-32">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-20 w-64 h-64 bg-[#017da0] rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#017da0] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 sm:mb-6">
                        Testy na <span className="text-[#017da0]">Strzelnicy</span>
                    </h2>
                    <div className="w-32 h-1 bg-[#017da0] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
                </div>

                {/* Video Container */}
                <div className="relative">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
                        {!isPlaying ? (
                            /* YouTube Thumbnail with Play Button */
                            <div className="relative w-full h-full">
                                <img
                                    src="https://img.youtube.com/vi/6n6qWvT0Uzs/maxresdefault.jpg"
                                    alt="Testy Aimora na strzelnicy"
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* Play button overlay */}
                                <button
                                    className="absolute inset-0 flex items-center justify-center group"
                                    onClick={handlePlay}
                                    aria-label="Odtwórz wideo z testów"
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

                                {/* Video info overlay */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                id="youtube-player-test"
                                className="w-full h-full rounded-xl"
                                style={{ minHeight: '100%' }}
                            ></div>
                        )}
                    </div>

                    {/* Additional Info Below Video */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                            <div className="w-12 h-12 bg-[#017da0] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-barlow font-bold text-lg mb-2">Sprawdzony w praktyce
                            </h4>
                            <p className="text-white/70 font-inter text-sm">
                                System został juz przetestowany na profesjonalnej strzelnicy oraz zawodach strzeleckich.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                            <div className="w-12 h-12 bg-[#017da0] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-barlow font-bold text-lg mb-2">Pełna kontrola z aplikacji</h4>
                            <p className="text-white/70 font-inter text-sm">
                                Steruj celami bez odchodzenia od stanowiska. Uruchamiaj gry, sprawdzaj trafienia i konfiguruj system
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                            <div className="w-12 h-12 bg-[#017da0] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-4-6V4a4 4 0 118 0v6M3 14h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-barlow font-bold text-lg mb-2">Łatwy Montaż</h4>
                            <p className="text-white/70 font-inter text-sm">
                                Prosty proces instalacji i konfiguracji na torze strzeleckim
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
