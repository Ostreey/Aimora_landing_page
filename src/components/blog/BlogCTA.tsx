'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { trackBlogCTAClick } from '@/lib/firebase';

interface BlogCTAProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  href?: string;
  slug?: string;
}

export function BlogCTA({
  heading = 'Sprawdź jak Aimora zmienia trening strzelecki',
  text = 'Interaktywne cele z aplikacją mobilną — tryby gry, analiza wyników i rywalizacja w czasie rzeczywistym.',
  buttonText = 'Poznaj Aimora',
  href = '/',
  slug = '',
}: BlogCTAProps) {
  return (
    <div className="my-10 p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#00B2E3]/10 to-[#FF6B35]/10 border border-[#00B2E3]/20">
      <h3 className="text-xl md:text-2xl font-bold text-white font-barlow mb-3">
        {heading}
      </h3>
      <p className="text-white/70 text-base mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
        {text}
      </p>
      <Link
        href={href}
        onClick={() => trackBlogCTAClick(slug, href)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02]"
      >
        {buttonText}
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
