'use client';

import { useEffect, useState } from 'react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
        youtubeAPIReadyCallbacks?: Set<() => void>;
        youtubeAPILoaded?: boolean;
    }
}

export function useYouTubeAPI() {
    const [isAPIReady, setIsAPIReady] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (window.YT && window.YT.Player) {
            setIsAPIReady(true);
            return;
        }

        if (window.youtubeAPILoaded) {
            setIsAPIReady(true);
            return;
        }

        if (!window.youtubeAPIReadyCallbacks) {
            window.youtubeAPIReadyCallbacks = new Set();
        }

        const callback = () => {
            setIsAPIReady(true);
        };

        window.youtubeAPIReadyCallbacks.add(callback);

        const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
        
        if (!existingScript) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                window.youtubeAPILoaded = true;
                window.youtubeAPIReadyCallbacks?.forEach(cb => cb());
            };
        }

        return () => {
            window.youtubeAPIReadyCallbacks?.delete(callback);
        };
    }, []);

    return isAPIReady;
}
