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
            updatedLabel="Obowiązuje od 30 sierpnia 2026 r."
            footer={<Footer />}
        >
            <h2>1. Kto jest administratorem Twoich danych</h2>
            <p>
                Administratorem danych osobowych jest <strong>Dawid Ostrowski prowadzący działalność
                gospodarczą pod nazwą „DAVOSS”</strong>, ul. Leszczynowa 14, 87-125 Osiek nad Wisłą,
                NIP: 956-22-50-675.
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
                            przechowywane wyłącznie w postaci nieodwracalnego skrótu po stronie
                            Firebase Authentication — <strong>nie znamy Twojego hasła i nie mamy do
                            niego dostępu</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>identyfikator konta oraz informacja, czy adres e-mail został potwierdzony</td>
                        <td>tworzone automatycznie przy rejestracji</td>
                    </tr>
                    <tr>
                        <td>data ostatniego użycia aplikacji i numer wersji aplikacji</td>
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
                        <td>
                            liczba zakończonych turniejów i data ostatniego z nich
                        </td>
                        <td>
                            zliczane w aplikacji, żebyśmy widzieli, czy dostęp Premium jest
                            faktycznie wykorzystywany; nie zapisujemy ani nazw turniejów, ani
                            danych zawodników
                        </td>
                    </tr>
                    <tr>
                        <td>
                            rozbieżność między zegarem Twojego urządzenia a czasem naszego serwera
                        </td>
                        <td>
                            zapisywana wyłącznie wtedy, gdy przekracza dobę — służy do weryfikacji
                            ważności dostępu Premium i do pomocy technicznej
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
                i ich ustawienia. <strong>Przed wysłaniem czyścimy z nich nazwy zawodników</strong>,
                gdyby ktoś wpisał je w konfiguracji etapu.
            </p>

            <h2>5. Analityka użycia</h2>
            <p>
                Aplikacja i serwis korzystają z Google Analytics dla Firebase. Zbieramy zdarzenia
                opisujące sposób korzystania (na przykład rozpoczęcie gry, otwarcie ekranu), typ
                urządzenia i wersję systemu. Dane te służą wyłącznie do rozwoju produktu i nie są
                wykorzystywane do profilowania wywołującego skutki prawne.
            </p>
            <p>
                Jeżeli jesteś zalogowany, do zdarzeń analitycznych dołączamy identyfikator Twojego
                konta oraz informację, czy ma ono dostęp Premium. Pozwala nam to zobaczyć, które
                funkcje są faktycznie używane. Do analityki{" "}
                <strong>nigdy nie trafia Twój adres e-mail</strong> ani nazwiska zawodników
                wpisanych do turnieju. Po wylogowaniu powiązanie zdarzeń z kontem jest usuwane.
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
                        <td>weryfikacja ważności wykupionego dostępu Premium</td>
                        <td>art. 6 ust. 1 lit. b — wykonanie umowy</td>
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
                    <strong>Google Ireland Limited</strong> — Firebase Authentication, Cloud Firestore
                    i Google Analytics dla Firebase (konta, kopia ustawień, analityka),
                </li>
                <li><strong>Vercel Inc.</strong> — hosting serwisu aimora.pl,</li>
                <li><strong>Resend</strong> — dostarczanie wiadomości z formularza kontaktowego.</li>
            </ul>
            <p>
                Dane mogą być przekazywane poza Europejski Obszar Gospodarczy, w szczególności do
                Stanów Zjednoczonych. Odbywa się to w oparciu o standardowe klauzule umowne
                zatwierdzone przez Komisję Europejską lub decyzję o odpowiednim stopniu ochrony.
            </p>

            <h2>8. Jak długo przechowujemy dane</h2>
            <ul>
                <li>
                    <strong>Dane konta</strong> — do czasu usunięcia konta. Po usunięciu znikają wraz
                    z kopią ustawień w chmurze i nie da się ich odtworzyć.
                </li>
                <li>
                    <strong>Korespondencja</strong> — przez okres potrzebny do obsługi sprawy,
                    a następnie do upływu terminu przedawnienia ewentualnych roszczeń.
                </li>
                <li>
                    <strong>Dokumenty rozliczeniowe</strong> — przez okres wymagany przepisami
                    podatkowymi.
                </li>
                <li>
                    <strong>Dane analityczne</strong> — zgodnie z okresem retencji ustawionym
                    w Google Analytics dla Firebase.
                </li>
            </ul>

            <h2>9. Twoje prawa</h2>
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
                <li>cofnięcia zgody, jeżeli przetwarzanie odbywa się na jej podstawie,</li>
                <li>
                    wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2,
                    00-193 Warszawa.
                </li>
            </ul>

            <h3>Jak samodzielnie usunąć konto</h3>
            <p>
                W aplikacji otwórz menu boczne, wybierz <strong>Konto</strong>, a następnie
                <strong> Usuń konto</strong> i potwierdź hasłem. Operacja jest natychmiastowa
                i nieodwracalna. Dane zapisane wyłącznie na urządzeniu, w tym historia turniejów,
                pozostają nienaruszone. Możesz też napisać na{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>

            <h2>10. Dobrowolność podania danych</h2>
            <p>
                Podanie danych jest dobrowolne. Bez adresu e-mail nie jest jednak możliwe założenie
                konta, a tym samym korzystanie z funkcji Premium i kopii ustawień w chmurze.
                Wszystkie pozostałe funkcje aplikacji działają bez konta.
            </p>

            <h2>11. Wiek użytkownika</h2>
            <p>
                Konto w aplikacji mogą zakładać osoby, które ukończyły 16 lat. Osoby młodsze mogą
                korzystać z aplikacji bez konta albo na koncie założonym przez opiekuna.
            </p>

            <h2>12. Pliki cookies w serwisie</h2>
            <p>
                Serwis aimora.pl używa plików cookies niezbędnych do jego działania oraz cookies
                analitycznych powiązanych z Google Analytics dla Firebase. Ustawienia cookies możesz
                w każdej chwili zmienić w swojej przeglądarce.
            </p>

            <h2>13. Zmiany polityki</h2>
            <p>
                Politykę możemy aktualizować, gdy zmieni się sposób działania aplikacji lub serwisu.
                Aktualna wersja jest zawsze dostępna pod tym adresem, a data jej obowiązywania widnieje
                na górze strony. O istotnych zmianach dotyczących kont poinformujemy na adres e-mail
                przypisany do konta.
            </p>
        </LegalLayout>
    );
}
