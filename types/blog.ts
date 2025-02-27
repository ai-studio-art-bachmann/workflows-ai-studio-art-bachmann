export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    image?: string;
  };
  tags: string[];
  readingTime?: string;
}

export interface BlogListResponse {
  posts: BlogPost[];
  totalPosts: number;
}
