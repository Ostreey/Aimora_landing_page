import { AOSInit } from '@/components/AOSInit';
import { NavBar } from '@/components/NavBar';
import '@fontsource/barlow-semi-condensed/index.css';
import '@fontsource/exo-2/index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aimora.pl'),
    title: 'Aimora – Interaktywne Cele Strzeleckie z Aplikacją',
    description: 'Rewolucyjny system inteligentnych detektorów trafień do treningu strzeleckiego',
    keywords: ['strzelanie', 'trening', 'cele', 'militaria', 'technologia', 'aimora', 'ASG', 'wiatrówka', 'airsoft', 'strzelectwo', 'broń', 'cele strzeleckie', 'gong strzelecki', 'tarcze strzeleckie'],
    authors: [{ name: 'Aimora' }],
    robots: 'index, follow',
    openGraph: {
        title: 'Aimora – Interaktywne Cele Strzeleckie z aplikacją mobilną',
        description: 'Rewolucyjny system inteligentnych detektorów trafień do treningu strzeleckiego',
        type: 'website',
        images: ['/images/what_is_it_mobile.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aimora – Interaktywne Cele Strzeleckie z aplikacją mobilną',
        description: 'Rewolucyjny system inteligentnych detektorów trafień do treningu strzeleckiego',
        images: ['/images/what_is_it_mobile.png'],
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl" className="font-barlow">
            <body className="font-barlow antialiased">
                <AOSInit />
                <NavBar />
                <main>{children}</main>
            </body>
        </html>
    )
} 