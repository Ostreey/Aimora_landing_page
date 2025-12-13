'use client'
import { trackGAEvent } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

interface NavBarProps {
    locale?: Locale;
}

export function NavBar({ locale: propLocale }: NavBarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const pathname = usePathname();

    const locale: Locale = propLocale || (pathname.startsWith('/en') ? 'en' : 'pl');
    const t = getTranslations(locale);
    const basePath = locale === 'en' ? '/en' : '';
    const rentalPath = locale === 'en' ? '/en/rental' : '/wypozyczenie';
    const homePath = locale === 'en' ? '/en' : '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            const sections = ['home', 'aimora-w-akcji', 'testy-na-strzelnicy', 'jak-to-dziala', 'co-to-jest', 'kluczowe-funkcje', 'aplikacja-mobilna', 'mapa-rozwoju'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let currentSection = 'home';

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        if (sectionId === 'co-to-jest' || sectionId === 'kluczowe-funkcje') {
                            currentSection = 'jak-to-dziala';
                        } else {
                            currentSection = sectionId;
                        }
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/en/';

    const getNavButtonClass = (sectionId: string) => {
        const baseClass = "font-semibold text-lg py-2 px-2 border-b-2 transition-all duration-200 font-barlow";
        if (!isHomePage) {
            return `${baseClass} text-white/90 hover:text-[#00B2E3] border-transparent hover:border-[#00B2E3]`;
        }
        const isActive = activeSection === sectionId;
        if (isActive) {
            return `${baseClass} text-[#00B2E3] border-[#00B2E3]`;
        }
        return `${baseClass} text-white/90 hover:text-[#00B2E3] border-transparent hover:border-[#00B2E3]`;
    };

    const getSubpageNavClass = (path: string, isMobile = false) => {
        const baseClass = isMobile
            ? "text-white text-2xl font-semibold py-4 px-6 border-b-2 transition-all duration-200 font-barlow"
            : "font-semibold text-lg py-2 px-2 border-b-2 transition-all duration-200 font-barlow";

        const isActive = pathname === path;

        if (isActive) {
            return `${baseClass} text-[#00B2E3] border-[#00B2E3]`;
        }
        return `${baseClass} text-white/90 hover:text-[#00B2E3] border-transparent hover:border-[#00B2E3]`;
    };

    const handleMobileMenuClick = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}`}>
                <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                    <div className="flex items-center justify-between w-full h-20">
                        <div className="flex items-center">
                            <Link
                                href={`${homePath}#home`}
                                onClick={() => { setActiveSection('home'); scrollToSection('home'); }}
                                className={`text-xl font-bold font-barlow transition-all duration-200 ${activeSection === 'home' && isHomePage
                                    ? 'text-[#00B2E3] border-b-2 border-[#00B2E3] pb-1'
                                    : 'text-white hover:text-[#00B2E3]'
                                    }`}
                            >
                                Aimora
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            <Link href={`${homePath}#aimora-w-akcji`} onClick={() => scrollToSection('aimora-w-akcji')} className={getNavButtonClass('aimora-w-akcji')}>{t.nav.aimoraInAction}</Link>
                            <Link href={`${homePath}#testy-na-strzelnicy`} onClick={() => scrollToSection('testy-na-strzelnicy')} className={getNavButtonClass('testy-na-strzelnicy')}>{t.nav.rangeTests}</Link>
                            <Link href={`${homePath}#jak-to-dziala`} onClick={() => scrollToSection('jak-to-dziala')} className={getNavButtonClass('jak-to-dziala')}>{t.nav.howItWorks}</Link>
                            <Link href={`${homePath}#aplikacja-mobilna`} onClick={() => scrollToSection('aplikacja-mobilna')} className={getNavButtonClass('aplikacja-mobilna')}>{t.nav.mobileApp}</Link>
                            <Link href={`${homePath}#mapa-rozwoju`} onClick={() => scrollToSection('mapa-rozwoju')} className={getNavButtonClass('mapa-rozwoju')}>{t.nav.roadmap}</Link>
                            <Link href={rentalPath} className={getSubpageNavClass(rentalPath)} onClick={() => trackGAEvent('clicked_rental_page')}>
                                {t.nav.rental}
                            </Link>
                            <LanguageSwitcher currentLocale={locale} />
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`md:hidden fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`absolute top-0 right-0 w-full h-full bg-black/95 transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-4 right-4 text-white/90 hover:text-white text-4xl font-light transition-colors duration-200 w-12 h-12 flex items-center justify-center z-[10001] bg-black/20 rounded-full backdrop-blur-sm"
                        aria-label={t.nav.closeMenu}
                    >
                        ×
                    </button>

                    <div className="flex flex-col items-center justify-center h-full space-y-6 z-[10000] relative">
                        <Link href={`${homePath}#aimora-w-akcji`} onClick={handleMobileMenuClick} className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow">
                            {t.nav.aimoraInAction}
                        </Link>
                        <Link href={`${homePath}#testy-na-strzelnicy`} onClick={handleMobileMenuClick} className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow">
                            {t.nav.rangeTests}
                        </Link>
                        <Link href={`${homePath}#jak-to-dziala`} onClick={handleMobileMenuClick} className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow">
                            {t.nav.howItWorks}
                        </Link>
                        <Link href={`${homePath}#aplikacja-mobilna`} onClick={handleMobileMenuClick} className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow">
                            {t.nav.mobileApp}
                        </Link>
                        <Link href={`${homePath}#mapa-rozwoju`} onClick={handleMobileMenuClick} className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow">
                            {t.nav.roadmap}
                        </Link>
                        <Link href={rentalPath} onClick={() => { handleMobileMenuClick(); trackGAEvent('clicked_rental_page'); }} className={getSubpageNavClass(rentalPath, true)}>
                            {t.nav.rental}
                        </Link>
                        <div className="pt-4">
                            <LanguageSwitcher currentLocale={locale} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
