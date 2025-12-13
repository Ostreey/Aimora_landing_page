import { EventContactFormLocalized } from '@/components/EventContactFormLocalized';
import { FaqAccordionLocalized } from '@/components/FaqAccordionLocalized';
import { FooterLocalized } from '@/components/FooterLocalized';
import { getTranslations } from '@/lib/translations';
import { Metadata } from 'next';

const t = getTranslations('en');

export const metadata: Metadata = {
    title: t.rental.metaTitle,
    description: t.rental.metaDescription,
    keywords: ['attraction rental', 'event attractions', 'mobile shooting range rental', 'airsoft range rental', 'corporate event attractions', 'fair attractions', 'picnic attractions', 'team building', 'integration events', 'aimora rental'],
    alternates: {
        canonical: '/en/rental',
        languages: {
            'pl': '/wypozyczenie',
            'en': '/en/rental',
        },
    },
};

export default function RentalPage() {
    return (
        <main className="min-h-screen">
            <section className="pt-24 md:pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                        {t.rental.heroTitle}
                    </h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
                        {t.rental.heroSubtitle}
                    </p>
                    <div className="text-center">
                        <a href="#cta" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                            {t.rental.askForQuote}
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-black relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">{t.rental.forWhomTitle}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/festival.svg" alt={t.rental.festivals} className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">{t.rental.festivals}</h3>
                            <p className="text-gray-400">{t.rental.festivalsDesc}</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/corporate.svg" alt={t.rental.corporate} className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">{t.rental.corporate}</h3>
                            <p className="text-gray-400">{t.rental.corporateDesc}</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/bachelor.svg" alt={t.rental.bachelor} className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">{t.rental.bachelor}</h3>
                            <p className="text-gray-400">{t.rental.bachelorDesc}</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/competition.svg" alt={t.rental.competitions} className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">{t.rental.competitions}</h3>
                            <p className="text-gray-400">{t.rental.competitionsDesc}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t.rental.packageTitle}</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-lg">

                        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">{t.rental.equipmentTitle}</h3>
                            <ul className="space-y-3 text-gray-300">
                                {t.rental.equipment.map((item, index) => (
                                    <li key={index} className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">{t.rental.supportTitle}</h3>
                            <ul className="space-y-3 text-gray-300">
                                {t.rental.support.map((item, index) => (
                                    <li key={index} className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-black relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black"></div>
                <div className="container mx-auto px-4 relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t.rental.conditionsTitle}</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">{t.rental.spaceTitle}</h3>
                            <p className="text-gray-300">{t.rental.spaceDesc}</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">{t.rental.powerTitle}</h3>
                            <p className="text-gray-300">{t.rental.powerDesc}</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">{t.rental.capacityTitle}</h3>
                            <p className="text-gray-300">{t.rental.capacityDesc}</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-12 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">{t.rental.miniCtaTitle}</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">{t.rental.miniCtaSubtitle}</p>
                    <a href="#cta" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                        {t.rental.reserveDate}
                    </a>
                </div>
            </section>

            <section className="py-12 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t.rental.faqTitle}</h2>
                    <div className="max-w-3xl mx-auto">
                        <FaqAccordionLocalized locale="en" />
                    </div>
                </div>
            </section>

            <div id="cta">
                <EventContactFormLocalized locale="en" />
            </div>
            <FooterLocalized locale="en" />
        </main>
    );
}
