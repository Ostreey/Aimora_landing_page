import { Footer } from '@/components/Footer';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ogólne Warunki Sprzedaży | Aimora',
    description: 'Warunki sprzedaży sprzętu Aimora dla strzelnic, fundacji i stowarzyszeń: gwarancja, dostawa, płatności i odpowiedzialność.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/warunki-sprzedazy',
        languages: {
            'pl': '/warunki-sprzedazy',
            'en': '/en/terms-of-sale',
        },
    },
};

export default function WarunkiSprzedazyPage() {
    return (
        <LegalLayout
            title="Ogólne Warunki Sprzedaży"
            updatedLabel="Obowiązują od 4 września 2026 r."
            footer={<Footer />}
        >
            <p>
                Sprzedawcą jest <strong>Aimora</strong>. Pełne dane identyfikacyjne i rozliczeniowe
                Sprzedawcy zawiera oferta oraz faktura. Kontakt:{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>

            <h2>§ 1. Zakres stosowania</h2>
            <ol>
                <li>
                    Niniejsze Ogólne Warunki Sprzedaży (dalej: <strong>„OWS"</strong>) stosuje się do
                    wszystkich umów sprzedaży elektronicznych celów treningowych systemu{' '}
                    <strong>Aimora</strong> oraz akcesoriów (dalej: <strong>„Sprzęt"</strong>),
                    zawieranych przez Sprzedawcę.
                </li>
                <li>
                    OWS stosuje się <strong>wyłącznie do sprzedaży na rzecz przedsiębiorców,
                    fundacji, stowarzyszeń i innych podmiotów instytucjonalnych</strong> (dalej:
                    „Kupujący"). Nie stosuje się ich do sprzedaży na rzecz konsumentów ani
                    przedsiębiorców, dla których zakup nie ma charakteru zawodowego.
                </li>
                <li>
                    OWS stanowią integralną część każdej umowy sprzedaży. Kupujący otrzymuje ich
                    treść wraz z ofertą albo potwierdzeniem zamówienia, a odbiór Sprzętu oznacza ich
                    akceptację.
                </li>
                <li>
                    Odmienne warunki Kupującego, w szczególności jego własne wzorce umowne,{' '}
                    <strong>nie wiążą Sprzedawcy</strong>, chyba że zostały przez niego wyraźnie
                    zaakceptowane na piśmie.
                </li>
                <li>Postanowienia indywidualnie uzgodnione na piśmie mają pierwszeństwo przed OWS.</li>
            </ol>

            <h2>§ 2. Zawarcie umowy</h2>
            <ol>
                <li>
                    Informacje o Sprzęcie zamieszczone na stronie aimora.pl i w materiałach
                    handlowych <strong>nie stanowią oferty</strong> w rozumieniu Kodeksu cywilnego,
                    lecz zaproszenie do zawarcia umowy.
                </li>
                <li>
                    Umowę uważa się za zawartą z chwilą potwierdzenia zamówienia przez Sprzedawcę
                    albo, w braku odrębnego potwierdzenia, <strong>z chwilą wystawienia faktury</strong>.
                </li>
                <li>
                    Terminy realizacji podawane przez Sprzedawcę są terminami przewidywanymi.
                    Sprzedawca poinformuje Kupującego o istotnym opóźnieniu bez zbędnej zwłoki.
                </li>
            </ol>

            <h2>§ 3. Ceny i płatność</h2>
            <ol>
                <li>
                    Ceny podawane są w złotych polskich. Jeżeli nie wskazano inaczej, są cenami
                    netto, do których dolicza się podatek VAT według stawki obowiązującej w dniu
                    wystawienia faktury.
                </li>
                <li>
                    Płatność następuje <strong>przelewem na rachunek wskazany na fakturze</strong>,
                    w terminie na niej określonym. Za dzień zapłaty uważa się dzień uznania rachunku
                    Sprzedawcy.
                </li>
                <li>
                    W razie opóźnienia w płatności Sprzedawcy przysługują <strong>odsetki ustawowe
                    za opóźnienie w transakcjach handlowych</strong>.
                </li>
                <li>
                    <strong>Sprzęt pozostaje własnością Sprzedawcy do chwili zapłaty całej
                    ceny</strong> (art. 589 Kodeksu cywilnego). Do tego czasu Kupujący nie może go
                    zbywać ani obciążać.
                </li>
            </ol>

            <h2>§ 4. Dostawa i przejście ryzyka</h2>
            <ol>
                <li>Dostawa następuje pod adres wskazany przez Kupującego albo przez odbiór osobisty.</li>
                <li>
                    <strong>Ryzyko utraty lub uszkodzenia Sprzętu przechodzi na Kupującego z chwilą
                    wydania go Kupującemu lub przewoźnikowi.</strong>
                </li>
                <li>
                    Kupujący zobowiązany jest zbadać przesyłkę przy odbiorze. Uszkodzenia
                    transportowe należy zgłosić w terminie <strong>3 dni roboczych</strong> od
                    odbioru, wraz z dokumentacją zdjęciową.
                </li>
            </ol>

            <h2>§ 5. Gwarancja</h2>
            <ol>
                <li>
                    Sprzedawca udziela na Sprzęt <strong>gwarancji jakości na okres 12 (dwunastu)
                    miesięcy</strong>, licząc od dnia wydania Sprzętu Kupującemu.
                </li>
                <li>
                    Gwarancja obejmuje <strong>wady materiałowe i produkcyjne</strong> ujawnione
                    w okresie gwarancji przy prawidłowym używaniu Sprzętu zgodnie z instrukcją
                    obsługi.
                </li>
                <li><strong>Gwarancja nie obejmuje w szczególności:</strong></li>
            </ol>
            <ul>
                <li>
                    uszkodzeń mechanicznych powstałych z przyczyn innych niż wada Sprzętu, w tym
                    uszkodzeń obudowy, modułu LED i detektora spowodowanych ostrzałem amunicją lub
                    z odległości niezgodnych z instrukcją obsługi,
                </li>
                <li>następstw używania Sprzętu niezgodnie z przeznaczeniem lub instrukcją obsługi,</li>
                <li>
                    uszkodzeń spowodowanych zalaniem, wilgocią, wysoką temperaturą lub czynnikami
                    atmosferycznymi, jeżeli Sprzęt nie był na nie odporny zgodnie ze specyfikacją,
                </li>
                <li>
                    następstw napraw, modyfikacji lub ingerencji w Sprzęt dokonanych przez osoby
                    inne niż Sprzedawca lub podmiot przez niego wskazany,
                </li>
                <li>normalnego zużycia eksploatacyjnego,</li>
                <li>
                    uszkodzeń powstałych po przejściu ryzyka na Kupującego z przyczyn leżących po
                    jego stronie.
                </li>
            </ul>
            <p>
                <strong>4.</strong> Ogniwa akumulatorowe objęte są gwarancją na zasadach ogólnych
                określonych w ust. 1. Stopniowy spadek pojemności ogniwa wraz z liczbą cykli
                ładowania jest normalnym zjawiskiem eksploatacyjnym i nie stanowi wady.
            </p>
            <p>
                <strong>5.</strong> Aktualizacje oprogramowania detektorów i aplikacji mobilnej
                udostępniane są nieodpłatnie w okresie gwarancji. Sprzedawca nie gwarantuje, że
                aplikacja będzie współpracowała z każdą wersją systemu Android ani z każdym modelem
                urządzenia mobilnego.
            </p>

            <h2>§ 6. Zgłaszanie i rozpatrywanie zgłoszeń gwarancyjnych</h2>
            <ol>
                <li>
                    Zgłoszenie gwarancyjne należy kierować na adres{' '}
                    <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>, podając numer faktury,
                    opis wady oraz — w miarę możliwości — dokumentację zdjęciową lub wideo.
                </li>
                <li>
                    Wadę należy zgłosić <strong>niezwłocznie po jej wykryciu, nie później niż
                    w terminie 14 dni</strong>.
                </li>
                <li>
                    Sprzedawca rozpatrzy zgłoszenie w terminie <strong>14 dni roboczych</strong> od
                    jego otrzymania, a w razie potrzeby dostarczenia Sprzętu — od dnia jego
                    otrzymania.
                </li>
                <li>
                    Sprzedawcy przysługuje <strong>wybór sposobu realizacji gwarancji</strong>:
                    naprawa Sprzętu, wymiana na wolny od wad albo zwrot ceny. Jeżeli naprawa lub
                    wymiana okażą się niemożliwe albo nadmiernie kosztowne, Sprzedawca zwróci cenę
                    wadliwego egzemplarza.
                </li>
                <li>
                    Koszty przesyłki Sprzętu do Sprzedawcy w ramach uzasadnionego zgłoszenia
                    gwarancyjnego ponosi Sprzedawca. W razie zgłoszenia nieuzasadnionego koszty
                    przesyłki w obie strony obciążają Kupującego.
                </li>
                <li>
                    Realizacja gwarancji <strong>nie przedłuża</strong> okresu gwarancji, z wyjątkiem
                    wymiany Sprzętu na nowy — wówczas okres biegnie od nowa dla wymienionego
                    egzemplarza.
                </li>
            </ol>

            <h2>§ 7. Wyłączenie rękojmi</h2>
            <ol>
                <li>
                    Na podstawie <strong>art. 558 § 1 Kodeksu cywilnego</strong> odpowiedzialność
                    Sprzedawcy z tytułu rękojmi za wady Sprzętu zostaje <strong>wyłączona
                    w całości</strong>.
                </li>
                <li>
                    Wyłączenie, o którym mowa w ust. 1, nie dotyczy sprzedaży na rzecz konsumentów
                    ani osób fizycznych zawierających umowę bezpośrednio związaną z ich
                    działalnością gospodarczą, gdy nie ma ona dla nich charakteru zawodowego.
                </li>
                <li>
                    Wyłączenie rękojmi <strong>nie ogranicza uprawnień Kupującego wynikających
                    z gwarancji</strong> udzielonej w § 5.
                </li>
            </ol>

            <h2>§ 8. Odpowiedzialność</h2>
            <ol>
                <li>
                    Odpowiedzialność Sprzedawcy z tytułu niewykonania lub nienależytego wykonania
                    umowy <strong>ograniczona jest do wysokości ceny netto Sprzętu</strong>, którego
                    dotyczy roszczenie.
                </li>
                <li>
                    Sprzedawca <strong>nie odpowiada za utracone korzyści</strong> Kupującego,
                    w szczególności za przychody nieosiągnięte wskutek niemożności przeprowadzenia
                    zawodów lub treningów.
                </li>
                <li>
                    Ograniczenia z ust. 1 i 2 <strong>nie mają zastosowania do szkody wyrządzonej
                    umyślnie</strong> (art. 473 § 2 Kodeksu cywilnego) ani do odpowiedzialności,
                    której zgodnie z prawem nie można wyłączyć ani ograniczyć.
                </li>
            </ol>

            <h2>§ 9. Dane osobowe</h2>
            <ol>
                <li>
                    Administratorem danych osobowych osób reprezentujących Kupującego i osób do
                    kontaktu jest Sprzedawca.
                </li>
                <li>
                    Dane przetwarzane są w celu zawarcia i wykonania umowy, realizacji gwarancji,
                    rozliczeń oraz ustalenia i dochodzenia roszczeń.
                </li>
                <li>
                    Szczegółowe informacje, w tym podstawy prawne, okresy przechowywania i prawa
                    osób, których dane dotyczą, zawiera{' '}
                    <a href="/polityka-prywatnosci">polityka prywatności</a>.
                </li>
            </ol>

            <h2>§ 10. Postanowienia końcowe</h2>
            <ol>
                <li>
                    W sprawach nieuregulowanych OWS stosuje się przepisy prawa polskiego,
                    w szczególności Kodeksu cywilnego.
                </li>
                <li>
                    Sądem właściwym do rozstrzygania sporów jest <strong>sąd właściwy miejscowo dla
                    siedziby Sprzedawcy</strong>.
                </li>
                <li>
                    Sprzedawca może zmienić OWS. Do umów zawartych przed zmianą stosuje się OWS
                    w brzmieniu obowiązującym w dniu zawarcia umowy.
                </li>
                <li>
                    Jeżeli którekolwiek postanowienie OWS okaże się nieważne, pozostałe
                    postanowienia zachowują moc, a w miejsce nieważnego stosuje się przepis prawa
                    najbliższy jego celowi gospodarczemu.
                </li>
            </ol>
        </LegalLayout>
    );
}
