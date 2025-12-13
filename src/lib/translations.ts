export type Locale = 'pl' | 'en';

export const translations = {
    pl: {
        nav: {
            aimoraInAction: 'Aimora w akcji',
            rangeTests: 'Testy na strzelnicy',
            howItWorks: 'Jak to działa?',
            mobileApp: 'Aplikacja mobilna',
            roadmap: 'Roadmap',
            rental: 'Wypożyczenie',
            closeMenu: 'Zamknij menu'
        },
        hero: {
            title: 'Wprowadź swój trening strzelecki w nową erę',
            subtitle: 'Przekształć dowolny stalowy cel w interaktywną grę i osobistego trenera strzeleckiego.',
            cta: 'ZAMÓW'
        },
        videoSection: {
            title: 'Zobacz',
            titleHighlight: 'Aimora',
            titleEnd: 'w akcji',
            preparingVideo: 'Przygotowujemy wideo...',
            loadingMessage: 'Ładowanie wideo może potrwać kilka sekund',
            loaded: 'załadowane',
            tip: '💡 Wskazówka: Wideo automatycznie się załaduje gdy będzie gotowe',
            playVideo: 'Odtwórz wideo',
            videoNotSupported: 'Twoja przeglądarka nie obsługuje odtwarzania wideo.'
        },
        testVideoSection: {
            title: 'Testy na',
            titleHighlight: 'Strzelnicy',
            playTestVideo: 'Odtwórz wideo z testów',
            provenInPractice: 'Sprawdzony w praktyce',
            provenDesc: 'System został juz przetestowany na profesjonalnej strzelnicy oraz zawodach strzeleckich.',
            appControl: 'Pełna kontrola z aplikacji',
            appControlDesc: 'Steruj celami bez odchodzenia od stanowiska. Uruchamiaj gry, sprawdzaj trafienia i konfiguruj system',
            easySetup: 'Łatwy Montaż',
            easySetupDesc: 'Prosty proces instalacji i konfiguracji na torze strzeleckim'
        },
        whatIsIt: {
            altDesktop: 'Jak to działa?',
            altMobile: 'Jak to działa?'
        },
        productDescription: {
            title1: 'Zmień tarcze w grę.',
            title2: 'Dosłownie.',
            mainDesc1: 'Aimora to system inteligentnych detektorów trafień i wskaźników LED, który zamienia zwykłe stalowe tarcze w',
            interactiveTargets: 'interaktywne cele treningowe',
            mainDesc2: 'Nasze moduły wykrywają trafienia w czasie rzeczywistym i bezprzewodowo komunikują się z aplikacją mobilną, która oferuje różnorodne tryby rozgrywki, statystyki trafień, rankingi i dynamiczne scenariusze.',
            mainDesc3: 'Wskaźniki LED RGB z wymiennym odblaskiem, w pełni schowane za metalową tarczą, wskazują, w który cel należy trafić. Moduł LED nie ulega uszkodzeniu nawet przy odstrzeleniu odblasku - odblaski są tanie i bardzo łatwe w wymianie. Diody RGB umożliwiają zróżnicowanie gier poprzez różne kolory oraz rozgrywki, w których dwóch graczy może grać jednocześnie, każdy z własnym kolorem celu. Kompatybilność z ASG, wiatrówkami i bronią palną sprawia, że Aimora sprawdzi się w każdej sytuacji — niezależnie od poziomu zaawansowania.',
            effectiveAndEngaging: 'Wszystko po to, by trening był nie tylko skuteczny, ale też wciągający.',
            readyForRevolution: 'Gotowy na rewolucję w treningu?',
            transformTraining: 'Zamień nudny trening w ekscytującą grę pełną wyzwań',
            orderAimora: 'Zamów Aimora',
            accuracy: 'Dokładność',
            responseTime: 'Czas reakcji',
            workTime: 'Czas pracy',
            benefits: {
                realtime: {
                    title: 'Reakcja w czasie rzeczywistym',
                    description: 'Każde trafienie rejestrowane jest natychmiast, z dokładnością do 10 ms.'
                },
                magnetic: {
                    title: 'Szybki montaż magnetyczny',
                    description: 'Przyłóż moduł do stalowej blachy i graj – bez wiercenia i narzędzi.'
                },
                led: {
                    title: 'Podświetlane aktywnych celów RGB ',
                    description: 'Kolorowe diody umożliwia różnego typu gry w tym Multiplayer.'
                },
                weapon: {
                    title: 'Działa z każdą bronią',
                    description: 'ASG, wiatrówki, broń palna – bez potrzeby kalibracji, bez ograniczeń.'
                },
                app: {
                    title: 'Pełna kontrola w aplikacji',
                    description: 'Statystyki, stan baterii, rankingi i tryby gry – wszystko w Twoim telefonie.'
                }
            }
        },
        featureSection: {
            title: 'Co wyróżnia Aimora',
            detailedDescription: 'Opis szczegółowy',
            benefits: 'Korzyści',
            specifications: 'Specyfikacje',
            features: {
                battery: {
                    title: '5 godzin nieprzerwanej pracy',
                    shortDescription: 'Wbudowany akumulator Li-Ion z szybkim , uniwersalnym ładowaniem USB-C ',
                    detailedDescription: 'Wbudowany akumulator litowo-jonowy o pojemności 750mAh zapewnia nieprzerwane działanie urządzenia przez cały trening. System szybkiego ładowania przez port USB-C pozwala na naładowanie do 90% w zaledwie 30 minut.',
                    specs: {
                        capacity: { label: 'Pojemność', value: '750mAh' },
                        workTime: { label: 'Czas pracy', value: 'do 5 godzin' },
                        chargingTime: { label: 'Czas ładowania', value: '30 min (0-90%)' },
                        connector: { label: 'Złącze', value: 'USB-C' },
                        voltage: { label: 'Napięcie', value: '3.7V' },
                        lifecycle: { label: 'Cykl życia', value: '500+ ładowań' }
                    },
                    benefits: [
                        'Całodzienne treningi bez przerw',
                        'Szybkie ładowanie między sesjami',
                        'Uniwersalne złącze USB-C',
                        'Inteligentne zarządzanie energią'
                    ],
                    technicalDetails: 'Akumulator wykorzystuje zaawansowane algorytmy zarządzania energią, które automatycznie dostosowują pobór mocy w zależności od intensywności użytkowania. System deep sleep redukuje zużycie energii do minimum podczas bezczynności.'
                },
                gamesSoftware: {
                    title: 'Rozbudowane gry i funkcje',
                    shortDescription: 'Typy gier: single player i multiplayer, rozgrywki turniejowe typu Shoot-off, tryb turniejowy oraz czasy split trafień',
                    detailedDescription: 'Aimora oferuje szeroki wybór gier zarówno dla pojedynczych graczy jak i w trybie multiplayer, gdzie dwóch graczy może grać jednocześnie. System zawiera rozgrywki turniejowe typu Shoot-off, które mogą zautomatyzować zawody strzeleckie, eliminując potrzebę ręcznego liczenia punktów i czasów.. Dodatkowo, system oferuje pomiar czasów split trafień, pozwalając na szczegółową analizę sesji strzeleckiej pomagając w ciągłym doskonaleniu umiejętności.',
                    specs: {
                        freeTraining: { label: 'Wolny trening', value: 'Single player' },
                        timeAttack: { label: 'Czasówka', value: 'Single player' },
                        maxHits: { label: 'Max trafień', value: 'Single player' },
                        duel: { label: 'Pojedynek', value: 'Tryb multiplayer' },
                        hostage: { label: 'Zakładnik', value: 'Single/Multiplayer' },
                        shootOff: { label: 'Shoot-off', value: 'Tryb turniejowy' },
                        zombie: { label: 'Zombie', value: 'Single/Multiplayer' },
                        gunslinger: { label: 'Rewolwerowiec', value: 'Single/Multiplayer' }
                    },
                    benefits: [
                        'Świetna zabawa zarówno w pojedynkę jak i rywalizując z innymi graczami',
                        'Wsparcie dla sędziów, organizatorów zawodów oraz trenerów strzeleckich',
                        'Możliwość doskonalenia umiejętności dzięki statystykom i analizie sesji',
                        'Automatyczne zliczanie wyników i rankingi'
                    ],
                    technicalDetails: 'Oprogramowanie wykorzystuje zaawansowane algorytmy do analizy trafień i czasu reakcji. System automatycznie rejestruje każdy strzał z dokładnością do milisekundy, umożliwiając precyzyjny pomiar czasów split. Tryb turniejowy integruje się z systemem rankingowym, automatycznie generując wyniki i klasyfikacje. Rozgrywki ShootOff są w pełni zautomatyzowane, eliminując błędy ludzkie i zapewniając sprawiedliwe warunki dla wszystkich uczestników. Oprogramowanie oferuje szczegółowe statystyki, wizualizacje i raporty, które pomagają graczom w identyfikacji obszarów do poprawy.'
                },
                firmwareUpdates: {
                    title: 'Aktualizacje oprogramowania',
                    shortDescription: 'Aktualizacje zarówno aplikacji mobilnej jak i oprogramowania czujnika z nowymi grami i funkcjami',
                    detailedDescription: 'System automatycznych aktualizacji OTA obejmuje zarówno aplikację mobilną jak i oprogramowanie każdego czujnika. Aktualizacja czujników wykonuje się wygodnie za pomocą aplikacji mobilnej - wystarczy jedno kliknięcie. Nawet po zakupie urządzenia otrzymujesz nowe gry, tryby treningowe i funkcjonalności. Regularne ulepszenia algorytmów zwiększają precyzję pomiarów, a nowe tryby gry utrzymują świeżość treningu.',
                    specs: {
                        type: { label: 'Typ', value: 'Bezprzewodowo' }
                    },
                    benefits: [
                        'Nowe gry i tryby treningowe po zakupie'
                    ],
                    technicalDetails: 'System OTA wykorzystuje podpis cyfrowy do weryfikacji integralności aktualizacji. Implementuje mechanizm rollback w przypadku nieudanej aktualizacji, zapewniając ciągłość działania urządzenia.'
                },
                bleCommunication: {
                    title: 'Komunikacja bezprzewodowa BLE',
                    shortDescription: 'Niezawodna komunikacja Bluetooth Low Energy z obsługą wielu celów',
                    detailedDescription: 'Zaawansowana komunikacja Bluetooth Low Energy 5.0 zapewnia stabilne połączenie w czasie rzeczywistym. System obsługuje jednoczesną komunikację z wieloma celami, przesyłając dane o trafieniach z minimalnym opóźnieniem.',
                    specs: {
                        standard: { label: 'Standard', value: 'Bluetooth Low Energy 5.0' },
                        range: { label: 'Zasięg', value: 'do 60 metrów' },
                        latency: { label: 'Opóźnienie', value: '<100ms' },
                        simultaneousTargets: { label: 'Jednoczesne cele', value: 'do 8 urządzeń' },
                        frequency: { label: 'Częstotliwość', value: '2.4 GHz' },
                        protocol: { label: 'Protokół', value: 'GATT' }
                    },
                    benefits: [
                        'Natychmiastowe powiadomienia o trafieniach',
                        'Obsługa wielu celów jednocześnie',
                        'Niezawodne połączenie',
                        'Niskie zużycie energii'
                    ],
                    technicalDetails: 'Wykorzystuje protokół GATT z dedykowanymi charakterystykami dla danych o trafieniach, stanu baterii i kontroli urządzenia. Adaptacyjne zarządzanie mocą sygnału zapewnia optymalne połączenie w różnych warunkach.'
                }
            }
        },
        mobileApp: {
            title: 'Aplikacja mobilna',
            subtitle: 'Intuicyjny interfejs dla pełnej kontroli nad treningiem strzeleckim',
            userExperience: 'Doświadczenie użytkownika',
            userExperienceDesc: 'Zaprojektowana z myślą o maksymalnej wygodzie podczas treningu - od szybkiego połączenia z celami po precyzyjną analizę wyników',
            trainingModes: 'Różnorodne tryby treningowe',
            trainingModesDesc: 'Gra na czas, Rewolwerowiec, Pojedynek, Shoo-off i wiele innych - każdy znajdzie coś dla siebie. Dynamiczny licznik i wizualizacja postępów motywują do lepszych wyników',
            targetManagement: 'Zarządzanie celami',
            targetManagementDesc: 'Każdy szczegół pod kontrolą. Sprawdzaj stan baterii każdego czujnika, reguluj intensywność świecenia diod, nazywaj urządzenia według własnych preferencji',
            analysisProgress: 'Analiza i postęp',
            analysisProgressDesc: 'Szczegółowe statystyki sesji, historia treningów i porównanie wyników. Śledź swój rozwój i wyznaczaj nowe cele treningowe',
            downloadApp: 'Pobierz aplikację Aimora',
            version: 'Wersja',
            size: 'Rozmiar',
            downloadButton: 'Pobierz aplikację',
            downloading: 'Pobieranie...',
            downloadFailed: 'Pobieranie nie powiodło się. Spróbuj ponownie.'
        },
        roadmap: {
            title: 'Roadmap',
            subtitle: 'Zobacz, jak system Aimora będzie się rozwijał w nadchodzących miesiącach',
            current: 'Aktualnie',
            completed: 'Ukończone',
            items: {
                firstVersion: {
                    title: 'Pierwsza wersja',
                    description: 'Podstawowa funkcjonalność systemu treningowego z mobilną aplikacją i bezprzewodowymi celami'
                },
                newGameSeries: {
                    title: 'Nowa seria gier',
                    description: 'Dodanie nowej serii gier multiplayer - Zakładnik, Pojedynek oraz popularna na zawodach rozgrywka Shoot-off'
                },
                rangeAccounts: {
                    title: 'System kont dla strzelnic',
                    description: 'Dedykowane konta klientów strzelnic z zapisywaniem statystyk gier, porównywaniem osiągnięć i rankingami dla całej strzelnicy'
                },
                rangeIncrease: {
                    title: 'Zwiekszenie zasięgu oraz liczba podłączonych detektorów',
                    description: 'Zwiększenie zasięgu detektorów do 200 metrów oraz możliwość podłączenia do 100 detektorów jednocześnie'
                },
                tournamentMode: {
                    title: 'Tryb turniejowy',
                    description: 'Stworzenie trybu turniejowego dzięki któremu zautomatyzujesz swoje zawody strzeleckie, wszystkie statystyki i wyniki przechowasz bezpiecznie w chmurze oraz będziesz mógł konkurować z innymi organizacjami porównując swoje wyniki. Uczestnicy zawodów będą mogli śledzić na bieżąco przebieg zawodów w aplikacji na swoich telefonach'
                },
                dedicatedTarget: {
                    title: 'Dedykowana tarcza z precyzyjną lokalizacją',
                    description: 'Zaawansowana tarcza z dokładną lokalizacją trafień wyświetlaną w czasie rzeczywistym w aplikacji. Koniec z chodzeniem do celu lub instalowaniem kamer - wszystkie szczegóły widoczne natychmiast na ekranie telefonu'
                }
            }
        },
        cta: {
            title1: 'Gotowy na',
            titleHighlight: 'następny poziom',
            title2: '?',
            subtitle: 'Przekształć swój trening w profesjonalne doświadczenie pełne emocji.',
            pricePromo: '350 zł / komplet — detektor + wskaźnik LED',
            orderNow: 'Zamów teraz',
            learnMore: 'Dowiedz się więcej',
            availableNow: 'Dostępne od zaraz',
            contactUs: 'Skontaktuj się z nami już dziś i zacznij trenować na profesjonalnym poziomie'
        },
        footer: {
            description: 'Rewolucjonizujemy trening strzelecki dzięki inteligentnym detektorom trafień. Precyzyjne, interaktywne i innowacyjne rozwiązania treningowe.',
            product: 'Produkt',
            smartDetectors: 'Inteligentne detektory',
            mobileApp: 'Aplikacja mobilna',
            legalInfo: 'Informacje prawne',
            privacyPolicy: 'Polityka prywatności',
            termsOfUse: 'Warunki użytkowania',
            cookiePolicy: 'Polityka plików cookie',
            gdpr: 'RODO',
            copyright: '© 2024 Aimora. Wszystkie prawa zastrzeżone.'
        },
        contactForm: {
            title: 'Zamów Aimora',
            subtitle: 'Skontaktuj się z nami',
            pricePerSet: 'zł / komplet — detektor + wskaźnik LED',
            quantityLabel: 'Ilość kompletów',
            quantityRequired: 'Podaj liczbę kompletów (min. 1)',
            nameLabel: 'Imię',
            nameRequired: 'Imię jest wymagane',
            namePlaceholder: 'Wpisz swoje imię',
            emailLabel: 'Adres email',
            emailRequired: 'Adres email jest wymagany',
            emailInvalid: 'Nieprawidłowy format adresu email',
            emailPlaceholder: 'twoj@email.com',
            phoneLabel: 'Numer telefonu',
            phoneOptional: '(opcjonalne)',
            phonePlaceholder: '+48 123 456 789',
            messageLabel: 'Treść zapytania',
            messageRequired: 'Treść zapytania jest wymagana',
            messageMinLength: 'Treść zapytania musi mieć co najmniej 5 znaków',
            messagePlaceholder: 'Opisz swoje pytania lub wymagania dotyczące Aimora...',
            promoPrice: 'Cena promocyjna',
            total: 'Razem',
            submit: 'Wyślij zapytanie',
            submitting: 'Wysyłanie...',
            successTitle: 'Dziękujemy!',
            successMessage: 'Twoje zapytanie zostało wysłane. Skontaktujemy się z Tobą wkrótce.',
            errorMessage: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie.',
            contactInfo: 'Skontaktujemy się z Tobą w ciągu 24 godzin',
            required: '*'
        },
        rental: {
            metaTitle: 'Wypożyczenie Aimora | Mobilna Strzelnica i Atrakcje na Eventy',
            metaDescription: 'Szukasz wyjątkowej atrakcji na imprezę firmową, festyn lub piknik? Wypożycz interaktywną strzelnicę Aimora i zapewnij niezapomniane wrażenia uczestnikom!',
            heroTitle: 'Interaktywna Strzelnica Aimora na Twoim Wydarzeniu',
            heroSubtitle: 'Zaskocz gości nowoczesną i bezpieczną atrakcją strzelecką. Nasz system to gwarancja świetnej zabawy i angażującej rywalizacji dla każdego, niezależnie od wieku i doświadczenia!',
            askForQuote: 'Zapytaj o wycenę',
            forWhomTitle: 'Atrakcja na imprezy firmowe, festyny i pikniki',
            festivals: 'Festyny i Pikniki',
            festivalsDesc: 'Uatrakcyjnij lokalne święto, dożynki lub dni miasta i przyciągnij tłumy.',
            corporate: 'Imprezy Firmowe',
            corporateDesc: 'Zintegruj zespół i dostarcz emocji podczas imprezy integracyjnej lub pikniku firmowego.',
            bachelor: 'Wieczory Kawalerskie',
            bachelorDesc: 'Zapewnij niezapomniane emocje i adrenalinę.',
            competitions: 'Zawody Strzeleckie',
            competitionsDesc: 'Wprowadź dynamiczne i nowoczesne scenariusze.',
            packageTitle: 'Kompleksowa obsługa Twojej imprezy',
            equipmentTitle: 'Sprzęt najwyższej klasy',
            equipment: [
                'Interaktywne cele strzeleckie Aimora',
                'Profesjonalne repliki ASG (pistolety i karabinki)',
                'Pełne wyposażenie (kulki, gaz, okulary ochronne)',
                'Stanowisko strzeleckie z siatką bezpieczeństwa'
            ],
            supportTitle: 'Pełne wsparcie logistyczne',
            support: [
                'Doświadczony instruktor i obsługa techniczna',
                'Transport, montaż i demontaż na terenie całej Polski',
                'Szkolenie z bezpieczeństwa dla wszystkich uczestników',
                'Organizacja angażujących mini-zawodów i gier'
            ],
            conditionsTitle: 'Warunki wynajmu i wymagania techniczne',
            spaceTitle: 'Przestrzeń',
            spaceDesc: 'Minimum 5x5 metrów płaskiego terenu. Działamy zarówno wewnątrz budynków, jak i w plenerze.',
            powerTitle: 'Zasilanie',
            powerDesc: 'Nasz system jest w pełni bezprzewodowy. Nie wymagamy dostępu do zewnętrznego źródła zasilania.',
            capacityTitle: 'Przepustowość',
            capacityDesc: 'Jeden zestaw obsługuje do 30 osób na godzinę, zapewniając płynną rotację i brak kolejek.',
            miniCtaTitle: 'Gotowy na celne emocje?',
            miniCtaSubtitle: 'Skontaktuj się z nami, aby omówić szczegóły i zarezerwować termin na Twoją imprezę. Przygotujemy ofertę idealnie dopasowaną do Twoich potrzeb.',
            reserveDate: 'Zarezerwuj termin',
            faqTitle: 'Najczęściej zadawane pytania (FAQ)',
            contactFormTitle: 'Zarezerwuj termin lub zapytaj o ofertę',
            contactFormSubtitle: 'Wypełnij formularz, a my skontaktujemy się z Tobą, aby przygotować indywidualną wycenę i omówić szczegóły.',
            namePlaceholder: 'Imię / Nazwa firmy',
            emailPlaceholder: 'Adres e-mail',
            phonePlaceholder: 'Numer telefonu (opcjonalnie)',
            datePlaceholder: 'Data wydarzenia',
            locationPlaceholder: 'Miejsce wydarzenia',
            messagePlaceholder: 'Twoje pytania lub dodatkowe informacje',
            submit: 'Wyślij zapytanie',
            successMessage: 'Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.',
            errorMessage: 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.',
            faq: [
                {
                    question: 'Ile czasu przed eventem muszę zarezerwować Aimorę?',
                    answer: 'Im wcześniej, tym lepiej, szczególnie w sezonie letnim. Rekomendujemy rezerwację na 2-3 tygodnie przed terminem, ale zawsze warto zapytać o dostępne terminy last-minute.'
                },
                {
                    question: 'Czy atrakcja jest bezpieczna dla dzieci?',
                    answer: 'Tak, bezpieczeństwo jest naszym priorytetem. Używamy profesjonalnych replik ASG strzelających plastikowymi kulkami, a nasi instruktorzy zapewniają, że wszyscy uczestnicy noszą okulary ochronne. Atrakcja jest odpowiednia dla uczestników od 10 roku życia.'
                },
                {
                    question: 'Ile osób może grać jednocześnie?',
                    answer: 'Standardowy zestaw pozwala na jednoczesną grę kilku osób i płynną rotację, co pozwala obsłużyć grupę około 30 osób na godzinę. Możemy dostosować liczbę stanowisk do wielkości Twojego eventu.'
                },
                {
                    question: 'Czy potrzebujemy specjalnych pozwoleń?',
                    answer: 'Nie, system Aimora jest traktowany jako atrakcja rekreacyjna i nie wymaga żadnych specjalnych pozwoleń na broń. Działa cicho i jest w pełni mobilny.'
                },
                {
                    question: 'Jaki jest koszt wynajmu?',
                    answer: 'Koszt zależy od czasu trwania imprezy, liczby celów oraz zakresu obsługi. Każde zapytanie wyceniamy indywidualnie. Skontaktuj się z nami, a przygotujemy ofertę idealnie dopasowaną do Twojego wydarzenia.'
                }
            ]
        }
    },
    en: {
        nav: {
            aimoraInAction: 'Aimora in Action',
            rangeTests: 'Range Tests',
            howItWorks: 'How It Works',
            mobileApp: 'Mobile App',
            roadmap: 'Roadmap',
            rental: 'Rental',
            closeMenu: 'Close menu'
        },
        hero: {
            title: 'Take Your Shooting Training to the Next Level',
            subtitle: 'Transform any steel target into an interactive game and your personal shooting coach.',
            cta: 'ORDER'
        },
        videoSection: {
            title: 'See',
            titleHighlight: 'Aimora',
            titleEnd: 'in Action',
            preparingVideo: 'Preparing video...',
            loadingMessage: 'Video loading may take a few seconds',
            loaded: 'loaded',
            tip: '💡 Tip: Video will load automatically when ready',
            playVideo: 'Play video',
            videoNotSupported: 'Your browser does not support video playback.'
        },
        testVideoSection: {
            title: 'Range',
            titleHighlight: 'Tests',
            playTestVideo: 'Play test video',
            provenInPractice: 'Field-Tested',
            provenDesc: 'The system has been tested on professional shooting ranges and in shooting competitions.',
            appControl: 'Full App Control',
            appControlDesc: 'Control targets without leaving your station. Start games, check hits, and configure the system',
            easySetup: 'Easy Installation',
            easySetupDesc: 'Simple setup and configuration process on any shooting range'
        },
        whatIsIt: {
            altDesktop: 'How does it work?',
            altMobile: 'How does it work?'
        },
        productDescription: {
            title1: 'Turn Targets into Games.',
            title2: 'Literally.',
            mainDesc1: 'Aimora is a system of smart hit detectors and LED indicators that transforms ordinary steel targets into',
            interactiveTargets: 'interactive training targets',
            mainDesc2: 'Our modules detect hits in real-time and wirelessly communicate with the mobile app, which offers various game modes, hit statistics, leaderboards, and dynamic scenarios.',
            mainDesc3: 'RGB LED indicators with replaceable reflectors, fully hidden behind the metal target, show which target to hit. The LED module remains undamaged even when the reflector is shot off - reflectors are cheap and very easy to replace. RGB LEDs enable diverse games through different colors and matches where two players can compete simultaneously, each with their own target color. Compatibility with airsoft, air guns, and firearms makes Aimora perfect for any situation — regardless of skill level.',
            effectiveAndEngaging: 'Everything designed to make training not only effective, but also engaging.',
            readyForRevolution: 'Ready for a training revolution?',
            transformTraining: 'Turn boring practice into an exciting game full of challenges',
            orderAimora: 'Order Aimora',
            accuracy: 'Accuracy',
            responseTime: 'Response Time',
            workTime: 'Battery Life',
            benefits: {
                realtime: {
                    title: 'Real-Time Response',
                    description: 'Every hit is registered instantly, with 10ms precision.'
                },
                magnetic: {
                    title: 'Quick Magnetic Mount',
                    description: 'Attach the module to steel plate and play – no drilling or tools required.'
                },
                led: {
                    title: 'RGB Active Target Illumination',
                    description: 'Colored LEDs enable various game types including Multiplayer.'
                },
                weapon: {
                    title: 'Works with Any Weapon',
                    description: 'Airsoft, air guns, firearms – no calibration needed, no limitations.'
                },
                app: {
                    title: 'Full App Control',
                    description: 'Statistics, battery status, rankings and game modes – all on your phone.'
                }
            }
        },
        featureSection: {
            title: 'What Makes Aimora Stand Out',
            detailedDescription: 'Detailed Description',
            benefits: 'Benefits',
            specifications: 'Specifications',
            features: {
                battery: {
                    title: '5 Hours of Continuous Operation',
                    shortDescription: 'Built-in Li-Ion battery with fast, universal USB-C charging',
                    detailedDescription: 'Built-in 750mAh lithium-ion battery ensures uninterrupted device operation throughout your training. The fast-charging USB-C system allows charging to 90% in just 30 minutes.',
                    specs: {
                        capacity: { label: 'Capacity', value: '750mAh' },
                        workTime: { label: 'Battery Life', value: 'up to 5 hours' },
                        chargingTime: { label: 'Charging Time', value: '30 min (0-90%)' },
                        connector: { label: 'Connector', value: 'USB-C' },
                        voltage: { label: 'Voltage', value: '3.7V' },
                        lifecycle: { label: 'Lifecycle', value: '500+ charges' }
                    },
                    benefits: [
                        'All-day training without breaks',
                        'Fast charging between sessions',
                        'Universal USB-C connector',
                        'Smart energy management'
                    ],
                    technicalDetails: 'The battery uses advanced power management algorithms that automatically adjust power consumption based on usage intensity. Deep sleep mode reduces energy consumption to minimum during idle periods.'
                },
                gamesSoftware: {
                    title: 'Extensive Games and Features',
                    shortDescription: 'Game types: single player and multiplayer, Shoot-off tournament matches, tournament mode, and split time measurements',
                    detailedDescription: 'Aimora offers a wide selection of games for both single players and multiplayer mode, where two players can play simultaneously. The system includes Shoot-off tournament matches that can automate shooting competitions, eliminating the need for manual scoring. Additionally, the system offers split time measurements, allowing for detailed shooting session analysis to help with continuous skill improvement.',
                    specs: {
                        freeTraining: { label: 'Free Training', value: 'Single player' },
                        timeAttack: { label: 'Time Attack', value: 'Single player' },
                        maxHits: { label: 'Max Hits', value: 'Single player' },
                        duel: { label: 'Duel', value: 'Multiplayer mode' },
                        hostage: { label: 'Hostage', value: 'Single/Multiplayer' },
                        shootOff: { label: 'Shoot-off', value: 'Tournament mode' },
                        zombie: { label: 'Zombie', value: 'Single/Multiplayer' },
                        gunslinger: { label: 'Gunslinger', value: 'Single/Multiplayer' }
                    },
                    benefits: [
                        'Great fun both solo and competing with other players',
                        'Support for referees, competition organizers, and shooting instructors',
                        'Skill improvement through statistics and session analysis',
                        'Automatic scoring and rankings'
                    ],
                    technicalDetails: 'The software uses advanced algorithms for hit analysis and reaction time measurement. The system automatically records every shot with millisecond precision, enabling accurate split time measurements. Tournament mode integrates with the ranking system, automatically generating results and classifications. ShootOff matches are fully automated, eliminating human error and ensuring fair conditions for all participants. The software offers detailed statistics, visualizations, and reports to help players identify areas for improvement.'
                },
                firmwareUpdates: {
                    title: 'Software Updates',
                    shortDescription: 'Updates for both mobile app and sensor firmware with new games and features',
                    detailedDescription: 'The automatic OTA update system covers both the mobile app and firmware of each sensor. Sensor updates are conveniently performed via the mobile app - just one click. Even after purchase, you receive new games, training modes, and features. Regular algorithm improvements increase measurement precision, and new game modes keep training fresh.',
                    specs: {
                        type: { label: 'Type', value: 'Wireless (OTA)' }
                    },
                    benefits: [
                        'New games and training modes after purchase'
                    ],
                    technicalDetails: 'The OTA system uses digital signatures to verify update integrity. It implements a rollback mechanism in case of failed updates, ensuring device continuity.'
                },
                bleCommunication: {
                    title: 'Wireless BLE Communication',
                    shortDescription: 'Reliable Bluetooth Low Energy communication with multi-target support',
                    detailedDescription: 'Advanced Bluetooth Low Energy 5.0 communication provides stable real-time connection. The system supports simultaneous communication with multiple targets, transmitting hit data with minimal latency.',
                    specs: {
                        standard: { label: 'Standard', value: 'Bluetooth Low Energy 5.0' },
                        range: { label: 'Range', value: 'up to 60 meters' },
                        latency: { label: 'Latency', value: '<100ms' },
                        simultaneousTargets: { label: 'Simultaneous Targets', value: 'up to 8 devices' },
                        frequency: { label: 'Frequency', value: '2.4 GHz' },
                        protocol: { label: 'Protocol', value: 'GATT' }
                    },
                    benefits: [
                        'Instant hit notifications',
                        'Multiple target support',
                        'Reliable connection',
                        'Low power consumption'
                    ],
                    technicalDetails: 'Uses GATT protocol with dedicated characteristics for hit data, battery status, and device control. Adaptive signal power management ensures optimal connection in various conditions.'
                }
            }
        },
        mobileApp: {
            title: 'Mobile App',
            subtitle: 'Intuitive interface for complete control over your shooting training',
            userExperience: 'User Experience',
            userExperienceDesc: 'Designed for maximum convenience during training - from quick target connection to precise results analysis',
            trainingModes: 'Various Training Modes',
            trainingModesDesc: 'Time Attack, Gunslinger, Duel, Shoot-off and many more - everyone will find something for themselves. Dynamic counter and progress visualization motivate for better results',
            targetManagement: 'Target Management',
            targetManagementDesc: 'Every detail under control. Check battery status of each sensor, adjust LED brightness, name devices according to your preferences',
            analysisProgress: 'Analysis and Progress',
            analysisProgressDesc: 'Detailed session statistics, training history and result comparison. Track your development and set new training goals',
            downloadApp: 'Download Aimora App',
            version: 'Version',
            size: 'Size',
            downloadButton: 'Download App',
            downloading: 'Downloading...',
            downloadFailed: 'Download failed. Please try again.'
        },
        roadmap: {
            title: 'Roadmap',
            subtitle: 'See how the Aimora system will evolve in the coming months',
            current: 'Current',
            completed: 'Completed',
            items: {
                firstVersion: {
                    title: 'First Version',
                    description: 'Basic training system functionality with mobile app and wireless targets'
                },
                newGameSeries: {
                    title: 'New Game Series',
                    description: 'Addition of new multiplayer game series - Hostage, Duel, and the popular competition format Shoot-off'
                },
                rangeAccounts: {
                    title: 'Range Account System',
                    description: 'Dedicated accounts for range customers with game statistics storage, achievement comparison, and rankings for the entire range'
                },
                rangeIncrease: {
                    title: 'Increased Range and Connected Detectors',
                    description: 'Increasing detector range to 200 meters and ability to connect up to 100 detectors simultaneously'
                },
                tournamentMode: {
                    title: 'Tournament Mode',
                    description: 'Creation of tournament mode to automate your shooting competitions, securely store all statistics and results in the cloud, and compete with other organizations by comparing results. Competition participants will be able to follow the competition progress in real-time on their phones'
                },
                dedicatedTarget: {
                    title: 'Dedicated Target with Precise Location',
                    description: 'Advanced target with precise hit location displayed in real-time in the app. No more walking to the target or installing cameras - all details visible instantly on your phone screen'
                }
            }
        },
        cta: {
            title1: 'Ready for the',
            titleHighlight: 'next level',
            title2: '?',
            subtitle: 'Transform your training into a professional experience full of excitement.',
            pricePromo: '350 PLN / set — detector + LED indicator',
            orderNow: 'Order Now',
            learnMore: 'Learn More',
            availableNow: 'Available Now',
            contactUs: 'Contact us today and start training at a professional level'
        },
        footer: {
            description: 'Revolutionizing shooting training with smart hit detectors. Precise, interactive, and innovative training solutions.',
            product: 'Product',
            smartDetectors: 'Smart Detectors',
            mobileApp: 'Mobile App',
            legalInfo: 'Legal Information',
            privacyPolicy: 'Privacy Policy',
            termsOfUse: 'Terms of Use',
            cookiePolicy: 'Cookie Policy',
            gdpr: 'GDPR',
            copyright: '© 2024 Aimora. All rights reserved.'
        },
        contactForm: {
            title: 'Order Aimora',
            subtitle: 'Contact us',
            pricePerSet: 'PLN / set — detector + LED indicator',
            quantityLabel: 'Number of Sets',
            quantityRequired: 'Enter number of sets (min. 1)',
            nameLabel: 'Name',
            nameRequired: 'Name is required',
            namePlaceholder: 'Enter your name',
            emailLabel: 'Email Address',
            emailRequired: 'Email address is required',
            emailInvalid: 'Invalid email format',
            emailPlaceholder: 'your@email.com',
            phoneLabel: 'Phone Number',
            phoneOptional: '(optional)',
            phonePlaceholder: '+48 123 456 789',
            messageLabel: 'Message',
            messageRequired: 'Message is required',
            messageMinLength: 'Message must be at least 5 characters',
            messagePlaceholder: 'Describe your questions or requirements regarding Aimora...',
            promoPrice: 'Promotional price',
            total: 'Total',
            submit: 'Send Inquiry',
            submitting: 'Sending...',
            successTitle: 'Thank you!',
            successMessage: 'Your inquiry has been sent. We will contact you soon.',
            errorMessage: 'An error occurred while sending. Please try again.',
            contactInfo: 'We will contact you within 24 hours',
            required: '*'
        },
        rental: {
            metaTitle: 'Aimora Rental | Mobile Shooting Range and Event Attractions',
            metaDescription: 'Looking for a unique attraction for a corporate event, fair, or picnic? Rent the interactive Aimora shooting range and provide unforgettable experiences for participants!',
            heroTitle: 'Interactive Aimora Shooting Range at Your Event',
            heroSubtitle: 'Surprise your guests with a modern and safe shooting attraction. Our system guarantees great fun and engaging competition for everyone, regardless of age and experience!',
            askForQuote: 'Request a Quote',
            forWhomTitle: 'Attraction for Corporate Events, Fairs, and Picnics',
            festivals: 'Fairs and Picnics',
            festivalsDesc: 'Enhance local celebrations, harvest festivals, or city days and attract crowds.',
            corporate: 'Corporate Events',
            corporateDesc: 'Build team spirit and deliver excitement during team-building events or company picnics.',
            bachelor: 'Bachelor Parties',
            bachelorDesc: 'Provide unforgettable thrills and adrenaline.',
            competitions: 'Shooting Competitions',
            competitionsDesc: 'Introduce dynamic and modern scenarios.',
            packageTitle: 'Complete Service for Your Event',
            equipmentTitle: 'Top-Quality Equipment',
            equipment: [
                'Interactive Aimora shooting targets',
                'Professional airsoft replicas (pistols and rifles)',
                'Full equipment (BBs, gas, safety glasses)',
                'Shooting station with safety netting'
            ],
            supportTitle: 'Full Logistics Support',
            support: [
                'Experienced instructor and technical support',
                'Transport, setup, and takedown throughout Poland',
                'Safety training for all participants',
                'Organization of engaging mini-competitions and games'
            ],
            conditionsTitle: 'Rental Terms and Technical Requirements',
            spaceTitle: 'Space',
            spaceDesc: 'Minimum 5x5 meters of flat terrain. We operate both indoors and outdoors.',
            powerTitle: 'Power',
            powerDesc: 'Our system is fully wireless. No external power source required.',
            capacityTitle: 'Capacity',
            capacityDesc: 'One set handles up to 30 people per hour, ensuring smooth rotation and no queues.',
            miniCtaTitle: 'Ready for Targeted Excitement?',
            miniCtaSubtitle: 'Contact us to discuss details and book a date for your event. We will prepare an offer perfectly tailored to your needs.',
            reserveDate: 'Book a Date',
            faqTitle: 'Frequently Asked Questions (FAQ)',
            contactFormTitle: 'Book a Date or Request a Quote',
            contactFormSubtitle: 'Fill out the form and we will contact you to prepare an individual quote and discuss details.',
            namePlaceholder: 'Name / Company Name',
            emailPlaceholder: 'Email Address',
            phonePlaceholder: 'Phone Number (optional)',
            datePlaceholder: 'Event Date',
            locationPlaceholder: 'Event Location',
            messagePlaceholder: 'Your questions or additional information',
            submit: 'Send Inquiry',
            successMessage: 'Thank you for your message! We will contact you soon.',
            errorMessage: 'An error occurred while sending the form. Please try again later.',
            faq: [
                {
                    question: 'How far in advance should I book Aimora?',
                    answer: 'The earlier the better, especially during summer season. We recommend booking 2-3 weeks in advance, but it\'s always worth asking about last-minute availability.'
                },
                {
                    question: 'Is the attraction safe for children?',
                    answer: 'Yes, safety is our priority. We use professional airsoft replicas shooting plastic BBs, and our instructors ensure all participants wear safety glasses. The attraction is suitable for participants aged 10 and above.'
                },
                {
                    question: 'How many people can play at once?',
                    answer: 'The standard set allows several people to play simultaneously with smooth rotation, handling about 30 people per hour. We can adjust the number of stations to your event size.'
                },
                {
                    question: 'Do we need special permits?',
                    answer: 'No, the Aimora system is treated as a recreational attraction and does not require any special weapon permits. It operates quietly and is fully mobile.'
                },
                {
                    question: 'What is the rental cost?',
                    answer: 'The cost depends on event duration, number of targets, and service scope. Each inquiry is priced individually. Contact us and we will prepare an offer perfectly tailored to your event.'
                }
            ]
        }
    }
} as const;

export function getTranslations(locale: Locale) {
    return translations[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
    return pathname.startsWith('/en') ? 'en' : 'pl';
}
