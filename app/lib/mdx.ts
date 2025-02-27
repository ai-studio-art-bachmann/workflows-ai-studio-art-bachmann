import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeRaw from 'rehype-raw';

// Blogi postituste asukoht
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

// Blogi postituse tüüp
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
  readingTime?: string;
}

// Funktsioon lugemisaja arvutamiseks
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min lugemine`;
}

// Funktsioon kõigi blogide slugide saamiseks
export function getBlogSlugs(): string[] {
  // Kasutame Node.js fs moodulit ainult serveripoolses koodis
  if (typeof window === 'undefined') {
    try {
      const files = fs.readdirSync(BLOG_DIR);
      return files
        .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
        .map(file => file.replace(/\.mdx?$/, ''));
    } catch (error) {
      console.error('Error reading blog directory:', error);
      return [];
    }
  }
  return [];
}

// Funktsioon kõigi blogide metaandmete saamiseks
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Kasutame Node.js fs moodulit ainult serveripoolses koodis
  if (typeof window === 'undefined') {
    try {
      const slugs = getBlogSlugs();
      const posts = await Promise.all(
        slugs.map(async (slug) => {
          const post = await getBlogPostBySlug(slug);
          return post;
        })
      );

      // Sorteeri postitused kuupäeva järgi (uuemad eespool)
      return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error('Error getting all blog posts:', error);
      return [];
    }
  }
  return [];
}

// Funktsioon blogi metaandmete saamiseks slugi järgi
export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  // Kasutame Node.js fs moodulit ainult serveripoolses koodis
  if (typeof window === 'undefined') {
    try {
      const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Eralda frontmatter ja sisu
      const { data, content } = matter(fileContent);
      
      // Arvuta lugemisaeg
      const readingTime = calculateReadingTime(content);
      
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        content: content,
        coverImage: data.coverImage || '/images/blog/default-cover.jpg',
        author: {
          name: data.author.name,
          image: data.author.image || '/images/authors/default.jpg',
        },
        tags: data.tags || [],
        readingTime,
      };
    } catch (error) {
      console.error(`Error getting blog post by slug ${slug}:`, error);
      return {
        slug: '',
        title: '',
        excerpt: '',
        date: '',
        content: '',
        coverImage: '/images/blog/default-cover.jpg',
        author: {
          name: 'Autor',
          image: '/images/authors/default.jpg',
        },
        tags: [],
      };
    }
  }
  
  // Tagastame tühja objekti kliendipoolses koodis
  return {
    slug: '',
    title: '',
    excerpt: '',
    date: '',
    content: '',
    coverImage: '/images/blog/default-cover.jpg',
    author: {
      name: 'Autor',
      image: '/images/authors/default.jpg',
    },
    tags: [],
  };
}

// Funktsioon blogi sisu kompileerimiseks MDX-ist
export async function getCompiledMDX(content: string) {
  try {
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: {
        mdxOptions: {
          rehypePlugins: [rehypeRaw],
        },
      },
    });

    return compiledContent;
  } catch (error) {
    console.error('Error compiling MDX:', error);
    return null;
  }
}

// Funktsioon blogide saamiseks tag'i järgi
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  try {
    const posts = await getAllBlogPosts();
    return posts.filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  } catch (error) {
    console.error(`Error getting blog posts by tag ${tag}:`, error);
    return [];
  }
}
