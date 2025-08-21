'use client';

import { trackFormSend } from '@/lib/firebase';
import { useState } from 'react';

const PROMO_PRICE_PLN = 199;

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    quantity: number | string;
    message: string;
}

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        quantity: 1,
        message: ''
    });
    const [quantityInput, setQuantityInput] = useState<string>('1');
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Imię jest wymagane';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Adres email jest wymagany';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Nieprawidłowy format adresu email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Treść zapytania jest wymagana';
        } else if (formData.message.trim().length < 5) {
            newErrors.message = 'Treść zapytania musi mieć co najmniej 5 znaków';
        }

        const quantity = typeof formData.quantity === 'string' ? parseInt(formData.quantity, 10) : formData.quantity;
        if (!Number.isFinite(quantity) || quantity < 1) {
            newErrors.quantity = 'Podaj liczbę kompletów (min. 1)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

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
                // Track successful form submission
                trackFormSend();
                // Reset form after 3 seconds and close modal
                setTimeout(() => {
                    setFormData({ name: '', email: '', phone: '', quantity: 1, message: '' });
                    setQuantityInput('1');
                    setIsSuccess(false);
                    onClose();
                }, 3000);
            } else {
                throw new Error('Błąd podczas wysyłania formularza');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ message: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            onClose();
            // Reset form when closing
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', quantity: 1, message: '' });
                setQuantityInput('1');
                setErrors({});
                setIsSuccess(false);
            }, 300);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#017da0] to-[#0299bb] text-white p-6 rounded-t-2xl">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-barlow font-bold">Zamów Aimora</h2>
                            <p className="text-white/90 text-sm mt-1">Skontaktuj się z nami</p>
                        </div>
                        <button
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="text-white/80 hover:text-white text-2xl leading-none disabled:opacity-50"
                        >
                            ×
                        </button>
                    </div>
                    {/* Promo badge */}
                    <div className="mt-4">
                        <span className="inline-block">
                            {/* use the same style as other sections */}
                            {/* lightweight import avoidance: reusing markup would require importing component, but it's fine to keep here minimal */}
                            <span className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 border border-gray-200 shadow-sm px-4 py-2 text-sm font-semibold">
                                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-bold bg-[#017da0] text-black">PROMOCJA</span>
                                <span className="text-gray-700">150 zł / komplet — detektor + wskaźnik LED (dla pierwszych klientów)</span>
                            </span>
                        </span>
                    </div>
                </div>

                {/* Success State */}
                {isSuccess && (
                    <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-barlow font-bold text-gray-900 mb-2">Dziękujemy!</h3>
                        <p className="text-gray-600">Twoje zapytanie zostało wysłane. Skontaktujemy się z Tobą wkrótce.</p>
                    </div>
                )}

                {/* Form */}
                {!isSuccess && (
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* Quantity Field */}
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                Ilość kompletów <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min={1}
                                    step={1}
                                    value={quantityInput}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        setQuantityInput(inputValue);

                                        // Update form data only if it's a valid number
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
                                        // Ensure minimum value of 1 when user leaves the field
                                        const val = parseInt(e.target.value, 10);
                                        if (!Number.isFinite(val) || val < 1) {
                                            setQuantityInput('1');
                                            setFormData(prev => ({ ...prev, quantity: 1 }));
                                        }
                                    }}
                                    className={`w-28 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Podaj ilość"
                                    disabled={isSubmitting}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                />
                                <div className="text-sm text-gray-700">
                                    <div>
                                        Cena promocyjna: <span className="font-semibold">{PROMO_PRICE_PLN} zł</span> / komplet
                                    </div>
                                    <div>
                                        Razem: <span className="font-semibold">{PROMO_PRICE_PLN} zł × {formData.quantity} = {PROMO_PRICE_PLN * (typeof formData.quantity === 'number' ? formData.quantity : 1)} zł</span>
                                    </div>
                                </div>
                            </div>
                            {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
                        </div>
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Imię <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Wpisz swoje imię"
                                disabled={isSubmitting}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Adres email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="twoj@email.com"
                                disabled={isSubmitting}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Numer telefonu <span className="text-gray-400">(opcjonalne)</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                                placeholder="+48 123 456 789"
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Treść zapytania <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#017da0] focus:border-transparent transition-colors resize-none text-gray-900 placeholder-gray-500 ${errors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Opisz swoje pytania lub wymagania dotyczące Aimora..."
                                disabled={isSubmitting}
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Wysyłanie...
                                    </div>
                                ) : (
                                    'Wyślij zapytanie'
                                )}
                            </button>
                        </div>

                        {/* Info */}
                        <p className="text-xs text-gray-500 text-center mt-4">
                            Skontaktujemy się z Tobą w ciągu 24 godzin
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
} 