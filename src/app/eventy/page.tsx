import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wynajem Systemu Aimora na Eventy | Atrakcje Strzeleckie',
    description: 'Szukasz wyjątkowej atrakcji na festyn, dożynki, imprezę firmową lub zawody? Wynajmij interaktywny system strzelecki Aimora i zapewnij niezapomniane wrażenia uczestnikom!',
    keywords: ['wynajem atrakcji', 'atrakcje na eventy', 'strzelnica mobilna', 'atrakcje na festyn', 'imprezy firmowe', 'organizacja imprez', 'aimora na wynajem', 'zawody strzeleckie'],
};

export default function EventyPage() {
    return (
        <main className="min-h-screen">
            <section className="pt-24 md:pt-32">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                        Aimora na Twoim Wydarzeniu
                    </h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
                        Zaskocz uczestników swojego eventu nowoczesną i bezpieczną atrakcją strzelecką. Nasz system to gwarancja świetnej zabawy dla każdego, niezależnie od wieku i doświadczenia!
                    </p>
                </div>
            </section>

            {/* Tutaj możemy dodać więcej sekcji, np. O ofercie, Galeria, Cennik, FAQ */}

            <section id="cta">
                <CTA />
            </section>
            <Footer />
        </main>
    );
}
