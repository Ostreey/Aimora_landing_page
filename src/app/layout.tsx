import { AOSInit } from '@/components/AOSInit';
import { LangSetter } from '@/components/LangSetter';
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
    alternates: {
        canonical: '/',
        languages: {
            'pl': '/',
            'en': '/en',
        },
    },
    openGraph: {
        title: 'Aimora – Interaktywne Cele Strzeleckie z aplikacją mobilną',
        description: 'Rewolucyjny system inteligentnych detektorów trafień do treningu strzeleckiego',
        type: 'website',
        locale: 'pl_PL',
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
            <head>
                <link rel="alternate" hrefLang="pl" href="https://aimora.pl/" />
                <link rel="alternate" hrefLang="en" href="https://aimora.pl/en" />
                <link rel="alternate" hrefLang="x-default" href="https://aimora.pl/" />
            </head>
            <body className="font-barlow antialiased">
                <LangSetter />
                <AOSInit />
                <NavBar />
                <main>{children}</main>
            </body>
        </html>
    )
} 