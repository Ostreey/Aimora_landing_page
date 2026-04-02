import { BlogPostMeta } from '@/lib/blog';
import { Locale } from '@/lib/translations';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';

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

interface ArticleHeaderProps {
  post: BlogPostMeta;
  locale: Locale;
}

export function ArticleHeader({ post, locale }: ArticleHeaderProps) {
  const minReadLabel = locale === 'en' ? 'min read' : 'min czytania';
  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'en' ? 'en-US' : 'pl-PL',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <header className="max-w-[900px] mx-auto px-6 md:px-8">
      <div className="mb-6">
        <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border ${pillarColors[post.pillar]}`}>
          {pillarLabels[locale]?.[post.pillar] || post.pillar}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-barlow mb-6 leading-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/50 text-sm mb-8">
        <span className="flex items-center gap-1.5">
          <User size={16} />
          {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar size={16} />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={16} />
          {post.readingTime} {minReadLabel}
        </span>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </div>
    </header>
  );
}
