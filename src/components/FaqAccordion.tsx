'use client';

import { useState } from 'react';

const faqData = [
    {
        question: 'Ile czasu przed eventem muszę zarezerwować Aimorę?',
        answer: 'Im wcześniej, tym lepiej, szczególnie w sezonie letnim. Rekomendujemy rezerwację na 2-3 tygodnie przed terminem, ale zawsze warto zapytać o dostępne terminy last-minute.'
    },
    {
        question: 'Czy atrakcja jest bezpieczna dla dzieci?',
        answer: 'Tak, bezpieczeństwo jest naszym priorytetem. Używamy profesjonalnych replik ASG strzelających plastikowymi kulkami, a nasi instruktorzy zapewniają, że wszyscy uczestnicy noszą okulary ochronne. Atrakcja jest odpowiednia dla uczestników od 10 roku życia.'
    },
    {
        question: 'Ile osób może grać jednocześnie?',
        answer: 'Standardowy zestaw pozwala na jednoczesną grę kilku osób i płynną rotację, co pozwala obsłużyć grupę około 30 osób na godzinę. Możemy dostosować liczbę stanowisk do wielkości Twojego eventu.'
    },
    {
        question: 'Czy potrzebujemy specjalnych pozwoleń?',
        answer: 'Nie, system Aimora jest traktowany jako atrakcja rekreacyjna i nie wymaga żadnych specjalnych pozwoleń na broń. Działa cicho i jest w pełni mobilny.'
    },
    {
        question: 'Jaki jest koszt wynajmu?',
        answer: 'Koszt zależy od czasu trwania imprezy, liczby celów oraz zakresu obsługi. Każde zapytanie wyceniamy indywidualnie. Skontaktuj się z nami, a przygotujemy ofertę idealnie dopasowaną do Twojego wydarzenia.'
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-gray-700 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-white focus:outline-none"
            >
                <span>{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-300">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {faqData.map((faq, index) => (
                <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
}
