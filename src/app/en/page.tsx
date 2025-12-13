import { CTA } from '@/components/CTA'
import { ClientTestVideoSection } from '@/components/ClientTestVideoSection'
import { FeatureSection } from '@/components/FeatureSection'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { MobileAppSection } from '@/components/MobileAppSection'
import { ProductDescriptionSection } from '@/components/ProductDescriptionSection'
import { Roadmap } from '@/components/Roadmap'
import { VideoSection } from '@/components/VideoSection'
import { WhatIsItSection } from '@/components/WhatIsItSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aimora – Interactive Shooting Targets with a Mobile App',
  description: 'A smart hit-detection system that turns steel targets into interactive training games, controlled from a mobile app.',
  keywords: [
    'shooting training',
    'interactive targets',
    'hit detector',
    'mobile app',
    'airsoft',
    'shooting range',
    'Aimora',
  ],
  openGraph: {
    title: 'Aimora – Interactive Shooting Targets with a Mobile App',
    description: 'A smart hit-detection system that turns steel targets into interactive training games, controlled from a mobile app.',
    type: 'website',
    images: ['/images/what_is_it_mobile.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aimora – Interactive Shooting Targets with a Mobile App',
    description: 'A smart hit-detection system that turns steel targets into interactive training games, controlled from a mobile app.',
    images: ['/images/what_is_it_mobile.png'],
  },
  alternates: {
    languages: {
      pl: '/',
      en: '/en',
    },
  },
}

export default function HomeEn() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero locale="en" />
      </section>
      <section id="aimora-w-akcji">
        <VideoSection locale="en" />
      </section>
      <section id="testy-na-strzelnicy">
        <ClientTestVideoSection locale="en" />
      </section>
      <section id="jak-to-dziala">
        <WhatIsItSection locale="en" />
      </section>
      <section id="co-to-jest">
        <ProductDescriptionSection locale="en" />
      </section>
      <section id="kluczowe-funkcje">
        <FeatureSection locale="en" />
      </section>
      <section id="aplikacja-mobilna">
        <MobileAppSection locale="en" />
      </section>
      <section id="mapa-rozwoju">
        <Roadmap locale="en" />
      </section>
      <section id="cta">
        <CTA locale="en" />
      </section>
      <Footer locale="en" />
    </main>
  )
}

