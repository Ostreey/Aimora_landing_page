
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
        <section className="relative w-full flex flex-col items-center py-32 bg-black overflow-hidden min-h-[1024px] -mt-16 md:-mt-32 shadow-2xl z-20">
            {/* Top gradient fade from black for smooth transition */}
            <div
                className="absolute top-0 left-0 w-full h-32 pointer-events-none z-30"
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
                className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-30"
                style={{
                    background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0) 100%)"
                }}
            />
            <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center mt-24">
                {/* Figma-like two-column layout */}
                <div className="flex flex-col md:flex-row justify-center items-center w-full gap-12 md:gap-32">
                    {/* Left column: 3 cards stacked */}
                    <div className="flex flex-col gap-12 items-center">
                        <FeatureCard feature={features[0]} />
                        <FeatureCard feature={features[2]} />
                        <FeatureCard feature={features[4]} />
                    </div>
                    {/* Right column: 2 cards stacked, centered vertically */}
                    <div className="flex flex-col gap-12 items-center justify-center md:mt-24">
                        <FeatureCard feature={features[1]} />
                        <FeatureCard feature={features[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature }: { feature: { icon: string; title: string; description: string } }) {
    return (
        <div
            className="relative flex flex-col justify-center"
            style={{ width: '500px', height: '170px' }}
        >
            {/* Card background rectangle */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.26)',
                    borderRadius: '8px',
                    zIndex: 0,
                }}
            />
            {/* Card content, vertically centered */}
            <div className="relative z-10 flex flex-col justify-center h-full" style={{ gap: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '50px', marginLeft: 44, marginTop: 0, marginBottom: 0 }}>
                    <img src={feature.icon} alt={feature.title} width={50} height={50} style={{ display: 'block' }} />
                </div>
                <div style={{ marginLeft: 47, marginTop: 0, marginBottom: 0 }}>
                    <h3
                        style={{
                            color: 'rgba(0,200,255,0.65)',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: 20,
                            lineHeight: '2.35em',
                            marginBottom: 0,
                            marginTop: 0,
                        }}
                    >
                        {feature.title}
                    </h3>
                </div>
                <div style={{ marginLeft: 47, marginTop: 0 }}>
                    <p
                        style={{
                            color: '#fff',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            fontSize: 15,
                            lineHeight: '1.47em',
                            marginTop: 0,
                            marginBottom: 0,
                            maxWidth: 409,
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