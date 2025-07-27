'use client';

import { trackCTAClick } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Target, Zap } from 'lucide-react';
import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { RippleButton } from './RippleButton';

export function CTA() {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const benefits = [
        {
            icon: Target,
            title: "Precyzja na najwyższym poziomie",
            description: "Każdy strzał jest mierzony z dokładnością do milimetra"
        },
        {
            icon: Zap,
            title: "Natychmiastowy feedback",
            description: "Otrzymuj analizę swojego treningu w czasie rzeczywistym"
        },
        {
            icon: Shield,
            title: "Jakość na lata",
            description: "Wodoodporna konstrukcja przeznaczona do intensywnego użytkowania"
        }
    ];

    return (
        <>
            <section className="relative bg-black py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[#017da0] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#017da0] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left content */}
                        <div>
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
                                className="text-xl text-white/80 mb-8 font-inter leading-relaxed"
                            >
                                Dołącz do setek strzelców, którzy już zrewolucjonizowali swój trening z Aimora.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <RippleButton
                                    className="btn-primary flex items-center justify-center gap-2 group"
                                    onClick={() => {
                                        trackCTAClick('cta_section_order_now');
                                        setIsContactFormOpen(true);
                                    }}
                                >
                                    Zamów teraz
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </RippleButton>
                                <button
                                    className="btn-secondary"
                                    onClick={() => trackCTAClick('cta_section_learn_more')}
                                >
                                    Dowiedz się więcej
                                </button>
                            </motion.div>
                        </div>

                        {/* Right content - Benefits */}
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#017da0] rounded-xl flex items-center justify-center">
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-barlow font-bold text-lg mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/70 font-inter">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#017da0]/20 text-[#017da0] px-6 py-2 rounded-full text-sm font-medium mb-4">
                            <div className="w-2 h-2 bg-[#017da0] rounded-full animate-pulse"></div>
                            Ograniczona dostępność
                        </div>
                        <p className="text-white/60 text-sm">
                            Skontaktuj się z nami już dziś i zacznij trenować na profesjonalnym poziomie
                        </p>
                    </motion.div>
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