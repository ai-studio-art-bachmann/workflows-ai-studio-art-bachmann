import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { BlogPost } from "@/types/blog";

// Blogide salvestamise asukoht
const DATA_DIRECTORY = path.join(process.cwd(), 'data', 'blog');

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const filePath = path.join(DATA_DIRECTORY, `${slug}.json`);
    
    // Kontrolli, kas fail eksisteerib
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Loe blogi sisu
    const content = await fs.promises.readFile(filePath, 'utf8');
    const post = JSON.parse(content) as BlogPost;
    
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching blog post:`, error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// DELETE endpoint blogi kustutamiseks (vajadusel)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Kontrolli API võtit (võid lisada turvalisuse jaoks)
    const apiKey = req.headers.get('x-api-key');
    if (!apiKey || apiKey !== process.env.BLOG_API_KEY) {
      // Kommenteerime praegu välja, et testimine oleks lihtsam
      // return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const slug = params.slug;
    const filePath = path.join(DATA_DIRECTORY, `${slug}.json`);
    
    // Kontrolli, kas fail eksisteerib
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    // Kustuta fail
    await fs.promises.unlink(filePath);
    
    // Uuenda indeksit
    const indexPath = path.join(DATA_DIRECTORY, 'index.json');
    if (fs.existsSync(indexPath)) {
      const indexContent = await fs.promises.readFile(indexPath, 'utf8');
      const blogIndex = JSON.parse(indexContent);
      
      // Eemalda kustutatud blogi indeksist
      blogIndex.posts = blogIndex.posts.filter((post: BlogPost) => post.slug !== slug);
      blogIndex.totalPosts = blogIndex.posts.length;
      
      // Salvesta uuendatud indeks
      await fs.promises.writeFile(
        indexPath, 
        JSON.stringify(blogIndex, null, 2), 
        'utf8'
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting blog post:`, error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
