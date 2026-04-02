import { BlogPostMeta } from '@/lib/blog';
import { Locale, getTranslations } from '@/lib/translations';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
  locale: Locale;
}

export function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  const t = getTranslations(locale);

  if (posts.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-16 py-16 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-bold text-white font-barlow mb-8">
        {t.blog.relatedPosts}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} locale={locale} source="related_posts" />
        ))}
      </div>
    </section>
  );
}
