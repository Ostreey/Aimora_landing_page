import { EventContactForm } from '@/components/EventContactForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wypożyczenie Aimora | Mobilna Strzelnica i Atrakcje na Eventy',
    description: 'Szukasz wyjątkowej atrakcji na imprezę firmową, festyn lub piknik? Wypożycz interaktywną strzelnicę Aimora i zapewnij niezapomniane wrażenia uczestnikom!',
    keywords: ['wypożyczenie atrakcji', 'atrakcje na eventy', 'mobilna strzelnica wynajem', 'strzelnica ASG wynajem', 'atrakcje na imprezy firmowe', 'atrakcje na festyn', 'atrakcje na piknik', 'team building', 'imprezy integracyjne', 'aimora na wypożyczenie'],
};

export default function WypozyczeniePage() {
    return (
        <main className="min-h-screen">
            <section className="pt-24 md:pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                        Interaktywna Strzelnica Aimora na Twoim Wydarzeniu
                    </h1>
                    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
                        Zaskocz gości nowoczesną i bezpieczną atrakcją strzelecką. Nasz system to gwarancja świetnej zabawy i angażującej rywalizacji dla każdego, niezależnie od wieku i doświadczenia!
                    </p>
                    <div className="text-center">
                        <a href="#cta" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                            Zapytaj o wycenę
                        </a>
                    </div>
                </div>
            </section>

            {/* Sekcja "Dla kogo?" - nowa wersja */}
            <section className="py-12 bg-black relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Atrakcja na imprezy firmowe, festyny i pikniki</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                        {/* Karta 1: Festyny */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/festival.svg" alt="Festyny i Dożynki" className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">Festyny i Pikniki</h3>
                            <p className="text-gray-400">Uatrakcyjnij lokalne święto, dożynki lub dni miasta i przyciągnij tłumy.</p>
                        </div>

                        {/* Karta 2: Imprezy Firmowe */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/corporate.svg" alt="Imprezy Firmowe" className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">Imprezy Firmowe</h3>
                            <p className="text-gray-400">Zintegruj zespół i dostarcz emocji podczas imprezy integracyjnej lub pikniku firmowego.</p>
                        </div>

                        {/* Karta 3: Wieczory Kawalerskie */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/bachelor.svg" alt="Wieczory Kawalerskie" className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">Wieczory Kawalerskie</h3>
                            <p className="text-gray-400">Zapewnij niezapomniane emocje i adrenalinę.</p>
                        </div>

                        {/* Karta 4: Zawody Strzeleckie */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
                            <img src="/icons/competition.svg" alt="Zawody Strzeleckie" className="h-12 w-12 mx-auto mb-4 invert" />
                            <h3 className="text-xl font-bold mb-2 text-white">Zawody Strzeleckie</h3>
                            <p className="text-gray-400">Wprowadź dynamiczne i nowoczesne scenariusze.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sekcja "Co zawiera pakiet?" - nowa wersja */}
            <section className="py-12 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Kompleksowa obsługa Twojej imprezy</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-lg">

                        {/* Karta 1: Sprzęt */}
                        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Sprzęt najwyższej klasy</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Interaktywne cele strzeleckie Aimora</li>
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Profesjonalne repliki ASG (pistolety i karabinki)</li>
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Pełne wyposażenie (kulki, gaz, okulary ochronne)</li>
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Stanowisko strzeleckie z siatką bezpieczeństwa</li>
                            </ul>
                        </div>

                        {/* Karta 2: Wsparcie */}
                        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Pełne wsparcie logistyczne</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Doświadczony instruktor i obsługa techniczna</li>
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Transport, montaż i demontaż na terenie całej Polski</li>
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Szkolenie z bezpieczeństwa dla wszystkich uczestników</li>
                                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Organizacja angażujących mini-zawodów i gier</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sekcja "Warunki wynajmu" */}
            <section className="py-12 bg-black relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black"></div>
                <div className="container mx-auto px-4 relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Warunki wynajmu i wymagania techniczne</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">

                        {/* Wymagana przestrzeń */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Przestrzeń</h3>
                            <p className="text-gray-300">Minimum <span className="font-bold">5x5 metrów</span> płaskiego terenu. Działamy zarówno wewnątrz budynków, jak i w plenerze.</p>
                        </div>

                        {/* Zasilanie */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Zasilanie</h3>
                            <p className="text-gray-300">Nasz system jest w pełni bezprzewodowy. <span className="font-bold">Nie wymagamy dostępu</span> do zewnętrznego źródła zasilania.</p>
                        </div>

                        {/* Przepustowość */}
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Przepustowość</h3>
                            <p className="text-gray-300">Jeden zestaw obsługuje do <span className="font-bold">30 osób na godzinę</span>, zapewniając płynną rotację i brak kolejek.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mini CTA */}
            <section className="py-12 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">Gotowy na celne emocje?</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Skontaktuj się z nami, aby omówić szczegóły i zarezerwować termin na Twoją imprezę. Przygotujemy ofertę idealnie dopasowaną do Twoich potrzeb.</p>
                    <a href="#cta" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                        Zarezerwuj termin
                    </a>
                </div>
            </section>

            {/* Sekcja "Galeria" */}
            <section className="py-12 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Zobacz Aimora w akcji!</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="group relative">
                            <img className="h-auto max-w-full rounded-lg" src="https://via.placeholder.com/800x600.png/1a202c/ffffff?text=Aimora+Event+1" alt="Aimora na imprezie firmowej" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-bold">Impreza firmowa</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <img className="h-auto max-w-full rounded-lg" src="https://via.placeholder.com/800x600.png/1a202c/ffffff?text=Aimora+Event+2" alt="Aimora na festynie" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-bold">Festyn rodzinny</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <img className="h-auto max-w-full rounded-lg" src="https://via.placeholder.com/800x600.png/1a202c/ffffff?text=Aimora+Event+3" alt="Aimora na zawodach strzeleckich" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-bold">Zawody strzeleckie</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <img className="h-auto max-w-full rounded-lg" src="https://via.placeholder.com/800x600.png/1a202c/ffffff?text=Aimora+Event+4" alt="Aimora na pikniku" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-bold">Piknik integracyjny</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <img className="h-auto max-w-full rounded-lg" src="https://via.placeholder.com/800x600.png/1a202c/ffffff?text=Aimora+Event+5" alt="Wieczór kawalerski z Aimora" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-bold">Wieczór kawalerski</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <img className="h-auto max-w-full rounded-lg" src="https://via.placeholder.com/800x600.png/1a202c/ffffff?text=Aimora+Event+6" alt="Aimora na dniach miasta" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-bold">Dni miasta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sekcja "Zaufali nam" */}
            <section className="py-12 bg-black relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
                <div className="container mx-auto px-4 relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Zaufali nam organizatorzy</h2>

                    {/* Logotypy partnerów */}
                    <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60 mb-12">
                        <img src="https://via.placeholder.com/150x50.png/334155/ffffff?text=Logo+Klienta+1" alt="Logo klienta 1" className="h-10" />
                        <img src="https://via.placeholder.com/150x50.png/334155/ffffff?text=Logo+Klienta+2" alt="Logo klienta 2" className="h-10" />
                        <img src="https://via.placeholder.com/150x50.png/334155/ffffff?text=Logo+Klienta+3" alt="Logo klienta 3" className="h-10 hidden sm:block" />
                        <img src="https://via.placeholder.com/150x50.png/334155/ffffff?text=Logo+Klienta+4" alt="Logo klienta 4" className="h-10 hidden md:block" />
                    </div>

                    {/* Opinia klienta */}
                    <div className="max-w-3xl mx-auto text-center">
                        <blockquote className="text-xl italic text-gray-300 border-l-4 border-[#00B2E3] pl-6">
                            <p>&quot;Aimora okazała się strzałem w dziesiątkę na naszym pikniku firmowym. Uczestnicy byli zachwyceni, a profesjonalna obsługa zadbała o wszystko. To atrakcja, która naprawdę angażuje i integruje!&quot;</p>
                        </blockquote>
                        <cite className="block mt-4 text-gray-400 not-italic">
                            - Jan Kowalski, Event Manager, Firma XYZ
                        </cite>
                    </div>
                </div>
            </section>

            {/* Sekcja FAQ */}
            <section className="py-12 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Najczęściej zadawane pytania (FAQ)</h2>
                    <div className="max-w-3xl mx-auto">
                        <FaqAccordion />
                    </div>
                </div>
            </section>

            {/* Tutaj możemy dodać więcej sekcji, np. Cennik, FAQ */}

            <div id="cta">
                <EventContactForm />
            </div>
            <Footer />
        </main>
    );
}
