import Link from 'next/link';
import { BlogPost } from '@/app/lib/mdx';
import styles from '@/app/styles/blog.module.css';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <div className={featured ? styles.featuredPost : styles.card}>
      <div className={featured ? styles.featuredContent : styles.cardContent}>
        <div className={styles.tags}>
          {post.tags.slice(0, 3).map((tag) => (
            <Link href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`} key={tag} className={styles.tag}>
              {tag}
            </Link>
          ))}
        </div>
        
        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className={featured ? styles.featuredTitle : styles.cardTitle}>
            {post.title}
          </h3>
        
          <p className={featured ? styles.featuredExcerpt : styles.cardExcerpt}>
            {post.excerpt}
          </p>
        </Link>
        
        <div className={styles.cardMeta}>
          <span>{new Date(post.date).toLocaleDateString('et-EE', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          {post.readingTime && <span>{post.readingTime}</span>}
        </div>
      </div>
    </div>
  );
}
