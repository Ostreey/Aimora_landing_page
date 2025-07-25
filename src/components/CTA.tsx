'use client'

import { trackCTAClick } from '@/lib/firebase'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { RippleButton } from './RippleButton'

export function CTA() {
    return (
        <section className="section-padding">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="hero-heading mb-6">
                            Gotowy na doświadczenie przyszłości?
                        </h2>
                        <p className="subheading mb-8 max-w-2xl mx-auto lg:mx-0">
                            Dołącz do tysięcy strzelców, którzy już ulepszyły swój trening dzięki inteligentnym detektorom Aimora.
                            Zacznij już dziś i zobacz jak Twoje umiejętności strzeleckie rosną z każdą sesją.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                '30-dniowa gwarancja zwrotu pieniędzy',
                                'Darmowa wysyłka na całym świecie',
                                'Wsparcie klienta 24/7',
                                '2-letnia gwarancja w zestawie'
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#00B2E3] flex-shrink-0 animate-pulse-glow" />
                                    <span className="annotation-note">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

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
                                    console.log('Zamów teraz clicked');
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
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/second_image.png"
                                alt="Aimora Technology"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Stats overlay */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-float"
                            style={{ animationDelay: '0s' }}
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-400 mb-1">10,000+</div>
                                <div className="annotation-note">Zadowolonych klientów</div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-float"
                            style={{ animationDelay: '1.5s' }}
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-400 mb-1">99.9%</div>
                                <div className="annotation-note">Czasu pracy</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 