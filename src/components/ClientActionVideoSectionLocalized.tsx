'use client';

import { trackYouTubeVideoFinished, trackYouTubeVideoProgress, trackYouTubeVideoStarted, trackYouTubeVideoStopped } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import { useYouTubeAPI } from '@/lib/useYouTubeAPI';
import { useEffect, useState } from 'react';

interface ClientActionVideoSectionLocalizedProps {
    locale: Locale;
}

export function ClientActionVideoSectionLocalized({ locale }: ClientActionVideoSectionLocalizedProps) {
    const t = getTranslations(locale);
    const [isPlaying, setIsPlaying] = useState(false);
    const [player, setPlayer] = useState<any>(null);
    const isAPIReady = useYouTubeAPI();
    const [hasStartedTracking, setHasStartedTracking] = useState(false);
    const [progressMilestones, setProgressMilestones] = useState<Set<number>>(new Set());

    const videoId = 'eM-OTjLmqP4';
    const videoTitle = 'Turn Steel Targets into Interactive Games — See Aimora in Action';

    useEffect(() => {
        if (isAPIReady && isPlaying && !player) {
            const newPlayer = new window.YT.Player('youtube-player-action', {
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
        <section className="bg-black pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-20 w-64 h-64 bg-[#017da0] rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#017da0] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 sm:mb-6">
                        {t.videoSection.title} <span className="text-[#017da0]">{t.videoSection.titleHighlight}</span> {t.videoSection.titleEnd}
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
                                    src="/images/video_thumb_action.jpg"
                                    alt={t.videoSection.playVideo}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* Play button overlay */}
                                <button
                                    className="absolute inset-0 flex items-center justify-center group"
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
                            </div>
                        ) : (
                            <div
                                id="youtube-player-action"
                                className="w-full h-full rounded-xl"
                                style={{ minHeight: '100%' }}
                            ></div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
