import { FeatureSection } from '@/components/FeatureSection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { WhatIsItSection } from '@/components/WhatIsItSection';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <WhatIsItSection />
            <FeatureSection />
            <Footer />
        </main>
    )
} 