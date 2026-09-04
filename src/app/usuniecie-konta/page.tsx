import { Footer } from '@/components/Footer';
import { LegalLayout } from '@/components/LegalLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Usunięcie konta | Aimora',
    description: 'Jak usunąć konto w aplikacji Aimora, jakie dane zostaną skasowane, co zostaje na urządzeniu i jak złożyć żądanie bez aplikacji.',
    robots: { index: true, follow: true },
    alternates: {
        canonical: '/usuniecie-konta',
        languages: {
            'pl': '/usuniecie-konta',
            'en': '/en/account-deletion',
        },
    },
};

export default function UsuniecieKontaPage() {
    return (
        <LegalLayout
            title="Usunięcie konta"
            updatedLabel="Obowiązuje od 4 września 2026 r."
            footer={<Footer />}
        >
            <p>
                Ta strona opisuje, jak usunąć konto w aplikacji mobilnej <strong>Aimora</strong>
                i jakie dane zostaną przy tym skasowane.
            </p>
            <p>
                Konto jest w aplikacji <strong>opcjonalne</strong>. Cztery tryby gry — Trening,
                Time Attack, Max Hits i Zakładnik — a także obsługa detektorów, wybór języka
                i motywu działają bez zakładania konta i bez logowania.
            </p>

            <h2>1. Usunięcie konta w aplikacji</h2>
            <p>Jeśli masz aplikację zainstalowaną, to najszybsza droga:</p>
            <ol>
                <li>otwórz menu boczne i wybierz <strong>Konto</strong>,</li>
                <li>przewiń na dół ekranu i wybierz <strong>Usuń konto</strong>,</li>
                <li>potwierdź operację swoim hasłem.</li>
            </ol>
            <p>
                Hasło jest wymagane, bo Firebase prosi o ponowne uwierzytelnienie przed
                nieodwracalnymi operacjami. Chroni to konto przed usunięciem przez kogoś,
                kto sięgnie po odblokowany telefon.
            </p>

            <h2>2. Usunięcie konta bez aplikacji</h2>
            <p>
                Jeśli aplikacja została już odinstalowana albo nie możesz się zalogować, napisz
                na adres <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a> z tematem{' '}
                <strong>„Usunięcie konta Aimora”</strong>.
            </p>
            <p>
                W treści podaj <strong>adres e-mail, na który konto zostało założone</strong>. Żądanie
                realizujemy z tego samego adresu, z którego przyszło — dzięki temu nikt obcy nie
                usunie cudzego konta. Jeśli piszesz z innego adresu, poprosimy o potwierdzenie.
            </p>

            <h2>3. Jakie dane zostaną usunięte</h2>
            <p>Usunięcie konta kasuje wszystko, co przechowujemy w chmurze:</p>
            <ul>
                <li>dane logowania — adres e-mail i hasło,</li>
                <li>
                    profil konta — data założenia, data ostatniego logowania, wersja aplikacji
                    i licznik zakończonych turniejów,
                </li>
                <li>status licencji premium wraz z datą jej nadania,</li>
                <li>
                    kopię ustawień w chmurze — domyślną liczbę detektorów, zdefiniowane przez
                    Ciebie kolory, nazwy nadane detektorom i szablony turniejów.
                </li>
            </ul>
            <p>Operacja jest nieodwracalna. Nie da się przywrócić konta ani odzyskać kopii ustawień.</p>

            <h2>4. Co zostaje na Twoim urządzeniu</h2>
            <p>
                Historia rozegranych zawodów, nazwiska zawodników, wyniki i logo organizatora
                <strong> nigdy nie trafiają na nasze serwery</strong> — żyją wyłącznie w pamięci
                telefonu lub tabletu. Usunięcie konta ich nie dotyczy, bo nie mamy do nich dostępu.
            </p>
            <p>
                Żeby skasować także te dane, <strong>odinstaluj aplikację</strong> albo wyczyść jej
                dane w ustawieniach systemu Android (Ustawienia → Aplikacje → Aimora → Pamięć →
                Wyczyść dane).
            </p>

            <h2>5. Co zachowujemy mimo usunięcia konta</h2>
            <p>Po usunięciu konta zostają wyłącznie dane, do których zobowiązuje nas prawo:</p>
            <ul>
                <li>
                    <strong>dokumenty księgowe</strong> — faktury i dowody sprzedaży sprzętu lub
                    licencji przechowujemy przez 5 lat od końca roku podatkowego, zgodnie z ustawą
                    o rachunkowości i Ordynacją podatkową,
                </li>
                <li>
                    <strong>korespondencję</strong> — do czasu przedawnienia ewentualnych roszczeń
                    z zawartej umowy,
                </li>
                <li>
                    <strong>statystyki użycia aplikacji</strong> — pozbawione powiązania z Twoją
                    osobą, w formie, która nie pozwala ustalić, kogo dotyczyły.
                </li>
            </ul>
            <p>
                Te dane nie służą już do obsługi konta i nie są wykorzystywane do kontaktu z Tobą.
                Podstawę prawną ich przechowywania opisuje{' '}
                <a href="/polityka-prywatnosci">polityka prywatności</a>.
            </p>

            <h2>6. Ile to trwa</h2>
            <p>
                Konto i dane logowania znikają <strong>natychmiast</strong> po potwierdzeniu operacji
                w aplikacji. Pozostałe dane w chmurze usuwamy <strong>najpóźniej w ciągu 30 dni</strong>,
                a żądania przesłane e-mailem realizujemy w tym samym terminie.
            </p>

            <h2>7. Kontakt</h2>
            <p>
                Administratorem danych jest <strong>Aimora</strong>.
            </p>
            <p>
                W sprawach dotyczących usunięcia konta i danych osobowych pisz na adres{' '}
                <a href="mailto:biuro@aimora.pl">biuro@aimora.pl</a>.
            </p>
        </LegalLayout>
    );
}
