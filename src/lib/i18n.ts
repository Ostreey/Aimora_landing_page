export type Locale = 'pl' | 'en'

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pl'
}

export function isLocaleHomePath(pathname: string): boolean {
  return pathname === '/' || pathname === '/en'
}

export function getLocalizedHomePath(locale: Locale): string {
  return locale === 'en' ? '/en' : '/'
}

export function getLocalizedRentalPath(locale: Locale): string {
  return locale === 'en' ? '/en/rental' : '/wypozyczenie'
}

export function getAlternateLocalePath(pathname: string, targetLocale: Locale): string {
  if (pathname === '/' || pathname === '/en') {
    return targetLocale === 'en' ? '/en' : '/'
  }
  if (pathname === '/wypozyczenie' || pathname === '/en/rental') {
    return targetLocale === 'en' ? '/en/rental' : '/wypozyczenie'
  }

  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  if (targetLocale === 'en') {
    return normalized.startsWith('/en/') ? normalized : `/en${normalized}`
  }
  return normalized.startsWith('/en/') ? normalized.slice(3) || '/' : normalized
}

