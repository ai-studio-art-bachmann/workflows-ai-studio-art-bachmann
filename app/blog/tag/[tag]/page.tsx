import { Metadata } from 'next';
import { getAllBlogPosts, getBlogPostsByTag } from '@/app/lib/mdx';
import BlogCard from '@/app/components/blog/BlogCard';
import styles from '@/app/styles/blog.module.css';
import Link from 'next/link';

interface TagPageProps {
  params: {
    tag: string;
  };
}

// Genereerib staatilised parameetrid kõikide tagide jaoks
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tags.add(tag.toLowerCase());
    });
  });
  
  return Array.from(tags).map(tag => ({ tag }));
}

// Genereerib metaandmed iga tagi jaoks
export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const decodedTag = decodeURIComponent(params.tag);
  
  return {
    title: `${decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1)} | Blogi | AI Studio Art Bachmann`,
    description: `Artiklid teemal ${decodedTag}`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const decodedTag = decodeURIComponent(params.tag);
  const posts = await getBlogPostsByTag(decodedTag);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center mb-6">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 mr-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
            <h1 className="text-3xl font-bold">
              Artiklid teemal: <span className="text-blue-600">{decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1)}</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {posts.length} {posts.length === 1 ? 'artikkel' : 'artiklit'} leitud
          </p>
        </header>

        <div className={styles.blogList}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-gray-600 dark:text-gray-400">Selle tagi all pole ühtegi artiklit.</p>
          </div>
        )}
      </div>
    </div>
  );
}
