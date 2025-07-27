import { CTA } from '@/components/CTA';
import { FeatureSection } from '@/components/FeatureSection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MobileAppSection } from '@/components/MobileAppSection';
import { ProductDescriptionSection } from '@/components/ProductDescriptionSection';
import { Roadmap } from '@/components/Roadmap';
import { VideoSection } from '@/components/VideoSection';
import { WhatIsItSection } from '@/components/WhatIsItSection';

export default function Home() {
    return (
        <main className="min-h-screen">
            <section id="home">
                <Hero />
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