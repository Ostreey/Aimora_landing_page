'use client'
import { useEffect, useState } from 'react';

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}`}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                <div className="flex items-center justify-center w-full h-20">
                    <div className="flex items-center space-x-8">
                        <a href="#" className="text-white/90 hover:text-[#00B2E3] font-semibold text-lg py-2 px-2 border-b-2 border-transparent hover:border-[#00B2E3] transition-all duration-200 font-barlow">Home</a>
                        <a href="#how" className="text-white/90 hover:text-[#00B2E3] font-semibold text-lg py-2 px-2 border-b-2 border-transparent hover:border-[#00B2E3] transition-all duration-200 font-barlow">How it works</a>
                        <a href="#contact" className="text-white/90 hover:text-[#00B2E3] font-semibold text-lg py-2 px-2 border-b-2 border-transparent hover:border-[#00B2E3] transition-all duration-200 font-barlow">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 