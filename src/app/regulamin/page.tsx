import { Footer } from '@/components/Footer';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Regulamin | Aimora',
    description: 'Zasady korzystania z aplikacji Aimora, zakładania konta oraz wykupienia i działania wersji Premium.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/regulamin',
        languages: {
            'pl': '/regulamin',
            'en': '/en/terms',
        },
    },
};

export default function RegulaminPage() {
    return (
        <LegalLayout
            title="Regulamin aplikacji Aimora"
            updatedLabel="Obowiązuje od 30 sierpnia 2026 r."
            footer={<Footer />}
        >
            <h2>1. Kto świadczy usługę</h2>
            <p>
                Usługodawcą jest <strong>Aimora</strong>, kontakt:{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>

            <h2>2. Czego dotyczy regulamin</h2>
            <p>
                Regulamin określa zasady korzystania z aplikacji mobilnej Aimora, zakładania konta
                oraz wykupienia i działania wersji Premium. Nie dotyczy sprzedaży sprzętu — tę regulują
                odrębne umowy i dokumenty sprzedaży.
            </p>

            <h2>3. Wersja darmowa i wersja Premium</h2>
            <p>
                Aplikacja działa <strong>bez konta i bez opłat</strong>. Bez konta dostępne są:
            </p>
            <ul>
                <li>tryby gry: Łatwy Trening, Time Attack, Max Hits oraz Zakładnik,</li>
                <li>
                    pełna obsługa sprzętu: łączenie detektorów, nadawanie im nazw, kalibracja
                    czujnika, ustawienia oświetlenia i aktualizacja oprogramowania detektorów,
                </li>
                <li>wybór języka i motywu,</li>
                <li>zapamiętywanie ustawień gier na danym urządzeniu,</li>
                <li>
                    przeglądanie historii rozegranych turniejów wraz z tabelą generalną — również
                    po wygaśnięciu dostępu Premium.
                </li>
            </ul>
            <p><strong>Wersja Premium</strong> dodatkowo odblokowuje:</p>
            <ul>
                <li>tryby gry Pojedynek oraz Shoot-Off,</li>
                <li>tworzenie i prowadzenie turniejów wraz z szablonami zawodów,</li>
                <li>eksport wyników turnieju w postaci grafiki,</li>
                <li>kopię ustawień w chmurze i ich przenoszenie między urządzeniami.</li>
            </ul>

            <h2>4. Konto</h2>
            <ol>
                <li>Założenie konta jest dobrowolne i wymaga podania adresu e-mail oraz hasła.</li>
                <li>Hasło musi mieć co najmniej 8 znaków.</li>
                <li>
                    Adres e-mail podajesz dwa razy. To jedyna droga odzyskania hasła, więc
                    literówka oznacza konto, do którego nie da się już wrócić.
                </li>
                <li>
                    Podaj adres, do którego faktycznie masz dostęp — służy on do odzyskiwania hasła
                    i do kontaktu w sprawie dostępu Premium.
                </li>
                <li>
                    Nie udostępniaj konta osobom trzecim. Odpowiadasz za działania podjęte
                    na Twoim koncie.
                </li>
                <li>
                    Konto możesz w każdej chwili usunąć w aplikacji: menu boczne →{' '}
                    <strong>Konto</strong> → <strong>Usuń konto</strong>. Usunięcie jest nieodwracalne
                    i kasuje kopię ustawień w chmurze. Dane zapisane na urządzeniu pozostają.
                </li>
            </ol>

            <h2>5. Jak wykupuje się wersję Premium</h2>
            <ol>
                <li>
                    <strong>W aplikacji nie ma sklepu ani płatności.</strong> Aplikacja nie zawiera
                    zakupów wewnętrznych ani automatycznie odnawianej subskrypcji.
                </li>
                <li>
                    Dostęp Premium wykupuje się kontaktując się z nami przez{' '}
                    <a href="https://aimora.pl">aimora.pl</a> lub pisząc na{' '}
                    <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>. Warunki, cenę i okres
                    obowiązywania ustalamy indywidualnie i potwierdzamy przed rozpoczęciem świadczenia.
                </li>
                <li>
                    Po opłaceniu przypisujemy dostęp do konta wskazanego adresem e-mail. Zmiana widoczna
                    jest w aplikacji na ekranie <strong>Konto</strong>.
                </li>
                <li>
                    Dostęp Premium nie odnawia się samoczynnie i nie pobieramy żadnych opłat
                    automatycznie.
                </li>
            </ol>

            <h2>6. Działanie Premium bez połączenia z internetem</h2>
            <p>
                Aplikacja jest używana na strzelnicach, gdzie często brakuje zasięgu. Po zalogowaniu
                zapamiętuje uprawnienia lokalnie i honoruje je <strong>przez 7 dni</strong> bez
                połączenia z internetem. Po tym czasie do dalszego korzystania z funkcji Premium
                konieczne jest jednorazowe połączenie z siecią.
            </p>
            <p>
                Po <strong>2 dniach</strong> bez potwierdzenia aplikacja wyświetla przypomnienie
                o połączeniu z internetem. Przypomnienie niczego nie blokuje — wszystkie funkcje
                działają do upływu 7 dni.
            </p>
            <p>
                Aplikacja porównuje zegar urządzenia z czasem naszego serwera. Ustawienie w urządzeniu
                nieprawidłowej daty w celu obejścia weryfikacji dostępu stanowi naruszenie punktu 9
                niniejszego regulaminu.
            </p>

            <h2>7. Co dzieje się po wygaśnięciu dostępu</h2>
            <p>
                Po wygaśnięciu Premium <strong>zachowujesz dostęp do historii rozegranych turniejów
                i tabel generalnych</strong>. Blokowane jest tworzenie i prowadzenie nowych turniejów,
                eksport grafik oraz tryby Pojedynek i Shoot-Off. Dane zapisane na urządzeniu nie są
                usuwane.
            </p>

            <h2>8. Wymagania techniczne</h2>
            <ul>
                <li>urządzenie z systemem Android 7.0 lub nowszym,</li>
                <li>obsługa Bluetooth Low Energy oraz włączona lokalizacja — wymagana przez system Android do wyszukiwania urządzeń Bluetooth,</li>
                <li>
                    połączenie z internetem — wyłącznie do zakładania konta, logowania, kopii ustawień
                    i aktualizacji oprogramowania detektorów.
                </li>
            </ul>

            <h2>9. Zasady korzystania</h2>
            <ol>
                <li>
                    Aplikacja służy do treningu strzeleckiego z użyciem sprzętu Aimora. Korzystaj z niej
                    zgodnie z prawem i regulaminem obiektu, na którym strzelasz.
                </li>
                <li>
                    Zasady bezpieczeństwa posługiwania się bronią i sprzętem opisuje instrukcja obsługi.
                    Aplikacja nie zastępuje szkolenia ani nadzoru osoby uprawnionej.
                </li>
                <li>
                    Nie ingeruj w kod aplikacji, nie omijaj zabezpieczeń dostępu i nie podejmuj działań
                    zakłócających jej funkcjonowanie.
                </li>
                <li>
                    Jeżeli wprowadzasz do turnieju dane zawodników, odpowiadasz za podstawę prawną ich
                    przetwarzania. Dane te pozostają na Twoim urządzeniu i nie są nam przekazywane.
                </li>
            </ol>

            <h2>10. Prawo odstąpienia — dotyczy konsumentów</h2>
            <p>
                Jeżeli wykupujesz Premium jako konsument albo przedsiębiorca na prawach konsumenta,
                masz prawo odstąpić od umowy w terminie <strong>14 dni</strong> bez podania przyczyny.
                Oświadczenie wyślij na <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>
            <p>
                Jeżeli poprosisz o uruchomienie dostępu przed upływem tego terminu i wyrazisz na to
                wyraźną zgodę, przyjmując do wiadomości utratę prawa odstąpienia po pełnym wykonaniu
                usługi, prawo to wygasa z chwilą pełnego wykonania. W razie odstąpienia w trakcie
                świadczenia zapłacisz za część usługi zrealizowaną do momentu odstąpienia.
            </p>

            <h2>11. Reklamacje</h2>
            <ol>
                <li>
                    Reklamacje zgłaszaj na <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>. Opisz
                    problem, podaj adres e-mail konta, model urządzenia i wersję aplikacji.
                </li>
                <li>Odpowiadamy w terminie do 14 dni od otrzymania zgłoszenia.</li>
                <li>
                    Konsument może skorzystać z pozasądowych sposobów rozpatrywania reklamacji,
                    w tym z unijnej platformy ODR:{' '}
                    <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">
                        ec.europa.eu/consumers/odr
                    </a>.
                </li>
            </ol>

            <h2>12. Odpowiedzialność</h2>
            <p>
                Dokładamy starań, aby aplikacja działała poprawnie i bez przerw. Nie odpowiadamy
                za niedostępność wynikającą z awarii po stronie dostawców zewnętrznych, braku zasięgu
                ani z działania urządzenia użytkownika. Nie ograniczamy odpowiedzialności w zakresie,
                w jakim przepisy prawa na to nie zezwalają — dotyczy to w szczególności szkód
                wyrządzonych umyślnie oraz uprawnień konsumenta.
            </p>

            <h2>13. Zmiany regulaminu</h2>
            <p>
                Regulamin możemy zmienić z ważnych przyczyn: zmiany przepisów, zmiany zakresu funkcji
                lub zmiany sposobu świadczenia usługi. O zmianie poinformujemy z co najmniej
                14-dniowym wyprzedzeniem na adres e-mail przypisany do konta. Jeżeli nie akceptujesz
                zmian, możesz usunąć konto przed ich wejściem w życie.
            </p>

            <h2>14. Dane osobowe</h2>
            <p>
                Zasady przetwarzania danych opisuje{' '}
                <a href="/polityka-prywatnosci">Polityka prywatności</a>.
            </p>

            <h2>15. Prawo właściwe</h2>
            <p>
                W sprawach nieuregulowanych stosuje się prawo polskie. Niniejsze postanowienie nie
                pozbawia konsumenta ochrony wynikającej z bezwzględnie obowiązujących przepisów państwa
                jego zwykłego pobytu.
            </p>
        </LegalLayout>
    );
}
