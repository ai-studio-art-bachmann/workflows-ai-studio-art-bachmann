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
        .map(file => {
          // Proovime lugeda faili sisu, et saada slug frontmatter'ist
          try {
            const filePath = path.join(BLOG_DIR, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContent);
            
            // Kui frontmatter'is on slug, siis kasutame seda
            if (data.slug) {
              return data.slug;
            }
          } catch (error) {
            console.error(`Error reading slug from file ${file}:`, error);
          }
          
          // Kui frontmatter'is ei ole slug'i või tekkis viga, siis kasutame faili nime
          return file.replace(/\.mdx?$/, '');
        });
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
      // Proovime leida faili otse slugi järgi
      let filePath = path.join(BLOG_DIR, `${slug}.mdx`);
      
      // Kui fail ei eksisteeri, proovime leida kõik failid ja otsida õige
      if (!fs.existsSync(filePath)) {
        const files = fs.readdirSync(BLOG_DIR);
        
        // Kõigepealt proovime leida faili, mille slug frontmatter'is vastab otsitavale
        let matchingFile = null;
        
        for (const file of files) {
          try {
            const currentFilePath = path.join(BLOG_DIR, file);
            const fileContent = fs.readFileSync(currentFilePath, 'utf8');
            const { data } = matter(fileContent);
            
            if (data.slug === slug) {
              matchingFile = file;
              break;
            }
          } catch (error) {
            console.error(`Error checking slug in file ${file}:`, error);
          }
        }
        
        // Kui slug'i järgi ei leidnud, proovime faili nime järgi
        if (!matchingFile) {
          matchingFile = files.find(file => 
            file.toLowerCase().replace(/\.mdx?$/, '') === slug.toLowerCase()
          );
        }
        
        if (matchingFile) {
          filePath = path.join(BLOG_DIR, matchingFile);
        } else {
          // Kui ikka ei leia, proovime URL-dekodeeritud slugi
          const decodedSlug = decodeURIComponent(slug);
          matchingFile = files.find(file => 
            file.toLowerCase().replace(/\.mdx?$/, '') === decodedSlug.toLowerCase()
          );
          
          if (matchingFile) {
            filePath = path.join(BLOG_DIR, matchingFile);
          } else {
            throw new Error(`Blog post with slug ${slug} not found`);
          }
        }
      }
      
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Eralda frontmatter ja sisu
      const { data, content } = matter(fileContent);
      
      // Arvuta lugemisaeg
      const readingTime = calculateReadingTime(content);
      
      // Määra vaikeväärtused puuduvatele väljadele
      const excerpt = data.excerpt || content.substring(0, 160) + '...';
      const tags = data.tags || [];
      const author = {
        name: data.author?.name || 'Autor',
        image: data.author?.image || '/images/authors/default.jpg',
      };
      
      return {
        slug: data.slug || slug,
        title: data.title || 'Pealkiri puudub',
        excerpt,
        date: data.date || new Date().toISOString(),
        content: content,
        coverImage: data.coverImage || '/images/blog/default-cover.jpg',
        author,
        tags,
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
