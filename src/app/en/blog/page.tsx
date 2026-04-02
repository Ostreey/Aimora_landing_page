import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog/BlogList';
import { FooterLocalized } from '@/components/FooterLocalized';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Aimora — Shooting Training, ASG, Technology',
    description: 'Articles about shooting training, ASG, smart target technology and business. Tips, guides and news from the world of Aimora.',
    alternates: {
        canonical: '/en/blog',
        languages: {
            'pl': '/blog',
            'en': '/en/blog',
        },
    },
    openGraph: {
        title: 'Blog | Aimora — Shooting Training, ASG, Technology',
        description: 'Articles about shooting training, ASG, smart target technology and business.',
        type: 'website',
        locale: 'en_US',
    },
};

export default function BlogPageEN() {
    const posts = getAllPosts('en');

    return (
        <>
            <section className="pt-28 md:pt-36 pb-8">
                <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 font-barlow">
                        Blog
                    </h1>
                    <p className="text-lg text-center text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
                        Articles about shooting training, ASG, technology and business.
                    </p>
                </div>
            </section>
            <section className="pb-20">
                <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16">
                    <BlogList posts={posts} locale="en" />
                </div>
            </section>
            <FooterLocalized locale="en" />
        </>
    );
}
