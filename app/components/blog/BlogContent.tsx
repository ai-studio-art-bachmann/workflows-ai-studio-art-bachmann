import Link from 'next/link';
import { BlogPost, getCompiledMDX } from '@/app/lib/mdx';
import styles from '@/app/styles/blog.module.css';
import '@/app/styles/blog-typography.css';

interface BlogContentProps {
  post: BlogPost;
}

export default async function BlogContent({ post }: BlogContentProps) {
  // Kompileeri MDX sisu
  const content = await getCompiledMDX(post.content);

  // Kui sisu puudub, näita veateadet
  if (!content) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Viga sisu laadimisel</h1>
          <p className="text-lg">Kahjuks ei õnnestunud blogi sisu laadida. Palun proovige hiljem uuesti.</p>
          <Link href="/blog" className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Tagasi blogisse
          </Link>
        </div>
      </div>
    );
  }

  // Formateeri kuupäev vastavalt keelele
  const isFinish = post.title.includes('Teknologiset') || post.title.toLowerCase().includes('rakennusala');
  const locale = isFinish ? 'fi-FI' : 'et-EE';
  const formattedDate = new Date(post.date).toLocaleDateString(locale, {
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
            {content}
          </div>
          
          <footer className={styles.blogFooter}>
            {post.tags && post.tags.length > 0 && (
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
            )}
            
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
              {locale === 'fi-FI' ? 'Takaisin blogiin' : 'Tagasi blogisse'}
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
