import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/app/lib/mdx';
import BlogCard from '@/app/components/blog/BlogCard';
import PageHero from '@/app/components/common/PageHero';
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
    <>
      <PageHero 
        title="Blogi"
        description="Uusimad artiklid ehituse, tehnoloogia ja innovatsiooni teemadel"
      />

      <div className="container mx-auto px-4 py-12">
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Esiletõstetud artikkel</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.coverImage || '/images/blog-placeholder.jpg'}
                    alt={featuredPost.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredPost.tags?.map((tag: string) => (
                      <Link 
                        key={tag} 
                        href={`/blog/tag/${tag}`}
                        className="text-xs font-medium px-2 py-1 bg-primary-100 text-primary-800 rounded-full"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">{featuredPost.author.name}</p>
                      <p className="text-sm text-gray-500">{new Date(featuredPost.date).toLocaleDateString('et-EE', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="button">
                    Loe edasi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6">Kõik artiklid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}