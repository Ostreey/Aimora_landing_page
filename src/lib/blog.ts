import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from './translations';

export type Pillar = 'trening' | 'asg' | 'b2b' | 'tech';

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  keywords: string[];
  pillar: Pillar;
  image: string;
  readingTime: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const contentDir = (locale: Locale) =>
  path.join(process.cwd(), 'content', 'blog', locale);

export function getPostSlugs(locale: Locale): string[] {
  const dir = contentDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | null {
  const filePath = path.join(contentDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    slug: data.slug || slug,
    keywords: data.keywords || [],
    pillar: data.pillar,
    image: data.image || '/images/blog/default.jpg',
    readingTime: data.readingTime || 5,
    content,
  };
}

export function getAllPosts(locale: Locale): BlogPostMeta[] {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .map(({ content: _, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getRelatedPosts(
  currentSlug: string,
  pillar: Pillar,
  locale: Locale,
  limit = 3
): BlogPostMeta[] {
  return getAllPosts(locale)
    .filter((post) => post.slug !== currentSlug && post.pillar === pillar)
    .slice(0, limit);
}
