
const features = [
    {
        icon: '/icons/sun-protection.svg',
        title: 'Akumulator',
        description: 'Wbudowany akumulator zapewnia do 5 godzin pracy. Ładowanie przez port USB-C jest szybkie i wygodne',
    },
    {
        icon: '/icons/sun-protection.svg',
        title: 'Obudowa z poliuretanu',
        description: 'Trwała, elastyczna obudowa z poliuretanu chroni diody przed uderzeniami.',
    },
    {
        icon: '/icons/smartphone.svg',
        title: 'Aplikacja mobilna',
        description: 'Steruj treningiem, analizuj wyniki w czasie rzeczywistym, dostosuj jasność diod. Pełna kontrola',
    },
    {
        icon: '/icons/update.svg',
        title: 'Aktualizacja czujnika',
        description: 'Bądź zawsze na bieżąco dzięki aktualizacjom, które poprawiają precyzję działania i dodają nowe funkcje.',
    },
    {
        icon: '/icons/magnet.svg',
        title: 'Magnetyczne mocowanie',
        description: 'Błyskawiczny montaż na stalowej tarczy. Stabilność i łatwość użytkowania bez żadnych śrub ani uchwytów.',
    },
];

export function FeatureSection() {
    return (
        <section className="relative w-full flex flex-col items-center py-16 sm:py-32 bg-black overflow-hidden min-h-[600px] sm:min-h-[1024px] -mt-8 sm:-mt-16 md:-mt-32 shadow-2xl z-20">
            {/* Top gradient fade from black for smooth transition */}
            <div
                className="absolute top-0 left-0 w-full h-16 sm:h-32 pointer-events-none z-30"
                style={{
                    background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)"
                }}
            />
            {/* Background image - not stretched, responsive */}
            <img
                src="/images/Features_image.png"
                alt="Features background"
                className="absolute left-1/2 top-0 -translate-x-1/2 object-contain max-w-full h-auto z-0 select-none pointer-events-none hidden md:block"
                style={{ maxHeight: '100%', width: 'auto', height: '100%' }}
            />
            <img
                src="/images/Features_image.png"
                alt="Features background"
                className="w-full h-auto z-0 select-none pointer-events-none block md:hidden"
                style={{ objectFit: 'contain' }}
            />
            {/* Bottom gradient fade to black for smooth transition to next section */}
            <div
                className="absolute bottom-0 left-0 w-full h-16 sm:h-32 pointer-events-none z-30"
                style={{
                    background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0) 100%)"
                }}
            />
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-4 flex flex-col items-center mt-12 sm:mt-24">
                {/* Figma-like two-column layout */}
                <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 sm:gap-12 md:gap-32">
                    {/* Left column: 3 cards stacked */}
                    <div className="flex flex-col gap-8 sm:gap-12 items-center w-full md:w-auto">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <FeatureCard feature={features[0]} />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <FeatureCard feature={features[2]} />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <FeatureCard feature={features[4]} />
                        </div>
                    </div>
                    {/* Right column: 2 cards stacked, centered vertically */}
                    <div className="flex flex-col gap-8 sm:gap-12 items-center justify-center md:mt-24 w-full md:w-auto">
                        <div data-aos="fade-up" data-aos-delay="400">
                            <FeatureCard feature={features[1]} />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500">
                            <FeatureCard feature={features[3]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature }: { feature: { icon: string; title: string; description: string } }) {
    return (
        <div
            className="relative flex flex-col justify-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer group w-full max-w-[500px] mx-auto"
            style={{ height: '170px' }}
        >
            {/* Card background rectangle with hover effects */}
            <div
                className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out group-hover:shadow-[0_0_30px_rgba(0,200,255,0.3)]"
                style={{
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.26)',
                    borderRadius: '8px',
                    zIndex: 0,
                }}
            />
            {/* Enhanced border glow on hover */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,200,255,0.1) 0%, rgba(0,200,255,0.05) 100%)',
                    border: '1px solid rgba(0,200,255,0.4)',
                    borderRadius: '8px',
                    zIndex: 1,
                }}
            />
            {/* Card content, vertically centered */}
            <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-0" style={{ gap: 0 }}>
                <div className="flex items-center h-[50px] ml-4 sm:ml-11 mt-0 mb-0">
                    <img
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-[50px] sm:h-[50px] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:brightness-110"
                    />
                </div>
                <div className="ml-4 sm:ml-[47px] mt-0 mb-0">
                    <h3
                        className="transition-colors duration-300 ease-out group-hover:text-[rgba(0,200,255,0.8)] text-base sm:text-xl"
                        style={{
                            color: 'rgba(0,200,255,0.65)',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            lineHeight: '2.35em',
                            marginBottom: 0,
                            marginTop: 0,
                        }}
                    >
                        {feature.title}
                    </h3>
                </div>
                <div className="ml-4 sm:ml-[47px] mt-0 pr-4 sm:pr-0">
                    <p
                        className="transition-colors duration-300 ease-out group-hover:text-gray-100 text-sm sm:text-[15px] max-w-full sm:max-w-[409px]"
                        style={{
                            color: '#fff',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '1.47em',
                            marginTop: 0,
                            marginBottom: 0,
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
} 