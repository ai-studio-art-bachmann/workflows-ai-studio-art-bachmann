import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogSlugs } from '@/app/lib/mdx';
import BlogContent from '@/app/components/blog/BlogContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Genereerib staatilised parameetrid kõikide blogide jaoks
export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

// Genereerib metaandmed iga blogi jaoks
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post || !post.title) {
    return {
      title: 'Blogi postitust ei leitud',
      description: 'Soovitud blogi postitust ei leitud',
    };
  }
  
  return {
    title: `${post.title} | AI Studio Art Bachmann`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post || !post.title) {
    notFound();
  }
  
  return <BlogContent post={post} />;
}
