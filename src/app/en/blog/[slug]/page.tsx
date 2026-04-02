import { getPostBySlug, getPostSlugs, getRelatedPosts } from '@/lib/blog';
import { ArticleHeader } from '@/components/blog/ArticleHeader';
import { MdxContent } from '@/components/blog/MdxContent';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { BlogPostTracker } from '@/components/blog/BlogPostTracker';
import { FooterLocalized } from '@/components/FooterLocalized';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getPostSlugs('en');
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'en');
    if (!post) return {};

    return {
        title: `${post.title} | Aimora Blog`,
        description: post.description,
        keywords: post.keywords,
        alternates: {
            canonical: `/en/blog/${post.slug}`,
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
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function BlogArticlePageEN({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug, 'en');
    if (!post) notFound();

    const related = getRelatedPosts(slug, post.pillar, 'en');
    const articleUrl = `https://aimora.pl/en/blog/${slug}`;

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
            <BlogPostTracker slug={slug} title={post.title} pillar={post.pillar} locale="en" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <article className="pt-28 md:pt-36 pb-16">
                <ArticleHeader post={post} locale="en" />
                <div className="max-w-[800px] mx-auto px-6 md:px-8">
                    <MdxContent source={post.content} locale="en" />
                    <ShareButtons
                        url={articleUrl}
                        title={post.title}
                        slug={slug}
                        shareLabel="Share this article"
                        copyLabel="Copy link"
                        copiedLabel="Copied!"
                    />
                </div>
            </article>
            <RelatedPosts posts={related} locale="en" />
            <FooterLocalized locale="en" />
        </>
    );
}
