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
- **Premium messaging** (decision by Marta, 2026-09-05): the free/premium split lives only in the "Aplikacja mobilna" section, as a block under the feature cards. The hierarchy is fixed — first "works without an account", then the named free modes, and only last the account for ranges and clubs; the free part must outweigh the account part visually. No licence price on the site (sales are manual, after an invoice — the price lives in the PDF offer and e-mail), no free-vs-premium comparison table, no padlock icons, and none of the words "abonament", "subskrypcja", "plan", "upgrade". No second orange CTA either: `#FF6B35` stays reserved for "ZAMÓW", so the account block links to `#cta` with a plain cyan text link.
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
