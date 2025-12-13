'use client';

import { trackGAEvent } from '@/lib/firebase';
import { getTranslations, Locale } from '@/lib/translations';
import { useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface EventContactFormLocalizedProps {
    locale: Locale;
}

export function EventContactFormLocalized({ locale }: EventContactFormLocalizedProps) {
    const t = getTranslations(locale);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        trackGAEvent('sent_events_form');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'Event Inquiry',
                    name,
                    email,
                    phone,
                    eventDate,
                    eventLocation,
                    message
                }),
            });

            if (response.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setPhone('');
                setEventDate('');
                setEventLocation('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">{t.rental.contactFormTitle}</h2>
                <p className="text-lg text-gray-400 text-center mb-8 max-w-2xl mx-auto">{t.rental.contactFormSubtitle}</p>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input type="text" placeholder={t.rental.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} required className="bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00B2E3]" />
                        <input type="email" placeholder={t.rental.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00B2E3]" />
                        <input type="tel" placeholder={t.rental.phonePlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00B2E3]" />
                        <input type="text" placeholder={t.rental.datePlaceholder} value={eventDate} onChange={(e) => setEventDate(e.target.value)} required className="bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00B2E3]" />
                    </div>
                    <div className="mb-6">
                        <input type="text" placeholder={t.rental.locationPlaceholder} value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00B2E3]" />
                    </div>
                    <div className="mb-6">
                        <textarea placeholder={t.rental.messagePlaceholder} value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00B2E3]"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" disabled={status === 'loading'} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full text-lg transition-all duration-300 disabled:bg-gray-600">
                            {status === 'loading' ? <LoadingSpinner /> : t.rental.submit}
                        </button>
                    </div>
                </form>

                {status === 'success' && <p className="text-center text-green-500 mt-6">{t.rental.successMessage}</p>}
                {status === 'error' && <p className="text-center text-red-500 mt-6">{t.rental.errorMessage}</p>}
            </div>
        </section>
    );
}
