import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog/BlogList';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Aimora — Trening Strzelecki, ASG, Technologia',
    description: 'Artykuły o treningu strzeleckim, ASG, technologii smart targets i biznesie. Porady, przewodniki i nowości ze świata Aimora.',
    alternates: {
        canonical: '/blog',
        languages: {
            'pl': '/blog',
            'en': '/en/blog',
        },
    },
    openGraph: {
        title: 'Blog | Aimora — Trening Strzelecki, ASG, Technologia',
        description: 'Artykuły o treningu strzeleckim, ASG, technologii smart targets i biznesie.',
        type: 'website',
        locale: 'pl_PL',
    },
};

export default function BlogPage() {
    const posts = getAllPosts('pl');

    return (
        <>
            <section className="pt-28 md:pt-36 pb-8">
                <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 font-barlow">
                        Blog
                    </h1>
                    <p className="text-lg text-center text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
                        Artykuły o treningu strzeleckim, ASG, technologii i biznesie.
                    </p>
                </div>
            </section>
            <section className="pb-20">
                <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                    <BlogList posts={posts} locale="pl" />
                </div>
            </section>
            <Footer />
        </>
    );
}
