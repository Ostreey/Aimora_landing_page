'use client';

import { trackCTAClick } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { PromoBadge } from './PromoBadge';
import { RippleButton } from './RippleButton';

export function CTA() {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    return (
        <>
            <section className="relative bg-black py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[#017da0] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#017da0] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Main CTA Content */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-barlow font-black text-white mb-6"
                        >
                            Gotowy na <span className="text-[#017da0]">następny poziom</span>?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl text-white/80 mb-12 font-inter leading-relaxed"
                        >
                            Przekształć swój trening w profesjonalne doświadczenie pełne emocji.
                        </motion.p>

                        {/* Promo strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <PromoBadge variant="onDark" text="150 zł / komplet — detektor + wskaźnik LED (limitowana pula)" />
                        </motion.div>


                        {/* CTA Buttons */}
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
                                Zamów teraz
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </RippleButton>
                            <button
                                className="btn-secondary text-lg px-8 py-4"
                                onClick={() => trackCTAClick('cta_section_learn_more')}
                            >
                                Dowiedz się więcej
                            </button>
                        </motion.div>

                        {/* Urgency/Availability Notice */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#017da0]/20 text-[#017da0] px-6 py-2 rounded-full text-sm font-medium mb-4">
                                <Clock className="w-4 h-4" />
                                Ograniczona dostępność
                            </div>
                            <p className="text-white/60 text-sm">
                                Skontaktuj się z nami już dziś i zacznij trenować na profesjonalnym poziomie
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Modal */}
            <ContactForm
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </>
    );
} 