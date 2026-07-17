'use client';

import { trackFormAbandoned, trackFormError, trackFormOpened, trackFormProductSelected, trackFormSend, trackFormStarted } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import { useEffect, useState } from 'react';

type ProductType = 'single' | 'bundle' | 'reflectors';

const PRICES: Record<string, { single: number; bundle: number; reflectors: number; currency: string }> = {
    pl: { single: 299, bundle: 999, reflectors: 20, currency: 'zł' },
    en: { single: 70, bundle: 235, reflectors: 5, currency: 'EUR' },
};

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    product: ProductType;
    quantity: number | string;
    message: string;
}

interface ContactFormLocalizedProps {
    locale: Locale;
    isOpen: boolean;
    onClose: () => void;
}

const INITIAL_FORM_DATA: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    product: 'single',
    quantity: 1,
    message: ''
};

export function ContactFormLocalized({ locale, isOpen, onClose }: ContactFormLocalizedProps) {
    const t = getTranslations(locale);
    const prices = PRICES[locale] ?? PRICES.pl;
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
    const [quantityInput, setQuantityInput] = useState<string>('1');
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const products: Record<ProductType, { price: number; name: string; description: string }> = {
        single: {
            price: prices.single,
            name: t.contactForm.productSingleName,
            description: t.contactForm.productSingleDesc,
        },
        bundle: {
            price: prices.bundle,
            name: t.contactForm.productBundleName,
            description: t.contactForm.productBundleDesc,
        },
        reflectors: {
            price: prices.reflectors,
            name: t.contactForm.productReflectorsName,
            description: t.contactForm.productReflectorsDesc,
        },
    };

    const product = products[formData.product];
    const quantityNumber = typeof formData.quantity === 'number' ? formData.quantity : 1;

    useEffect(() => {
        if (isOpen) {
            trackFormOpened();
        }
    }, [isOpen]);

    const handleFieldFocus = (fieldName: string) => {
        if (!hasStarted) {
            trackFormStarted(fieldName);
            setHasStarted(true);
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

        if (!formData.name.trim()) {
            newErrors.name = t.contactForm.nameRequired;
        }

        if (!formData.email.trim()) {
            newErrors.email = t.contactForm.emailRequired;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t.contactForm.emailInvalid;
        }

        const quantity = typeof formData.quantity === 'string' ? parseInt(formData.quantity, 10) : formData.quantity;
        if (!Number.isFinite(quantity) || quantity < 1) {
            newErrors.quantity = t.contactForm.quantityRequired;
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            trackFormError('validation', Object.keys(newErrors).join(','));
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                trackFormSend();
            } else {
                trackFormError('api', `http_${response.status}`);
                setSubmitError(t.contactForm.errorMessage);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            trackFormError('api', 'network');
            setSubmitError(t.contactForm.errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleProductSelect = (productType: ProductType) => {
        setFormData(prev => ({ ...prev, product: productType }));
        trackFormProductSelected(productType);
        handleFieldFocus('product');
    };

    const handleClose = () => {
        if (!isSubmitting) {
            if (!isSuccess) {
                const hadInput = hasStarted || formData.name.trim() !== '' || formData.email.trim() !== '';
                trackFormAbandoned(hadInput);
            }
            onClose();
            setTimeout(() => {
                setFormData(INITIAL_FORM_DATA);
                setQuantityInput('1');
                setErrors({});
                setIsSuccess(false);
                setHasStarted(false);
                setSubmitError('');
            }, 300);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="bg-gradient-to-r from-[#017da0] to-[#0299bb] text-white p-6 rounded-t-2xl">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-barlow font-bold">{t.contactForm.title}</h2>
                            <p className="text-white/90 text-sm mt-1">{t.contactForm.subtitle}</p>
                        </div>
                        <button
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="text-white/80 hover:text-white text-2xl leading-none disabled:opacity-50"
                        >
                            ×
                        </button>
                    </div>
                </div>

                {isSuccess && (
                    <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-barlow font-bold text-gray-900 mb-2">{t.contactForm.successTitle}</h3>
                        <p className="text-gray-600">{t.contactForm.successMessage}</p>
                        <button
                            onClick={handleClose}
                            className="mt-6 bg-[#017da0] text-white py-2 px-8 rounded-lg font-medium hover:bg-[#0299bb] transition-colors"
                        >
                            {t.contactForm.close}
                        </button>
                    </div>
                )}

                {!isSuccess && (
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* Product Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t.contactForm.chooseProduct} <span className="text-red-500">{t.contactForm.required}</span>
                            </label>
                            <div className="space-y-2">
                                {(Object.keys(products) as ProductType[]).map((productType) => {
                                    const p = products[productType];
                                    const isSelected = formData.product === productType;
                                    return (
                                        <button
                                            key={productType}
                                            type="button"
                                            onClick={() => handleProductSelect(productType)}
                                            disabled={isSubmitting}
                                            className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${isSelected
                                                ? 'border-[#017da0] bg-[#017da0]/5'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                                                        {p.name}
                                                        {productType === 'bundle' && (
                                                            <span className="text-xs font-bold text-white bg-[#FF6B35] rounded-full px-2 py-0.5">
                                                                {t.contactForm.youSave} {prices.single * 4 - prices.bundle} {prices.currency}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-0.5">{p.description}</div>
                                                </div>
                                                <div className="font-bold text-[#017da0] whitespace-nowrap ml-3">{p.price} {prices.currency}</div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quantity Field */}
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                {formData.product === 'single' ? t.contactForm.quantityLabel : t.contactForm.quantityBundleLabel} <span className="text-red-500">{t.contactForm.required}</span>
                            </label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={1}
                                    step={1}
                                    value={quantityInput}
                                    onFocus={() => handleFieldFocus('quantity')}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        setQuantityInput(inputValue);

                                        if (inputValue === '') {
                                            setFormData(prev => ({ ...prev, quantity: 1 }));
                                        } else {
                                            const val = parseInt(inputValue, 10);
                                            if (Number.isFinite(val) && val >= 1) {
                                                setFormData(prev => ({ ...prev, quantity: val }));
                                            }
                                        }

                                        if (errors.quantity) setErrors(prev => ({ ...prev, quantity: '' }));
                                    }}
                                    onBlur={(e) => {
                                        const val = parseInt(e.target.value, 10);
                                        if (!Number.isFinite(val) || val < 1) {
                                            setQuantityInput('1');
                                            setFormData(prev => ({ ...prev, quantity: 1 }));
                                        }
                                    }}
                                    className={`w-28 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
                                    disabled={isSubmitting}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                />
                                <div className="text-sm text-gray-700">
                                    <div>
                                        {t.contactForm.promoPrice}: <span className="font-semibold">{product.price} {prices.currency}</span> / {formData.product === 'single' ? t.contactForm.perSingle : t.contactForm.perBundle}
                                    </div>
                                    <div>
                                        {t.contactForm.total}: <span className="font-semibold">{product.price} {prices.currency} × {formData.quantity} = {product.price * quantityNumber} {prices.currency}</span>
                                    </div>
                                </div>
                            </div>
                            {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
                            <p className="text-sm text-[#017da0] font-medium mt-2">{t.contactForm.freeShipping}</p>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                {t.contactForm.nameLabel} <span className="text-red-500">{t.contactForm.required}</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onFocus={() => handleFieldFocus('name')}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder={t.contactForm.namePlaceholder}
                                disabled={isSubmitting}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                {t.contactForm.emailLabel} <span className="text-red-500">{t.contactForm.required}</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onFocus={() => handleFieldFocus('email')}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder={t.contactForm.emailPlaceholder}
                                disabled={isSubmitting}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                {t.contactForm.phoneLabel} <span className="text-gray-400">{t.contactForm.phoneOptional}</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onFocus={() => handleFieldFocus('phone')}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                placeholder={t.contactForm.phonePlaceholder}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                {t.contactForm.messageLabel} <span className="text-gray-400">{t.contactForm.messageOptional}</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onFocus={() => handleFieldFocus('message')}
                                onChange={handleChange}
                                rows={4}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors resize-none text-gray-900 placeholder-gray-500 ${errors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder={t.contactForm.messagePlaceholder}
                                disabled={isSubmitting}
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        {submitError && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                <p className="text-red-600 text-sm">{submitError}</p>
                            </div>
                        )}

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        {t.contactForm.submitting}
                                    </div>
                                ) : (
                                    t.contactForm.submit
                                )}
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            {t.contactForm.contactInfo}
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
