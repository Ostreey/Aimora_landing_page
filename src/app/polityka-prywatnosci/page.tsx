import { Footer } from '@/components/Footer';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Polityka prywatności | Aimora',
    description: 'Jakie dane zbiera aplikacja Aimora i serwis aimora.pl, w jakim celu, jak długo je przechowujemy i jakie masz prawa.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/polityka-prywatnosci',
        languages: {
            'pl': '/polityka-prywatnosci',
            'en': '/en/privacy-policy',
        },
    },
};

export default function PolitykaPrywatnosciPage() {
    return (
        <LegalLayout
            title="Polityka prywatności"
            updatedLabel="Obowiązuje od 4 września 2026 r."
            footer={<Footer />}
        >
            <h2>1. Kto jest administratorem Twoich danych</h2>
            <p>
                Administratorem danych osobowych jest <strong>Aimora</strong>, NIP 956-22-50-675.
            </p>
            <p>
                Kontakt w sprawach dotyczących danych osobowych:{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>
            <p>
                Nie powołaliśmy inspektora ochrony danych. We wszystkich sprawach związanych
                z przetwarzaniem danych pisz na adres powyżej.
            </p>

            <h2>2. Czego dotyczy ta polityka</h2>
            <p>Polityka obejmuje dwa obszary:</p>
            <ul>
                <li><strong>serwis aimora.pl</strong> — strona internetowa wraz z formularzem kontaktowym,</li>
                <li><strong>aplikację mobilną Aimora</strong> na Androida.</li>
            </ul>

            <h2>3. Korzystanie z aplikacji bez konta</h2>
            <p>
                Aplikacja Aimora działa <strong>bez zakładania konta</strong>. W trybie bez konta nie
                wysyłamy na nasze serwery żadnych danych pozwalających Cię zidentyfikować. Ustawienia
                gier, nazwy detektorów i wyniki treningów pozostają wyłącznie w pamięci Twojego
                urządzenia.
            </p>
            <p>
                Komunikacja aplikacji z detektorami odbywa się lokalnie przez Bluetooth Low Energy
                i nie przechodzi przez internet.
            </p>

            <h2>4. Jakie dane przetwarzamy, gdy założysz konto</h2>
            <p>
                Konto jest dobrowolne i potrzebne wyłącznie do funkcji Premium oraz do przenoszenia
                ustawień między urządzeniami. Zakładając je, przekazujesz nam:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Dane</th>
                        <th>Skąd pochodzą</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>adres e-mail</td>
                        <td>podajesz go przy rejestracji</td>
                    </tr>
                    <tr>
                        <td>hasło</td>
                        <td>
                            ustalasz je przy rejestracji; przechowujemy je w postaci, która{' '}
                            <strong>uniemożliwia nam odczytanie jego treści</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>identyfikator konta</td>
                        <td>tworzony automatycznie przy rejestracji</td>
                    </tr>
                    <tr>
                        <td>data ostatniego użycia aplikacji i numer jej wersji</td>
                        <td>zapisywane automatycznie przy logowaniu</td>
                    </tr>
                    <tr>
                        <td>zakres wykupionego dostępu Premium i data jego ważności</td>
                        <td>ustawiamy je po Twojej stronie po opłaceniu dostępu</td>
                    </tr>
                    <tr>
                        <td>
                            ustawienia gier oraz preferencje aplikacji (domyślna liczba detektorów,
                            ukrywanie nazwisk przy eksporcie wyników), zdefiniowane przez Ciebie
                            kolory, nazwy nadane detektorom oraz szablony turniejów
                        </td>
                        <td>
                            wysyłane tylko wtedy, gdy korzystasz z funkcji kopii ustawień w chmurze
                        </td>
                    </tr>
                    <tr>
                        <td>licznik zakończonych zawodów i data ostatnich z nich</td>
                        <td>
                            aktualizowane automatycznie w aplikacji; służą do obsługi konta
                            i utrzymania wykupionego dostępu. <strong>Nie zapisujemy nazw zawodów
                            ani danych ich uczestników</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>dane techniczne dotyczące poprawności pomiaru czasu na urządzeniu</td>
                        <td>
                            zapisywane wyjątkowo, gdy wykryjemy nieprawidłowość; służą weryfikacji
                            ważności dostępu Premium oraz pomocy technicznej
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>Co zostaje wyłącznie na Twoim urządzeniu</h3>
            <p>
                Do chmury <strong>nie trafiają</strong>: turnieje wraz z listą zawodników i wynikami,
                historia rozegranych zawodów ani logo organizatora. Te dane żyją w pamięci
                aplikacji i znikają wraz z jej odinstalowaniem.
            </p>
            <p>
                Oznacza to, że jeżeli wpisujesz do turnieju imiona i nazwiska zawodników,
                <strong> ich dane nie są nam przekazywane</strong>. Administratorem tych danych
                pozostajesz Ty jako organizator zawodów.
            </p>
            <p>
                Szablony turniejów opisują wyłącznie przebieg zawodów — kolejność konkurencji
                i ich ustawienia. <strong>Przed wysłaniem usuwamy z nich nazwy zawodników</strong>,
                gdyby ktoś wpisał je w konfiguracji etapu.
            </p>

            <h2>5. Analityka użycia</h2>
            <p>
                Aplikacja i serwis korzystają z Google Analytics dla Firebase. Zbieramy zdarzenia
                opisujące sposób korzystania (na przykład rozpoczęcie gry, otwarcie ekranu), typ
                urządzenia i wersję systemu. Dane te służą wyłącznie do rozwoju produktu.
            </p>
            <p>
                Jeżeli jesteś zalogowany, do zdarzeń analitycznych dołączamy identyfikator Twojego
                konta oraz informację, czy ma ono dostęp Premium. Pozwala nam to zobaczyć, które
                funkcje są faktycznie używane. Do analityki{' '}
                <strong>nigdy nie trafia Twój adres e-mail</strong> ani nazwiska zawodników
                wpisanych do turnieju. Po wylogowaniu powiązanie zdarzeń z kontem jest usuwane.
            </p>
            <p>
                <strong>Nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym
                przetwarzaniu</strong>, w tym profilowaniu, które wywoływałyby wobec Ciebie skutki
                prawne lub w podobny sposób istotnie na Ciebie wpływały.
            </p>

            <h2>6. Cele i podstawy prawne przetwarzania</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cel</th>
                        <th>Podstawa prawna (RODO)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>prowadzenie konta i udostępnianie funkcji Premium</td>
                        <td>art. 6 ust. 1 lit. b — wykonanie umowy</td>
                    </tr>
                    <tr>
                        <td>synchronizacja ustawień między urządzeniami</td>
                        <td>art. 6 ust. 1 lit. b — wykonanie umowy</td>
                    </tr>
                    <tr>
                        <td>weryfikacja ważności wykupionego dostępu Premium</td>
                        <td>art. 6 ust. 1 lit. b — wykonanie umowy</td>
                    </tr>
                    <tr>
                        <td>obsługa zapytań z formularza kontaktowego</td>
                        <td>art. 6 ust. 1 lit. f — nasz prawnie uzasadniony interes</td>
                    </tr>
                    <tr>
                        <td>analityka i poprawa działania produktu</td>
                        <td>art. 6 ust. 1 lit. f — nasz prawnie uzasadniony interes</td>
                    </tr>
                    <tr>
                        <td>bezpieczeństwo kont i przeciwdziałanie nadużyciom</td>
                        <td>art. 6 ust. 1 lit. f — nasz prawnie uzasadniony interes</td>
                    </tr>
                    <tr>
                        <td>ustalenie, dochodzenie lub obrona roszczeń</td>
                        <td>art. 6 ust. 1 lit. f — nasz prawnie uzasadniony interes</td>
                    </tr>
                    <tr>
                        <td>rozliczenia i obowiązki podatkowe</td>
                        <td>art. 6 ust. 1 lit. c — obowiązek prawny</td>
                    </tr>
                </tbody>
            </table>

            <h2>7. Komu powierzamy dane</h2>
            <p>
                Nie sprzedajemy danych i nie udostępniamy ich do celów marketingowych podmiotów
                trzecich. Korzystamy z następujących dostawców, którzy przetwarzają dane
                na nasze zlecenie:
            </p>
            <ul>
                <li>
                    <strong>Google Ireland Limited</strong> — uwierzytelnianie kont, kopia ustawień
                    w chmurze oraz analityka,
                </li>
                <li><strong>Vercel Inc.</strong> — hosting serwisu aimora.pl,</li>
                <li><strong>Resend</strong> — dostarczanie wiadomości z formularza kontaktowego.</li>
            </ul>
            <p>
                Dane mogą być przekazywane poza Europejski Obszar Gospodarczy, w szczególności do
                Stanów Zjednoczonych. Odbywa się to w oparciu o decyzję Komisji Europejskiej
                o odpowiednim stopniu ochrony albo o standardowe klauzule umowne wraz z dodatkowymi
                zabezpieczeniami.
            </p>

            <h2>8. Bezpieczeństwo danych</h2>
            <p>
                Stosujemy środki techniczne i organizacyjne odpowiadające ryzyku, o których mowa
                w art. 32 RODO. Dostęp do danych kont mają wyłącznie osoby, którym jest to niezbędne,
                a transmisja między aplikacją a naszymi usługami jest szyfrowana.
            </p>
            <p>
                Ze względów bezpieczeństwa nie ujawniamy szczegółów zastosowanych zabezpieczeń.
                Jeżeli dojdzie do naruszenia ochrony danych, które może powodować wysokie ryzyko
                naruszenia Twoich praw lub wolności, poinformujemy Cię o tym bez zbędnej zwłoki.
            </p>

            <h2>9. Jak długo przechowujemy dane</h2>
            <ul>
                <li>
                    <strong>Dane konta</strong> — do czasu usunięcia konta. Usunięcie kończymy
                    najpóźniej w ciągu 30 dni; po tym czasie danych nie da się odtworzyć.
                </li>
                <li>
                    <strong>Korespondencja</strong> — przez okres potrzebny do obsługi sprawy,
                    a następnie do upływu terminu przedawnienia ewentualnych roszczeń.
                </li>
                <li>
                    <strong>Dokumenty rozliczeniowe</strong> — przez okres wymagany przepisami
                    podatkowymi, liczony od końca roku podatkowego, którego dotyczą.
                </li>
                <li>
                    <strong>Dane analityczne</strong> — zgodnie z okresem retencji ustawionym
                    w Google Analytics dla Firebase, w formie niepowiązanej z Twoim kontem.
                </li>
            </ul>

            <h2>10. Twoje prawa</h2>
            <p>Przysługuje Ci prawo do:</p>
            <ul>
                <li>dostępu do swoich danych i otrzymania ich kopii,</li>
                <li>sprostowania danych nieprawidłowych,</li>
                <li>usunięcia danych,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>przenoszenia danych,</li>
                <li>
                    wniesienia sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym
                    interesie,
                </li>
                <li>
                    cofnięcia zgody, jeżeli przetwarzanie odbywa się na jej podstawie — bez wpływu
                    na zgodność z prawem przetwarzania sprzed jej cofnięcia,
                </li>
                <li>
                    wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2,
                    00-193 Warszawa.
                </li>
            </ul>
            <p>
                Wnioski realizujemy bez zbędnej zwłoki, nie później niż w terminie miesiąca od ich
                otrzymania. W sprawach skomplikowanych termin ten może zostać przedłużony, o czym
                Cię poinformujemy.
            </p>

            <h3>Jak usunąć konto</h3>
            <p>
                Konto usuniesz w aplikacji: menu boczne, <strong>Konto</strong>,{' '}
                <strong>Usuń konto</strong>, potwierdzenie hasłem. Możesz też napisać na{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>. Szczegóły — zakres usuwanych
                danych, terminy i to, co pozostaje na urządzeniu — opisuje strona{' '}
                <a href="/usuniecie-konta">usunięcie konta</a>.
            </p>

            <h2>11. Dobrowolność podania danych</h2>
            <p>
                Podanie danych jest dobrowolne. Bez adresu e-mail nie jest jednak możliwe założenie
                konta, a tym samym korzystanie z funkcji Premium i kopii ustawień w chmurze.
                Wszystkie pozostałe funkcje aplikacji działają bez konta.
            </p>

            <h2>12. Wiek użytkownika</h2>
            <p>
                Konto w aplikacji mogą zakładać osoby, które ukończyły 16 lat. Osoby młodsze mogą
                korzystać z aplikacji bez konta albo na koncie założonym przez opiekuna.
            </p>

            <h2>13. Pliki cookies i podobne technologie</h2>
            <p>
                Serwis aimora.pl używa plików cookies oraz podobnych technologii niezbędnych do jego
                prawidłowego działania, a także narzędzi analitycznych opisanych w punkcie 5.
            </p>
            <p>
                Cookies niezbędne stosujemy na podstawie naszego prawnie uzasadnionego interesu.
                Zapisywanie i odczyt informacji na Twoim urządzeniu w celach innych niż niezbędne
                wymaga Twojej zgody, którą możesz w każdej chwili wycofać. Ustawienia dotyczące
                plików cookies zmienisz również w swojej przeglądarce; ograniczenie ich obsługi może
                wpłynąć na działanie serwisu.
            </p>

            <h2>14. Zmiany polityki</h2>
            <p>
                Politykę możemy aktualizować, gdy zmieni się sposób działania aplikacji lub serwisu.
                Aktualna wersja jest zawsze dostępna pod tym adresem, a data jej obowiązywania widnieje
                na górze strony. O istotnych zmianach dotyczących kont poinformujemy na adres e-mail
                przypisany do konta.
            </p>
        </LegalLayout>
    );
}
