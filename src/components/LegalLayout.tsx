import { ReactNode } from 'react';

interface LegalLayoutProps {
    title: string;
    updatedLabel: string;
    children: ReactNode;
    footer: ReactNode;
}

export function LegalLayout({ title, updatedLabel, children, footer }: LegalLayoutProps) {
    return (
        <main className="min-h-screen bg-black">
            <section className="pt-24 md:pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white">{title}</h1>
                        <p className="text-sm text-white/50 mb-12">{updatedLabel}</p>

                        <div
                            className="
                                text-white/80 leading-relaxed
                                [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-white
                                [&_h2]:mt-12 [&_h2]:mb-4
                                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white
                                [&_h3]:mt-8 [&_h3]:mb-3
                                [&_p]:mb-4
                                [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc
                                [&_ol]:mb-4 [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:list-decimal
                                [&_li]:marker:text-[#00B2E3]
                                [&_strong]:text-white
                                [&_a]:text-[#00B2E3] [&_a]:underline hover:[&_a]:text-white
                                [&_table]:w-full [&_table]:mb-6 [&_table]:text-sm
                                [&_th]:text-left [&_th]:text-white [&_th]:font-semibold
                                [&_th]:border-b [&_th]:border-white/20 [&_th]:py-2 [&_th]:pr-4
                                [&_td]:align-top [&_td]:border-b [&_td]:border-white/10
                                [&_td]:py-2 [&_td]:pr-4
                            "
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </section>
            {footer}
        </main>
    );
}
