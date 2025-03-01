import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, getCompiledMDX } from '@/app/lib/mdx';
import PageHero from '@/app/components/common/PageHero';
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
    <>
      <PageHero 
        title={post.title}
        description={post.excerpt || ''}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <article className={styles.blogContent}>
            <div className={styles.blogMeta}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{post.author.name}</span>
                <span className={styles.blogDate}>
                  {formattedDate}
                  {post.readingTime && ` · ${post.readingTime}`}
                </span>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className={styles.blogTags}>
                  {post.tags.map(tag => (
                    <Link key={tag} href={`/blog/tag/${tag}`} className={styles.blogTag}>
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {post.coverImage && (
              <div className={styles.blogCoverImage}>
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  width={1200} 
                  height={630} 
                  className="rounded-lg"
                />
              </div>
            )}
            
            <div className={styles.blogBody}>
              {content}
            </div>
          </article>
          
          <div className={styles.blogFooter}>
            <Link href="/blog" className="button">
              ← Tagasi blogisse
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
