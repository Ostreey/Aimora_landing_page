import { FeatureSection } from '@/components/FeatureSection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ProductDescriptionSection } from '@/components/ProductDescriptionSection';
import { WhatIsItSection } from '@/components/WhatIsItSection';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <ProductDescriptionSection />
            <WhatIsItSection />
            <FeatureSection />
            <Footer />
        </main>
    )
} 