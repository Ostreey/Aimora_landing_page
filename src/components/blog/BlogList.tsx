'use client';

import { BlogPostMeta, Pillar } from '@/lib/blog';
import { Locale, getTranslations } from '@/lib/translations';
import { useState } from 'react';
import { BlogCard } from './BlogCard';

const POSTS_PER_PAGE = 9;

const pillars: (Pillar | 'all')[] = ['all', 'trening', 'asg', 'b2b', 'tech'];

interface BlogListProps {
  posts: BlogPostMeta[];
  locale: Locale;
}

export function BlogList({ posts, locale }: BlogListProps) {
  const [activePillar, setActivePillar] = useState<Pillar | 'all'>('all');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const t = getTranslations(locale);

  const pillarTranslations: Record<string, string> = {
    all: t.blog.allPillars,
    trening: t.blog.pillarTrening,
    asg: t.blog.pillarAsg,
    b2b: t.blog.pillarB2b,
    tech: t.blog.pillarTech,
  };

  const filteredPosts = activePillar === 'all'
    ? posts
    : posts.filter((post) => post.pillar === activePillar);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleFilterChange = (pillar: Pillar | 'all') => {
    setActivePillar(pillar);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {pillars.map((pillar) => (
          <button
            key={pillar}
            onClick={() => handleFilterChange(pillar)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activePillar === pillar
                ? 'bg-[#00B2E3]/20 border-[#00B2E3] text-[#00B2E3]'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            {pillarTranslations[pillar]}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-white/50 py-16 text-lg">
          {locale === 'en' ? 'No articles found in this category.' : 'Brak artykułów w tej kategorii.'}
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-[#00B2E3]/50 transition-all duration-200"
              >
                {locale === 'en' ? 'Load more' : 'Załaduj więcej'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
