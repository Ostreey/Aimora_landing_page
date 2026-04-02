import { BlogPostMeta } from '@/lib/blog';
import { Locale } from '@/lib/translations';
import Image from 'next/image';
import Link from 'next/link';

const pillarColors: Record<string, string> = {
  trening: 'bg-[#00B2E3]/20 text-[#00B2E3] border-[#00B2E3]/30',
  asg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  b2b: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  tech: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const pillarLabels: Record<string, Record<string, string>> = {
  pl: { trening: 'Trening', asg: 'ASG', b2b: 'B2B', tech: 'Technologia' },
  en: { trening: 'Training', asg: 'ASG', b2b: 'B2B', tech: 'Technology' },
};

interface BlogCardProps {
  post: BlogPostMeta;
  locale: Locale;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const blogPath = locale === 'en' ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
  const minReadLabel = locale === 'en' ? 'min read' : 'min czytania';

  return (
    <Link href={blogPath} className="group block">
      <article className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#00B2E3]/50 hover:bg-white/[0.07] h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${pillarColors[post.pillar]}`}>
              {pillarLabels[locale]?.[post.pillar] || post.pillar}
            </span>
            <span className="text-white/50 text-xs">
              {post.readingTime} {minReadLabel}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 font-barlow group-hover:text-[#00B2E3] transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2 flex-1">
            {post.description}
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 text-white/40 text-xs">
            {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'pl-PL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </article>
    </Link>
  );
}
