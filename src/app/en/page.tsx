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
    description: 'Revolutionary smart hit detector system for shooting training. Transform any steel target into an interactive game.',
    alternates: {
        canonical: '/en',
        languages: {
            'pl': '/',
            'en': '/en',
        },
    },
};

export default function EnglishHome() {
    return (
        <main className="min-h-screen">
            <section id="home">
                <HeroLocalized locale="en" />
            </section>
            <section id="aimora-w-akcji">
                <VideoSectionLocalized locale="en" />
            </section>
            <section id="testy-na-strzelnicy">
                <ClientTestVideoSectionLocalized locale="en" />
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
