# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aimora landing page — a bilingual (Polish/English) marketing site for interactive shooting targets. Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and deployed on **Vercel**.

## What is Aimora ?

Full description of what is Aimora you can find in file /docs/Aimora_Onboarding_Manager.md

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm start            # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check (tsc --noEmit)
```

## Architecture

### Routing & i18n

- App Router with file-based routing in `src/app/`
- Polish is the default locale at `/`, English at `/en`
- Custom i18n (no library): translations live in `src/lib/translations.ts`, locale is detected from pathname
- Rental/event pages: `/wypozyczenie` (PL), `/en/rental` (EN)

### Component Patterns

- **Localized variants**: many components have a `*Localized.tsx` counterpart (e.g., `Hero.tsx` / `HeroLocalized.tsx`) that uses `getTranslations()` for the English route
- Some Polish components still hardcode their text; that is legacy, not the pattern. `Roadmap.tsx`, `MobileAppSection.tsx` and `FeatureSection.tsx` are now thin wrappers rendering their `*Localized` variant with `locale="pl"`, so a copy change lands in `translations.ts` once instead of twice. Prefer converting a component to a wrapper over editing two copies of the same sentence
- Almost all components are client components (`'use client'`) due to heavy use of animations and interactivity
- Path aliases: `@/*` → `./src/*`, `@/components/*`, `@/lib/*`

### Content Rules

- **Only advertise what ships.** Game modes named on the site must exist in `ActiveGames.definitions` (`Shooting_buddy/.../game_configuration/models/GameConfiguration.kt`), and their labels must match `strings.xml` (`values-pl` for PL, `values` for EN). The site used to advertise Zombie and Rewolwerowiec, which were never implemented.
- **Roadmap:** a shipped feature belongs in `completed`, not in the future — a finished feature left on the roadmap reads as unavailable and costs sales. Dates double as React keys in the roadmap map, so they must stay unique and ascending.
- **Premium messaging** (decyzja Marty, 2026-09-05, zaktualizowana 2026-09-23): podział free/premium żyje wyłącznie w sekcji „Aplikacja mobilna", jako krótki blok pod kartami funkcji. **Strona nie wymienia imiennie, który tryb jest darmowy, a który wymaga konta** — granica premium jest przedmiotem otwartych decyzji i zmieni się co najmniej raz; lista nazw na stronie oznacza, że przy każdej zmianie zakresu strona kłamie o ofercie w dwóch językach do czasu poprawienia copy. Test rozstrzygający sporne sformułowania: **czy to zdanie przestanie być prawdą, jeśli jeden konkretny tryb zmieni stronę granicy? Jeśli tak — zakazane.** Hierarchia bloku: (1) **„działa od razu, bez konta i bez internetu"** — kupiony sprzęt strzela po wyjęciu z pudełka, bez rejestracji i bez zasięgu; (2) **co daje konto Aimora obiektowi**, opisane kategorią wartości (zawody i rywalizacja, wyniki do pokazania, ustawienia i szablony na wszystkich telefonach w obiekcie), nigdy listą nazw trybów; (3) **jak je uzyskać** — przy zamówieniu, wycena indywidualna do liczby celów. Przewaga części darmowej nie jest już budowana długością listy, tylko **kolejnością i objętością**: punkt (1) jest pierwszy, jest najdłuższy i mówi o zakupionym sprzęcie; punkty (2)–(3) razem nie przekraczają objętości punktu (1). Bez ceny licencji na stronie (sprzedaż jest ręczna, po fakturze — cena żyje w ofercie PDF i mailu), bez tabeli porównawczej free vs premium, bez ikon kłódki, bez wyliczania, czego w wersji bez konta „nie ma", i bez słów „abonament", „subskrypcja", „plan", „upgrade", „wersja darmowa/płatna", „licencja". Bez drugiego pomarańczowego CTA — `#FF6B35` zostaje zarezerwowany dla „ZAMÓW", więc blok o koncie linkuje do `#cta` zwykłym cyjanowym linkiem tekstowym.
- **„Tryb turniejowy" znaczy jedno** (2026-09-23): moduł turniejów round-robin dla całej grupy. Shoot-Off to osobna gra — trafianie własnych celów w zadanej kolejności, z wariantem jednoosobowym (min. 2 cele) i wieloosobowym (min. 4 cele, parzysta liczba) — i nie wolno go opisywać jako „trybu turniejowego". Kolizja tych dwóch znaczeń już raz powstała w karcie „Oprogramowanie" i czytała się jak sprzeczność między sąsiadującymi kartami. Sprawdzaj w `Shooting_buddy/app/src/main/res/values/strings.xml`, nie z pamięci.
- **Cennik ma jedno źródło prawdy: `src/lib/pricing.ts`** (2026-09-23). Żeby zmienić cenę, edytujesz tam tablicę `PRICING` (kwoty całkowite per locale: `single` / `bundle` / `reflectors` oraz `additionalTarget` — cena celu ponad zestaw) i nic poza tym — copy, JSON-LD, oba formularze, mail i `/llms.txt` biorą kwoty stamtąd przy buildzie. Kwot nie wpisuje się do `translations.ts`: proza używa placeholderów `{price:single}` wypełnianych przez `withPrices()`. Jedyne miejsce poza tym mechanizmem to artykuły w `content/blog/` (24 wystąpienia), gdzie cena stoi w zdaniu i zmienia się ręcznie. **Sumy zamówień nie liczy się mnożeniem ceny przez ilość** — od tego jest `totalForTargets()`: rabat progowy siedzi w zestawie 4 celów, więc `unitPrice × quantity` daje kwotę, której nikt nie wystawi (siedem celów wychodziło 2 450 zł albo 8 183 zł). Powód, dla którego to powstało: cena mieszkała w jedenastu miejscach, a rozjazd wyszedł dopiero w mailu z zamówieniem, który liczył zagraniczne zamówienia w złotówkach — ok. 20% poniżej tego, co widział klient.
- **Przełącznik języka bez flag** (2026-09-24): `LanguageSwitcher.tsx` pokazuje ikonę globusa z `lucide-react` i kody `PL` / `EN`, nigdy flag. Dwa powody, oba trwałe: flaga oznacza kraj, a nie język (angielski nie ma kraju, a sprzedajemy do UK, DE i FR — przy każdym nowym języku wraca pytanie „czyja flaga"), oraz **Windows nie renderuje emoji flag** — Segoe UI Emoji zamienia parę znaków regionalnych na litery, więc `🇺🇸` wyświetlało się dosłownie jako napis „US". Nie wstawiaj też emoji globusa `🌐` — wpada w tę samą pułapkę. Lista rozwijana ma sens dopiero od trzeciego języka; przy dwóch chowa wybór za kliknięciem.
- Facts the copy must not overrun: settings, target aliases and tournament templates sync to the cloud; **played-tournament history stays on the device**. There is no in-app purchase.

### Key Integrations

- **Firebase** (`src/lib/firebase.ts`): analytics tracking with `trackCTAClick()`, `trackYouTubeVideoStarted()`, `trackFormSend()`, etc. Debug mode flag for development.
  - **Rule:** When adding or modifying any feature, always add Firebase Analytics tracking for new user interactions (clicks, views, form submissions, navigation). Define tracking functions in `src/lib/firebase.ts` and call them in the relevant components. Events should include at least `device_type` and `event_category` parameters.
- **Resend** (`src/app/api/contact/route.ts`): POST API route for contact/order forms. Env vars needed: `RESEND_API_KEY`, `CONTACT_EMAIL`.
- **Framer Motion**, **React Spring**, **AOS**: animations throughout — scroll-triggered, physics-based, and tilt effects.

### Styling

- Tailwind utility-first exclusively (no CSS modules)
- Custom theme in `tailwind.config.js`: primary blue palette, secondary gray, custom fonts (Barlow Semi Condensed, Exo 2, Inter)
- Color scheme: dark background (#000), cyan accent (#00B2E3), orange CTA (#FF6B35)
- Custom animations defined in both `globals.css` and Tailwind config

### Static Assets

- `public/videos/vid.mp4` — promotional video
- `public/apk/app-release.apk` — Android APK download (custom headers in `next.config.js`)
- `public/images/`, `public/icons/` — product imagery and SVG icons

## Deployment

Vercel (configured in `vercel.json`): region `iad1`, max function duration 30s. Production build removes console statements via `next.config.js` compiler settings.
