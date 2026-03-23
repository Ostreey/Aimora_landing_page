import { AOSInit } from '@/components/AOSInit';
import { LangSetter } from '@/components/LangSetter';
import { NavBar } from '@/components/NavBar';
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
    description: 'Aimora — zamień stalowe cele w interaktywną grę strzelecką. Detektor trafień z aplikacją mobilną, tryby gry i analiza wyników. Od 350 zł. Sprawdź!',
    keywords: ['strzelanie', 'trening', 'cele', 'militaria', 'technologia', 'aimora', 'ASG', 'wiatrówka', 'airsoft', 'strzelectwo', 'broń', 'cele strzeleckie', 'gong strzelecki', 'tarcze strzeleckie', 'interaktywne cele strzeleckie', 'detektor trafień', 'trening strzelecki z aplikacją', 'cele ASG z aplikacją', 'elektroniczne cele strzeleckie'],
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
        description: 'Aimora — zamień stalowe cele w interaktywną grę strzelecką. Detektor trafień z aplikacją mobilną, tryby gry i analiza wyników. Od 350 zł. Sprawdź!',
        type: 'website',
        locale: 'pl_PL',
        images: ['/images/what_is_it_mobile.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aimora – Interaktywne Cele Strzeleckie z aplikacją mobilną',
        description: 'Aimora — zamień stalowe cele w interaktywną grę strzelecką. Detektor trafień z aplikacją mobilną, tryby gry i analiza wyników. Od 350 zł. Sprawdź!',
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
        <html lang="pl" className={`font-barlow ${inter.variable}`}>
            <head>
                <link rel="alternate" hrefLang="pl" href="https://aimora.pl/" />
                <link rel="alternate" hrefLang="en" href="https://aimora.pl/en" />
                <link rel="alternate" hrefLang="x-default" href="https://aimora.pl/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                '@context': 'https://schema.org',
                                '@type': 'Organization',
                                name: 'Aimora',
                                url: 'https://aimora.pl',
                                logo: 'https://aimora.pl/images/what_is_it_mobile.png',
                                email: 'biuro@aimora.pl',
                                telephone: '+48 605 048 487',
                                sameAs: [
                                    'https://www.facebook.com/profile.php?id=61579315053188',
                                    'https://www.youtube.com/channel/UC2SS91L5WncZ48WJM1x72Qg',
                                ],
                            },
                            {
                                '@context': 'https://schema.org',
                                '@type': 'LocalBusiness',
                                name: 'Aimora',
                                url: 'https://aimora.pl',
                                email: 'biuro@aimora.pl',
                                telephone: '+48 605 048 487',
                                address: {
                                    '@type': 'PostalAddress',
                                    streetAddress: 'ul. Górczewska 200',
                                    postalCode: '01-460',
                                    addressLocality: 'Warszawa',
                                    addressCountry: 'PL',
                                },
                            },
                        ]),
                    }}
                />
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