'use client'
import { useEffect, useState } from 'react';

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleMobileMenuClick = () => {
        setMobileMenuOpen(false);
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}`}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                <div className="flex items-center justify-between w-full h-20">
                    {/* Logo/Brand - visible on all screens */}
                    <div className="flex items-center">
                        <span className="text-white text-xl font-bold font-barlow">Aimora</span>
                    </div>

                    {/* Desktop Navigation - hidden on mobile */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-white/90 hover:text-[#00B2E3] font-semibold text-lg py-2 px-2 border-b-2 border-transparent hover:border-[#00B2E3] transition-all duration-200 font-barlow">Home</a>
                        <a href="#how" className="text-white/90 hover:text-[#00B2E3] font-semibold text-lg py-2 px-2 border-b-2 border-transparent hover:border-[#00B2E3] transition-all duration-200 font-barlow">How it works</a>
                        <a href="#contact" className="text-white/90 hover:text-[#00B2E3] font-semibold text-lg py-2 px-2 border-b-2 border-transparent hover:border-[#00B2E3] transition-all duration-200 font-barlow">Contact</a>
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

            {/* Mobile Menu Overlay - visible only when menu is open */}
            <div className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`absolute top-0 right-0 w-full h-full bg-black/95 transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Mobile Menu Content */}
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <a 
                            href="#" 
                            onClick={handleMobileMenuClick}
                            className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow"
                        >
                            Home
                        </a>
                        <a 
                            href="#how" 
                            onClick={handleMobileMenuClick}
                            className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow"
                        >
                            How it works
                        </a>
                        <a 
                            href="#contact" 
                            onClick={handleMobileMenuClick}
                            className="text-white text-2xl font-semibold py-4 px-6 border-b-2 border-transparent hover:border-[#00B2E3] hover:text-[#00B2E3] transition-all duration-200 font-barlow"
                        >
                            Contact
                        </a>
                        
                        {/* Close button */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-8 text-white/70 text-sm hover:text-white transition-colors duration-200"
                        >
                            Close Menu
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
} 