'use client';

import { Download, Smartphone } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { useState } from 'react';

interface DownloadButtonProps {
    apkUrl: string;
    fileName: string;
    version?: string;
    size?: string;
    className?: string;
    locale?: Locale;
}

export function DownloadButton({
    apkUrl,
    fileName,
    version,
    size,
    className = '',
    locale = 'pl'
}: DownloadButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            const response = await fetch(apkUrl);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            alert(locale === 'en' ? 'Download failed. Please try again.' : 'Pobieranie nie powiodło się. Spróbuj ponownie.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className={`group ${className}`}>
            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="relative w-full sm:w-auto bg-gradient-to-r from-[#017da0] to-cyan-400 hover:from-[#015a73] hover:to-cyan-500 text-white font-barlow font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                <div className="flex items-center justify-center space-x-3">
                    {isDownloading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <Download className="w-6 h-6" />
                    )}
                    <span>
                        {isDownloading
                            ? (locale === 'en' ? 'Downloading...' : 'Pobieranie...')
                            : (locale === 'en' ? 'Download the app' : 'Pobierz aplikację')}
                    </span>
                    <Smartphone className="w-5 h-5" />
                </div>
            </button>

            {(version || size) && (
                <div className="mt-3 text-center">
                    {version && (
                        <p className="text-white/70 font-inter text-sm">
                            {locale === 'en' ? 'Version' : 'Wersja'}: {version}
                        </p>
                    )}
                    {size && (
                        <p className="text-white/70 font-inter text-sm">
                            {locale === 'en' ? 'Size' : 'Rozmiar'}: {size}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
