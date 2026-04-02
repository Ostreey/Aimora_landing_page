'use client';

import { useEffect } from 'react';
import { trackBlogPostView } from '@/lib/firebase';

interface BlogPostTrackerProps {
  slug: string;
  title: string;
  pillar: string;
  locale: string;
}

export function BlogPostTracker({ slug, title, pillar, locale }: BlogPostTrackerProps) {
  useEffect(() => {
    trackBlogPostView(slug, title, pillar, locale);
  }, [slug, title, pillar, locale]);

  return null;
}
