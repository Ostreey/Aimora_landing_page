export function HowItWorksSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-24 bg-black">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center font-barlow">
                Opis działania
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center">
                Nasze urządzenie działa w prosty sposób: po zamocowaniu na stalowej tarczy i uruchomieniu, diody LED sygnalizują kolejne etapy treningu.
                Dzięki aplikacji mobilnej możesz sterować urządzeniem, analizować wyniki w czasie rzeczywistym oraz dostosować jasność diod do własnych potrzeb.
                Wbudowany akumulator zapewnia długą pracę bez konieczności częstego ładowania.
            </p>
        </section>
    );
} 