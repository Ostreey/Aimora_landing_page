import { AOSInit } from '@/components/AOSInit';
import { NavBar } from '@/components/NavBar';
import '@fontsource/barlow-semi-condensed/index.css';
import '@fontsource/exo-2/index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aimora.pl'),
    title: 'Aimora – Interactive Shooting Targets with Mobile App',
    description: 'Revolutionary smart hit detector system for shooting training',
    keywords: ['shooting', 'training', 'targets', 'military', 'technology', 'aimora', 'airsoft', 'air gun', 'shooting sports', 'steel targets', 'shooting gong', 'target systems'],
    authors: [{ name: 'Aimora' }],
    robots: 'index, follow',
    alternates: {
        canonical: '/en',
        languages: {
            'pl': '/',
            'en': '/en',
        },
    },
    openGraph: {
        title: 'Aimora – Interactive Shooting Targets with Mobile App',
        description: 'Revolutionary smart hit detector system for shooting training',
        type: 'website',
        locale: 'en_US',
        images: ['/images/what_is_it_mobile.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aimora – Interactive Shooting Targets with Mobile App',
        description: 'Revolutionary smart hit detector system for shooting training',
        images: ['/images/what_is_it_mobile.png'],
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function EnglishLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="font-barlow">
            <head>
                <link rel="alternate" hrefLang="pl" href="https://aimora.pl/" />
                <link rel="alternate" hrefLang="en" href="https://aimora.pl/en" />
                <link rel="alternate" hrefLang="x-default" href="https://aimora.pl/" />
            </head>
            <body className="font-barlow antialiased">
                <AOSInit />
                <NavBar locale="en" />
                <main>{children}</main>
            </body>
        </html>
    )
}
