import { CTA } from '@/components/CTA';
import { ClientCompetitionVideoSection } from '@/components/ClientCompetitionVideoSection';
import { ClientTestVideoSection } from '@/components/ClientTestVideoSection';
import { FeatureSection } from '@/components/FeatureSection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MobileAppSection } from '@/components/MobileAppSection';
import { ProductDescriptionSection } from '@/components/ProductDescriptionSection';
import { Roadmap } from '@/components/Roadmap';
import { VideoSection } from '@/components/VideoSection';
import { WhatIsItSection } from '@/components/WhatIsItSection';

const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Aimora — Interaktywny Detektor Trafień',
    description: 'Bezprzewodowy detektor trafień z aplikacją mobilną na Androida. Zamienia stalowe cele w interaktywną grę strzelecką z trybami gry, analizą wyników i komunikacją Bluetooth.',
    image: ['https://aimora.pl/images/Hero_image.png', 'https://aimora.pl/images/what_is_it.png'],
    brand: { '@type': 'Brand', name: 'Aimora' },
    offers: {
        '@type': 'Offer',
        price: '350',
        priceCurrency: 'PLN',
        availability: 'https://schema.org/InStock',
        url: 'https://aimora.pl',
    },
}

export default function Home() {
    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
            />
            <section id="home">
                <Hero />
            </section>
            <section id="testy-na-strzelnicy">
                <ClientTestVideoSection />
            </section>
            <section id="nonce-zawody">
                <ClientCompetitionVideoSection />
            </section>
            <section id="aimora-w-akcji">
                <VideoSection />
            </section>
            <section id="jak-to-dziala">
                <WhatIsItSection />
            </section>
            <section id="co-to-jest">
                <ProductDescriptionSection />
            </section>
            <section id="kluczowe-funkcje">
                <FeatureSection />
            </section>
            <section id="aplikacja-mobilna">
                <MobileAppSection />
            </section>
            <section id="mapa-rozwoju">
                <Roadmap />
            </section>
            <section id="cta">
                <CTA />
            </section>
            <Footer />
        </main>
    )
} 