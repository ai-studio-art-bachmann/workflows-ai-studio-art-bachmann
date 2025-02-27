import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/app/lib/mdx';
import BlogCard from '@/app/components/blog/BlogCard';
import styles from '@/app/styles/blog.module.css';

export const metadata: Metadata = {
  title: 'Blogi | AI Studio Art Bachmann',
  description: 'Loe uusimaid artikleid ehituse, tehnoloogia ja innovatsiooni teemadel.',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const featuredPost = posts[0]; // Esimene postitus on esiletõstetud
  const regularPosts = posts.slice(1); // Ülejäänud postitused

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Blogi</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Uusimad artiklid ehituse, tehnoloogia ja innovatsiooni teemadel
          </p>
        </header>

        {featuredPost && (
          <BlogCard post={featuredPost} featured={true} />
        )}

        <div className={styles.blogList}>
          {regularPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
