'use client';

import { useState } from 'react';
import { BlogPost } from '@/app/lib/mdx';
import BlogCard from './BlogCard';
import Link from 'next/link';
import Image from 'next/image';

interface BlogListProps {
  posts: BlogPost[];
  initialDisplayCount?: number;
}

export default function BlogList({ posts, initialDisplayCount = 6 }: BlogListProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  
  // Näita rohkem postitusi
  const loadMore = () => {
    setDisplayCount(prev => prev + 6);
  };
  
  // Kas on veel postitusi, mida laadida
  const hasMorePosts = displayCount < posts.length;
  
  return (
    <div className="space-y-12">
      {/* Esiletõstetud postitus */}
      {posts.length > 0 && (
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Link href={`/blog/${posts[0].slug}`}>
                <Image
                  src={posts[0].coverImage || '/images/blog/default-cover.jpg'}
                  alt={posts[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </Link>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {posts[0].tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${posts[0].slug}`}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {posts[0].title}
                  </h2>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {posts[0].excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {posts[0].author.image && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image 
                        src={posts[0].author.image} 
                        alt={posts[0].author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400">{posts[0].author.name}</span>
                </div>
                <Link 
                  href={`/blog/${posts[0].slug}`}
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Loe rohkem &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ülejäänud postitused */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1, displayCount).map((post) => (
          <BlogCard 
            key={post.id} 
            post={post} 
            featured={false} 
          />
        ))}
      </div>
      
      {hasMorePosts && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Lae rohkem artikleid
          </button>
        </div>
      )}
      
      {!hasMorePosts && posts.length > initialDisplayCount && (
        <div className="text-center text-gray-600 dark:text-gray-400 mt-8 py-4 border-t border-gray-100 dark:border-gray-800">
          Kõik artiklid on laaditud
        </div>
      )}
    </div>
  );
}
