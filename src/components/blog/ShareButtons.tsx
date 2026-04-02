'use client';

import { Share2, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';
import { trackBlogShareClick } from '@/lib/firebase';

interface ShareButtonsProps {
  url: string;
  title: string;
  slug?: string;
  shareLabel?: string;
  copyLabel?: string;
  copiedLabel?: string;
}

export function ShareButtons({
  url,
  title,
  slug = '',
  shareLabel = 'Udostępnij',
  copyLabel = 'Kopiuj link',
  copiedLabel = 'Skopiowano!',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      label: 'Share on X',
      platform: 'x',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: 'Share on Facebook',
      platform: 'facebook',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      label: 'Share on LinkedIn',
      platform: 'linkedin',
    },
  ];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    trackBlogShareClick('copy_link', slug, title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex items-center gap-2 mb-4 text-white/50 text-sm">
        <Share2 size={16} />
        <span>{shareLabel}</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            onClick={() => trackBlogShareClick(link.platform, slug, title)}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:border-[#00B2E3]/50 hover:text-white transition-all duration-200"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:border-[#00B2E3]/50 hover:text-white transition-all duration-200 flex items-center gap-2"
        >
          {copied ? <Check size={14} /> : <LinkIcon size={14} />}
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
    </div>
  );
}
