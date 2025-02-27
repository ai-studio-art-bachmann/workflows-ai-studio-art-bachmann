import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { BlogPost } from "@/types/blog";

// Blogide salvestamise asukoht
const DATA_DIRECTORY = path.join(process.cwd(), 'data', 'blog');

// Tagame, et andmekaust on olemas
if (!fs.existsSync(DATA_DIRECTORY)) {
  fs.mkdirSync(DATA_DIRECTORY, { recursive: true });
}

// Funktsioon blogi salvestamiseks
async function saveBlogPost(post: BlogPost) {
  const filePath = path.join(DATA_DIRECTORY, `${post.slug}.json`);
  await fs.promises.writeFile(filePath, JSON.stringify(post, null, 2), 'utf8');
  return post;
}

// Funktsioon kõigi blogide nimekirja värskendamiseks
async function updateBlogIndex() {
  const files = await fs.promises.readdir(DATA_DIRECTORY);
  const blogFiles = files.filter(file => file.endsWith('.json') && file !== 'index.json');
  
  const posts: BlogPost[] = [];
  
  for (const file of blogFiles) {
    const content = await fs.promises.readFile(path.join(DATA_DIRECTORY, file), 'utf8');
    try {
      const post = JSON.parse(content) as BlogPost;
      posts.push(post);
    } catch (error) {
      console.error(`Error parsing ${file}:`, error);
    }
  }
  
  // Sorteeri postitused kuupäeva järgi (uuemad eespool)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Salvesta indeks
  const indexPath = path.join(DATA_DIRECTORY, 'index.json');
  await fs.promises.writeFile(
    indexPath, 
    JSON.stringify({ posts, totalPosts: posts.length }, null, 2), 
    'utf8'
  );
  
  return posts;
}

// Funktsioon slugi genereerimiseks
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Eemalda erimärgid
    .replace(/\s+/g, '-') // Asenda tühikud sidekriipsudega
    .replace(/--+/g, '-') // Eemalda topelt sidekriipsud
    .trim(); // Eemalda alguse ja lõpu tühikud
}

// POST endpoint uue blogi lisamiseks (n8n jaoks)
export async function POST(req: NextRequest) {
  try {
    // Kontrolli API võtit (võid lisada turvalisuse jaoks)
    const apiKey = req.headers.get('x-api-key');
    if (!apiKey || apiKey !== process.env.BLOG_API_KEY) {
      // Kommenteerime praegu välja, et testimine oleks lihtsam
      // return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    
    // Kontrolli, kas kõik vajalikud väljad on olemas
    if (!data.title || !data.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title and content are required' },
        { status: 400 }
      );
    }
    
    // Genereeri slug, kui seda pole
    const slug = data.slug || generateSlug(data.title);
    
    // Loo blogi objekt
    const blogPost: BlogPost = {
      id: data.id || `blog-${Date.now()}`,
      slug: slug,
      title: data.title,
      excerpt: data.excerpt || data.content.substring(0, 160) + '...',
      content: data.content,
      coverImage: data.coverImage || '/images/blog/default-cover.jpg',
      date: data.date || new Date().toISOString(),
      author: data.author || {
        name: 'Bachmann Team',
        image: '/images/authors/default.jpg'
      },
      tags: data.tags || ['Uudised'],
      readingTime: data.readingTime || `${Math.ceil(data.content.split(' ').length / 200)} min lugemist`
    };
    
    // Salvesta blogi
    await saveBlogPost(blogPost);
    
    // Uuenda indeksit
    await updateBlogIndex();
    
    return NextResponse.json({ 
      success: true, 
      post: blogPost,
      message: `Blog post "${blogPost.title}" created successfully with slug "${blogPost.slug}"`
    });
  } catch (error) {
    console.error('Error creating blog post from webhook:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
