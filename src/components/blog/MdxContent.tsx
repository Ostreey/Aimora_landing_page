import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Image from 'next/image';
import { BlogCTA } from './BlogCTA';
import { Locale } from '@/lib/translations';

function MdxImage(props: React.ComponentPropsWithoutRef<'img'>) {
  const { src, alt } = props;
  if (!src || typeof src !== 'string') return null;
  return (
    <span className="block my-8">
      <Image
        src={src}
        alt={alt || ''}
        width={800}
        height={450}
        className="rounded-xl w-full h-auto"
      />
    </span>
  );
}

const components = {
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 font-barlow" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 font-barlow" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: 'var(--font-inter)' }} {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<'a'>) => (
    <a className="text-[#00B2E3] hover:underline transition-colors duration-200" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-inside text-white/80 mb-6 space-y-2 text-base md:text-lg" style={{ fontFamily: 'var(--font-inter)' }} {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-inside text-white/80 mb-6 space-y-2 text-base md:text-lg" style={{ fontFamily: 'var(--font-inter)' }} {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-[#00B2E3] pl-6 italic text-white/70 my-8 text-base md:text-lg" {...props} />
  ),
  img: MdxImage,
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
    <pre className="bg-white/5 border border-white/10 rounded-xl p-4 overflow-x-auto my-6 text-sm" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => {
    const isInline = !props.className;
    if (isInline) {
      return <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#00B2E3] text-sm" {...props} />;
    }
    return <code {...props} />;
  },
  hr: () => <hr className="border-white/10 my-10" />,
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-white/80 text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<'th'>) => (
    <th className="border border-white/10 bg-white/5 px-4 py-2 text-left font-semibold" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<'td'>) => (
    <td className="border border-white/10 px-4 py-2" {...props} />
  ),
  BlogCTA,
};

interface MdxContentProps {
  source: string;
  locale?: Locale;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="blog-content">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          },
        }}
      />
    </div>
  );
}
