'use client'
import { useEffect, useState } from 'react';

// Smooth scroll to section function
const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            // Detect active section based on scroll position
            const sections = ['home', 'aimora-w-akcji', 'jak-to-dziala', 'co-to-jest', 'kluczowe-funkcje', 'aplikacja-mobilna', 'mapa-rozwoju'];
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport

            let currentSection = 'home'; // Default to home

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    // Check if current scroll position is within this section
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        // Map sections that aren't in navigation to the appropriate nav item
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

        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleMobileMenuClick = (elementId: string) => {
        setMobileMenuOpen(false);
        scrollToSection(elementId);
    };

    // Helper function to get button classes based on active state
    const getNavButtonClass = (sectionId: string) => {
        const baseClass = "font-semibold text-lg py-2 px-2 border-b-2 transition-all duration-200 font-barlow";
        const isActive = activeSection === sectionId;

        if (isActive) {
            return `${baseClass} text-[#00B2E3] border-[#00B2E3]`;
        } else {
            return `${baseClass} text-white/90 hover:text-[#00B2E3] border-transparent hover:border-[#00B2E3]`;
        }
    };

    // Prevent body scroll when mobile menu is open
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
                        {/* Logo/Brand - clickable to go to home */}
                        <div className="flex items-center">
                            <button
                                onClick={() => { setActiveSection('home'); scrollToSection('home'); }}
                                className={`text-xl font-bold font-barlow transition-all duration-200 ${activeSection === 'home'
                                        ? 'text-[#00B2E3] border-b-2 border-[#00B2E3] pb-1'
                                        : 'text-white hover:text-[#00B2E3]'
                                    }`}
                            >
                                Aimora
                            </button>
                        </div>

                        {/* Desktop Navigation - hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-6">
                            <button onClick={() => { setActiveSection('aimora-w-akcji'); scrollToSection('aimora-w-akcji'); }} className={getNavButtonClass('aimora-w-akcji')}>Aimora w akcji</button>
                            <button onClick={() => { setActiveSection('jak-to-dziala'); scrollToSection('jak-to-dziala'); }} className={getNavButtonClass('jak-to-dziala')}>Jak to działa?</button>
                            <button onClick={() => { setActiveSection('aplikacja-mobilna'); scrollToSection('aplikacja-mobilna'); }} className={getNavButtonClass('aplikacja-mobilna')}>Aplikacja mobilna</button>
                            <button onClick={() => { setActiveSection('mapa-rozwoju'); scrollToSection('mapa-rozwoju'); }} className={getNavButtonClass('mapa-rozwoju')}>Roadmap</button>
                        </div>

                        {/* Mobile Menu Button - visible only on mobile */}
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

            {/* Mobile Menu Overlay - OUTSIDE nav element for proper z-index layering */}
            <div className={`md:hidden fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`absolute top-0 right-0 w-full h-full bg-black/95 transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Close button - X in top right */}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-4 right-4 text-white/90 hover:text-white text-4xl font-light transition-colors duration-200 w-12 h-12 flex items-center justify-center z-[10001] bg-black/20 rounded-full backdrop-blur-sm pointer-events-auto"
                        aria-label="Zamknij menu"
                        style={{ pointerEvents: 'auto' }}
                    >
                        ×
                    </button>

                    {/* Mobile Menu Content */}
                    <div className="flex flex-col items-center justify-center h-full space-y-6 z-[10000] relative">
                        <button
                            onClick={() => handleMobileMenuClick('aimora-w-akcji')}
                            className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow"
                        >
                            Aimora w akcji
                        </button>
                        <button
                            onClick={() => handleMobileMenuClick('jak-to-dziala')}
                            className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow"
                        >
                            Jak to działa?
                        </button>
                        <button
                            onClick={() => handleMobileMenuClick('aplikacja-mobilna')}
                            className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow"
                        >
                            Aplikacja mobilna
                        </button>
                        <button
                            onClick={() => handleMobileMenuClick('mapa-rozwoju')}
                            className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow"
                        >
                            Roadmap
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
} 