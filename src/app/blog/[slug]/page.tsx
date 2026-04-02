import { getPostBySlug, getPostSlugs, getRelatedPosts } from '@/lib/blog';
import { ArticleHeader } from '@/components/blog/ArticleHeader';
import { MdxContent } from '@/components/blog/MdxContent';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getPostSlugs('pl');
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'pl');
    if (!post) return {};

    return {
        title: `${post.title} | Blog Aimora`,
        description: post.description,
        keywords: post.keywords,
        alternates: {
            canonical: `/blog/${post.slug}`,
            languages: {
                'pl': `/blog/${post.slug}`,
                'en': `/en/blog/${post.slug}`,
            },
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [post.image],
            locale: 'pl_PL',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function BlogArticlePage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'pl');
    if (!post) notFound();

    const related = getRelatedPosts(slug, post.pillar, 'pl');
    const articleUrl = `https://aimora.pl/blog/${slug}`;

    const blogPostingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.image.startsWith('/') ? `https://aimora.pl${post.image}` : post.image,
        datePublished: post.date,
        author: { '@type': 'Person', name: post.author },
        publisher: {
            '@type': 'Organization',
            name: 'Aimora',
            logo: { '@type': 'ImageObject', url: 'https://aimora.pl/images/what_is_it_mobile.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        keywords: post.keywords.join(', '),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <article className="pt-28 md:pt-36 pb-16">
                <ArticleHeader post={post} locale="pl" />
                <div className="max-w-[800px] mx-auto px-6 md:px-8">
                    <MdxContent source={post.content} locale="pl" />
                    <ShareButtons
                        url={articleUrl}
                        title={post.title}
                        shareLabel="Udostępnij artykuł"
                        copyLabel="Kopiuj link"
                        copiedLabel="Skopiowano!"
                    />
                </div>
            </article>
            <RelatedPosts posts={related} locale="pl" />
            <Footer />
        </>
    );
}
