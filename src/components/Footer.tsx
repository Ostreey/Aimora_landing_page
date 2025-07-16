'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const footerLinks = {
    product: [
        { name: 'Inteligentne baterie', href: '#' },
        { name: 'Stacje ładowania', href: '#' },
        { name: 'Aplikacje mobilne', href: '#' },
        { name: 'Dostęp do API', href: '#' }
    ],
    company: [
        { name: 'O nas', href: '#' },
        { name: 'Kariera', href: '#' },
        { name: 'Prasa', href: '#' },
        { name: 'Partnerzy', href: '#' }
    ],
    support: [
        { name: 'Centrum pomocy', href: '#' },
        { name: 'Kontakt z obsługą', href: '#' },
        { name: 'Dokumentacja', href: '#' },
        { name: 'Status usługi', href: '#' }
    ],
    legal: [
        { name: 'Polityka prywatności', href: '#' },
        { name: 'Warunki użytkowania', href: '#' },
        { name: 'Polityka plików cookie', href: '#' },
        { name: 'RODO', href: '#' }
    ]
}

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
]

const contactInfo = [
    { icon: Mail, text: 'wsparcie@shootai.com' },
    { icon: Phone, text: '+48 (555) 123-4567' },
    { icon: MapPin, text: 'ul. Bateryjna 123, Warszawa, 00-001' }
]

export function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">ShootAI</h3>
                        <p className="annotation-note mb-6">
                            Rewolucjonizujemy technologię baterii dla zrównoważonej przyszłości.
                            Inteligentne, wydajne i niezawodne rozwiązania energetyczne.
                        </p>

                        <div className="space-y-3">
                            {contactInfo.map((contact, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <contact.icon className="w-4 h-4 text-[#00B2E3]" />
                                    <span className="annotation-note">
                                        {contact.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="annotation-label mb-4">
                            Produkt
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={link.href}
                                        className="annotation-note hover:text-[#00B2E3] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="annotation-label mb-4">
                            Firma
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={link.href}
                                        className="annotation-note hover:text-[#00B2E3] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="annotation-label mb-4">
                            Wsparcie
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={link.href}
                                        className="annotation-note hover:text-[#00B2E3] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="annotation-note">
                            © 2024 ShootAI. Wszystkie prawa zastrzeżone.
                        </p>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="w-8 h-8 bg-white/10 hover:bg-[#00B2E3] rounded-full flex items-center justify-center transition-colors"
                                >
                                    <social.icon className="w-4 h-4 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
} 