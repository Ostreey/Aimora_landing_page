export type Sku = 'single' | 'bundle' | 'reflectors';

export type PriceLocale = 'pl' | 'en';

export interface LocalePricing {
    currency: string;
    currencyCode: string;
    amounts: Record<Sku, number>;
    additionalTarget: number;
}

export const BUNDLE_SIZE = 4;

export const PRICING: Record<PriceLocale, LocalePricing> = {
    pl: {
        currency: 'zł',
        currencyCode: 'PLN',
        amounts: {
            single: 350,
            bundle: 1169,
            reflectors: 20,
        },
        additionalTarget: 292,
    },
    en: {
        currency: 'EUR',
        currencyCode: 'EUR',
        amounts: {
            single: 99,
            bundle: 329,
            reflectors: 5,
        },
        additionalTarget: 85,
    },
};

export function resolvePriceLocale(locale: unknown): PriceLocale {
    return locale === 'en' ? 'en' : 'pl';
}

export function getPricing(locale: PriceLocale): LocalePricing {
    return PRICING[locale];
}

export function getPrice(sku: Sku, locale: PriceLocale): number {
    return getPricing(locale).amounts[sku];
}

export function formatAmount(amount: number): string {
    return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function formatPrice(amount: number, locale: PriceLocale): string {
    return `${formatAmount(amount)} ${getPricing(locale).currency}`;
}

export function formatSkuPrice(sku: Sku, locale: PriceLocale): string {
    return formatPrice(getPrice(sku, locale), locale);
}

export function isSku(value: unknown): value is Sku {
    return value === 'single' || value === 'bundle' || value === 'reflectors';
}

export interface OrderTotal {
    sku: Sku;
    quantity: number;
    targetCount: number;
    unitPrice: number;
    total: number;
    isTiered: boolean;
    bundles: number;
    additionalTargets: number;
    currency: string;
    currencyCode: string;
    unitPriceFormatted: string;
    additionalTargetPriceFormatted: string;
    totalFormatted: string;
}

export function targetCountFor(sku: Sku, quantity: number): number {
    if (sku === 'single') return quantity;
    if (sku === 'bundle') return quantity * BUNDLE_SIZE;
    return 0;
}

export function totalForTargets(targetCount: number, locale: PriceLocale): number {
    const pricing = PRICING[locale];
    if (targetCount < BUNDLE_SIZE) {
        return targetCount * pricing.amounts.single;
    }
    const bundles = Math.floor(targetCount / BUNDLE_SIZE);
    const rest = targetCount % BUNDLE_SIZE;
    return bundles * pricing.amounts.bundle + rest * pricing.additionalTarget;
}

export function calculateOrderTotal(sku: unknown, quantity: unknown, locale: unknown): OrderTotal {
    const priceLocale = resolvePriceLocale(locale);
    const pricing = PRICING[priceLocale];
    const resolvedSku: Sku = isSku(sku) ? sku : 'single';
    const parsedQuantity = Number(quantity);
    const resolvedQuantity = Number.isFinite(parsedQuantity) ? Math.max(1, Math.floor(parsedQuantity)) : 1;
    const unitPrice = pricing.amounts[resolvedSku];
    const targetCount = targetCountFor(resolvedSku, resolvedQuantity);
    const flatTotal = unitPrice * resolvedQuantity;
    const total = targetCount > 0 ? totalForTargets(targetCount, priceLocale) : flatTotal;

    return {
        sku: resolvedSku,
        quantity: resolvedQuantity,
        targetCount,
        unitPrice,
        total,
        isTiered: total !== flatTotal,
        bundles: targetCount >= BUNDLE_SIZE ? Math.floor(targetCount / BUNDLE_SIZE) : 0,
        additionalTargets: targetCount >= BUNDLE_SIZE ? targetCount % BUNDLE_SIZE : 0,
        currency: pricing.currency,
        currencyCode: pricing.currencyCode,
        unitPriceFormatted: formatPrice(unitPrice, priceLocale),
        additionalTargetPriceFormatted: formatPrice(pricing.additionalTarget, priceLocale),
        totalFormatted: formatPrice(total, priceLocale),
    };
}

export function formatIsoPrice(sku: Sku, locale: PriceLocale): string {
    const pricing = PRICING[locale];
    return `${formatAmount(pricing.amounts[sku])} ${pricing.currencyCode}`;
}

export interface OfferPricing {
    price: string;
    priceCurrency: string;
}

export function getOfferPricing(sku: Sku, locale: PriceLocale): OfferPricing {
    const pricing = PRICING[locale];
    return {
        price: String(pricing.amounts[sku]),
        priceCurrency: pricing.currencyCode,
    };
}

export function formatDualPrice(sku: Sku): string {
    return `${formatIsoPrice(sku, 'pl')} / ${formatIsoPrice(sku, 'en')}`;
}

export function withPrices(template: string, locale: PriceLocale): string {
    return template.replace(
        /\{price:(single|bundle|reflectors)\}/g,
        (_match, sku: Sku) => formatSkuPrice(sku, locale)
    );
}
