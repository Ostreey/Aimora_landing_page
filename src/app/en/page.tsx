import { ClientCompetitionVideoSectionLocalized } from '@/components/ClientCompetitionVideoSectionLocalized';
import { ClientTestVideoSectionLocalized } from '@/components/ClientTestVideoSectionLocalized';
import { CTALocalized } from '@/components/CTALocalized';
import { FeatureSectionLocalized } from '@/components/FeatureSectionLocalized';
import { FooterLocalized } from '@/components/FooterLocalized';
import { HeroLocalized } from '@/components/HeroLocalized';
import { MobileAppSectionLocalized } from '@/components/MobileAppSectionLocalized';
import { ProductDescriptionSectionLocalized } from '@/components/ProductDescriptionSectionLocalized';
import { RoadmapLocalized } from '@/components/RoadmapLocalized';
import { VideoSectionLocalized } from '@/components/VideoSectionLocalized';
import { WhatIsItSection } from '@/components/WhatIsItSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Aimora – Interactive Shooting Targets with Mobile App',
    description: 'Aimora — turn steel targets into interactive shooting games. Smart hit detector with mobile app, game modes and performance analytics. From 85 EUR.',
    alternates: {
        canonical: '/en',
        languages: {
            'pl': '/',
            'en': '/en',
        },
    },
};

const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Aimora — Interactive Hit Detector',
    description: 'Wireless hit detector with Android mobile app. Turn steel targets into interactive shooting games with game modes, performance analytics and Bluetooth communication.',
    image: ['https://aimora.pl/images/Hero_image.png', 'https://aimora.pl/images/what_is_it.png'],
    brand: { '@type': 'Brand', name: 'Aimora' },
    offers: {
        '@type': 'Offer',
        price: '85',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://aimora.pl/en',
    },
}

export default function EnglishHome() {
    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
            />
            <section id="home">
                <HeroLocalized locale="en" />
            </section>
            <section id="testy-na-strzelnicy">
                <ClientTestVideoSectionLocalized locale="en" />
            </section>
            <section id="nonce-zawody">
                <ClientCompetitionVideoSectionLocalized locale="en" />
            </section>
            <section id="aimora-w-akcji">
                <VideoSectionLocalized locale="en" />
            </section>
            <section id="jak-to-dziala">
                <WhatIsItSection />
            </section>
            <section id="co-to-jest">
                <ProductDescriptionSectionLocalized locale="en" />
            </section>
            <section id="kluczowe-funkcje">
                <FeatureSectionLocalized locale="en" />
            </section>
            <section id="aplikacja-mobilna">
                <MobileAppSectionLocalized locale="en" />
            </section>
            <section id="mapa-rozwoju">
                <RoadmapLocalized locale="en" />
            </section>
            <section id="cta">
                <CTALocalized locale="en" />
            </section>
            <FooterLocalized locale="en" />
        </main>
    )
}
