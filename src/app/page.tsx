import { FeatureSection } from '@/components/FeatureSection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ProductDescriptionSection } from '@/components/ProductDescriptionSection';
import { VideoSection } from '@/components/VideoSection';
import { WhatIsItSection } from '@/components/WhatIsItSection';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <ProductDescriptionSection />
            <WhatIsItSection />
            <VideoSection />
            <FeatureSection />
            <Footer />
        </main>
    )
} 