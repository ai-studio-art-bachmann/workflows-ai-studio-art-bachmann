import Link from 'next/link';
import { BlogPost, getCompiledMDX } from '@/app/lib/mdx';
import styles from '@/app/styles/blog.module.css';
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  post: BlogPost;
}

export default async function BlogContent({ post }: BlogContentProps) {
  // Kompileeri MDX sisu
  const content = await getCompiledMDX(post.content);

  // Formaadi kuupäev
  const formattedDate = new Date(post.date).toLocaleDateString('et-EE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
        <article className={styles.blogContent}>
          <header className={styles.blogHeader}>
            <h1 className={styles.blogTitle}>{post.title}</h1>
            
            <div className={styles.blogMeta}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{post.author.name}</span>
                <span className={styles.blogDate}>
                  {formattedDate}
                  {post.readingTime && ` · ${post.readingTime}`}
                </span>
              </div>
            </div>
          </header>
          
          <div className={styles.blogBody}>
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-xl prose-img:shadow-md
              prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed prose-p:my-6
              prose-li:my-2 prose-li:text-gray-700 prose-li:dark:text-gray-300
              prose-strong:text-gray-900 prose-strong:dark:text-white
            ">
              {content}
            </div>
          </div>
          
          <footer className={styles.blogFooter}>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <Link 
                  href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`} 
                  key={tag} 
                  className={styles.tag}
                >
                  {tag}
                </Link>
              ))}
            </div>
            
            <Link href="/blog" className={styles.backButton}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={styles.backIcon}
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
              Tagasi blogisse
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
