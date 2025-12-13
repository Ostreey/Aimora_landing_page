'use client';

import { trackCTAClick } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { ContactFormLocalized } from './ContactFormLocalized';
import { RippleButton } from './RippleButton';

interface CTALocalizedProps {
    locale: Locale;
}

export function CTALocalized({ locale }: CTALocalizedProps) {
    const t = getTranslations(locale);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    return (
        <>
            <section className="relative bg-black py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[#017da0] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#017da0] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-barlow font-black text-white mb-6"
                        >
                            {t.cta.title1} <span className="text-[#017da0]">{t.cta.titleHighlight}</span>{t.cta.title2}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl text-white/80 mb-12 font-inter leading-relaxed"
                        >
                            {t.cta.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-lg font-semibold">
                                <span>{t.cta.pricePromo}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                        >
                            <RippleButton
                                className="btn-primary flex items-center justify-center gap-2 group text-lg px-8 py-4"
                                onClick={() => {
                                    trackCTAClick('cta_section_order_now');
                                    setIsContactFormOpen(true);
                                }}
                            >
                                {t.cta.orderNow}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </RippleButton>
                            <button
                                className="btn-secondary text-lg px-8 py-4"
                                onClick={() => trackCTAClick('cta_section_learn_more')}
                            >
                                {t.cta.learnMore}
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#017da0]/20 text-[#017da0] px-6 py-2 rounded-full text-sm font-medium mb-4">
                                <Clock className="w-4 h-4" />
                                {t.cta.availableNow}
                            </div>
                            <p className="text-white/60 text-sm">
                                {t.cta.contactUs}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ContactFormLocalized
                locale={locale}
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </>
    );
}
