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
    metadataBase: new URL('http://localhost:3000'),
    title: 'ShootAI - Smart Battery Solutions',
    description: 'Revolutionary battery technology for the modern world',
    keywords: ['battery', 'technology', 'smart', 'energy', 'innovation', 'shootai'],
    authors: [{ name: 'ShootAI' }],
    robots: 'index, follow',
    openGraph: {
        title: 'ShootAI - Smart Battery Solutions',
        description: 'Revolutionary battery technology for the modern world',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ShootAI - Smart Battery Solutions',
        description: 'Revolutionary battery technology for the modern world',
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