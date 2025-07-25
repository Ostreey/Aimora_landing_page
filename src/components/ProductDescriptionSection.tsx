'use client';

import { Crosshair, Lightbulb, Magnet, Radar, Smartphone } from 'lucide-react';

export function ProductDescriptionSection() {
    return (
        <section className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-white font-barlow font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                        Zmień tarcze w grę.<br />
                        <span className="text-[#017da0]">Dosłownie.</span>
                    </h2>
                    <div className="w-32 h-1 bg-[#017da0] mx-auto mb-8 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Main content */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                            <div className="space-y-6">
                                <p className="text-white/90 font-inter text-2xl leading-relaxed font-bold">
                                    Aimora to system inteligentnych detektorów trafień i wskaźników LED, który zamienia zwykłe stalowe tarcze w <span className="text-[#017da0] font-bold">interaktywne cele treningowe</span>.
                                </p>
                                <p className="text-white/80 font-inter text-xl leading-relaxed font-bold">
                                    Nasze moduły wykrywają trafienia w czasie rzeczywistym i bezprzewodowo komunikują się z aplikacją mobilną, która oferuje różnorodne tryby rozgrywki, statystyki trafień, rankingi i dynamiczne scenariusze.
                                </p>
                                <p className="text-white/80 font-inter text-xl leading-relaxed font-bold">
                                    Wskaźniki LED wskazują, w który cel należy trafić, a kompatybilność z ASG, wiatrówkami i bronią palną sprawia, że Aimora sprawdzi się w każdej sytuacji — niezależnie od poziomu zaawansowania.
                                </p>
                                <div className="pt-4 border-t border-gray-600/30">
                                    <p className="text-[#017da0] font-inter text-xl leading-relaxed font-bold italic">
                                        Wszystko po to, by trening był nie tylko skuteczny, ale też wciągający.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits sidebar */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-[#017da0] transition-all duration-300 group">
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="w-12 h-12 bg-[#017da0]/20 rounded-xl flex items-center justify-center shadow-md group-hover:ring-2 group-hover:ring-cyan-400/40 group-hover:bg-[#017da0]/30 transition-all duration-300">
                                    <Radar className="w-6 h-6 text-white group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
                                </div>
                                <h3 className="text-white font-barlow font-bold text-xl group-hover:text-[#017da0] transition-colors">Reakcja w czasie rzeczywistym</h3>
                            </div>
                            <p className="text-[#017da0] font-inter font-bold text-sm sm:text-[15px] pl-16" style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 15,
                                lineHeight: '1.47em',
                                marginTop: 0,
                                marginBottom: 4,
                                whiteSpace: 'pre-line',
                            }}>
                                Każde trafienie rejestrowane jest natychmiast, z dokladnościa do ułamka sekundy.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-[#017da0] transition-all duration-300 group">
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="w-12 h-12 bg-[#017da0]/20 rounded-xl flex items-center justify-center shadow-md group-hover:ring-2 group-hover:ring-cyan-400/40 group-hover:bg-[#017da0]/30 transition-all duration-300">
                                    <Magnet className="w-6 h-6 text-white group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
                                </div>
                                <h3 className="text-white font-barlow font-bold text-xl group-hover:text-[#017da0] transition-colors">Montaż w kilka sekund</h3>
                            </div>
                            <p className="text-[#017da0] font-inter font-bold text-sm sm:text-[15px] pl-16" style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 15,
                                lineHeight: '1.47em',
                                marginTop: 0,
                                marginBottom: 4,
                                whiteSpace: 'pre-line',
                            }}>
                                Przyłóż moduł do stalowej blachy i graj – bez wiercenia i narzędzi.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-[#017da0] transition-all duration-300 group">
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="w-12 h-12 bg-[#017da0]/20 rounded-xl flex items-center justify-center shadow-md group-hover:ring-2 group-hover:ring-cyan-400/40 group-hover:bg-[#017da0]/30 transition-all duration-300">
                                    <Lightbulb className="w-6 h-6 text-white group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
                                </div>
                                <h3 className="text-white font-barlow font-bold text-xl group-hover:text-[#017da0] transition-colors">Podświetlane cele LED</h3>
                            </div>
                            <p className="text-[#017da0] font-inter font-bold text-sm sm:text-[15px] pl-16" style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 15,
                                lineHeight: '1.47em',
                                marginTop: 0,
                                marginBottom: 4,
                                whiteSpace: 'pre-line',
                            }}>
                                Dzięki diodom LED wiesz, który cel jest aktywny – idealne do trybów refleksowych i turniejowych.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-[#017da0] transition-all duration-300 group">
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="w-12 h-12 bg-[#017da0]/20 rounded-xl flex items-center justify-center shadow-md group-hover:ring-2 group-hover:ring-cyan-400/40 group-hover:bg-[#017da0]/30 transition-all duration-300">
                                    <Crosshair className="w-6 h-6 text-white group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
                                </div>
                                <h3 className="text-white font-barlow font-bold text-xl group-hover:text-[#017da0] transition-colors">Działa z każdą bronią</h3>
                            </div>
                            <p className="text-[#017da0] font-inter font-bold text-sm sm:text-[15px] pl-16" style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 15,
                                lineHeight: '1.47em',
                                marginTop: 0,
                                marginBottom: 4,
                                whiteSpace: 'pre-line',
                            }}>
                                ASG, wiatrówki, broń palna – bez potrzeby kalibracji, bez ograniczeń.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-[#017da0] transition-all duration-300 group">
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="w-12 h-12 bg-[#017da0]/20 rounded-xl flex items-center justify-center shadow-md group-hover:ring-2 group-hover:ring-cyan-400/40 group-hover:bg-[#017da0]/30 transition-all duration-300">
                                    <Smartphone className="w-6 h-6 text-white group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
                                </div>
                                <h3 className="text-white font-barlow font-bold text-xl group-hover:text-[#017da0] transition-colors">Pełna kontrola w aplikacji</h3>
                            </div>
                            <p className="text-[#017da0] font-inter font-bold text-sm sm:text-[15px] pl-16" style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: 15,
                                lineHeight: '1.47em',
                                marginTop: 0,
                                marginBottom: 4,
                                whiteSpace: 'pre-line',
                            }}>
                                Statystyki, stan baterii, rankingi i tryby gry – wszystko w Twoim telefonie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 