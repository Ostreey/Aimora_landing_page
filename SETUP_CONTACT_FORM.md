# Konfiguracja Formularza Kontaktowego

## Wymagane kroki do uruchomienia formularza kontaktowego

### 1. Utwórz konto w Resend

1. Idź na [resend.com](https://resend.com)
2. Zarejestruj się lub zaloguj
3. Przejdź do [API Keys](https://resend.com/api-keys)
4. Utwórz nowy klucz API

### 2. Skonfiguruj zmienne środowiskowe

Dodaj te zmienne w Vercel Dashboard lub w lokalnym pliku `.env.local`:

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Twój email gdzie będą przychodzić wiadomości
CONTACT_EMAIL=twoj-email@example.com
```

### 3. Zweryfikuj domenę (opcjonalnie, ale zalecane)

1. W panelu Resend przejdź do "Domains"
2. Dodaj swoją domenę (np. yourdomain.com)
3. Skonfiguruj rekordy DNS zgodnie z instrukcjami
4. Zaktualizuj `from` adres w `src/app/api/contact/route.ts`:

```typescript
from: 'Aimora Website <noreply@yourdomain.com>', // Zmień na swoją domenę
```

### 4. Testowanie

Po skonfigurowaniu:

1. Uruchom aplikację
2. Kliknij przycisk "Zamów" lub "Zamów teraz"
3. Wypełnij formularz
4. Sprawdź czy email dotarł na podany adres

## Alternatywne rozwiązania

Jeśli wolisz inne usługi emailowe:

### EmailJS (łatwiejsze, działa po stronie klienta)
- Nie wymaga API route
- Bezpłatne do 200 emaili/miesiąc
- Konfiguracja tylko w przeglądarce

### Nodemailer z Gmail
- Wymaga hasła aplikacji Gmail
- Bardziej skomplikowane w konfiguracji
- Może mieć problemy z bezpieczeństwem

### SendGrid
- Podobne do Resend
- Wymaga weryfikacji domeny
- Ma bezpłatny plan

## Struktura formularza

Formularz zawiera pola:
- **Imię** (wymagane)
- **Email** (wymagane, z walidacją)
- **Telefon** (opcjonalne)
- **Treść zapytania** (wymagane, min. 10 znaków)

## Funkcjonalności

- ✅ Walidacja po stronie klienta
- ✅ Ładne animacje i UX
- ✅ Tracking z Firebase Analytics
- ✅ Responsive design
- ✅ Stan sukcesu/błędu
- ✅ Automatyczne zamykanie po wysłaniu
- ✅ Ładny email HTML z brandingiem Aimora 