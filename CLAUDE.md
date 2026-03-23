# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aimora landing page — a bilingual (Polish/English) marketing site for interactive shooting targets. Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and deployed on **Vercel**.

## What is Aimora ?

Full description of what is Aimora you can find in file /Aimora_Onboarding_Manager.md

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
- Almost all components are client components (`'use client'`) due to heavy use of animations and interactivity
- Path aliases: `@/*` → `./src/*`, `@/components/*`, `@/lib/*`

### Key Integrations

- **Firebase** (`src/lib/firebase.ts`): analytics tracking with `trackCTAClick()`, `trackYouTubeVideoStarted()`, `trackFormSend()`, etc. Debug mode flag for development.
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
