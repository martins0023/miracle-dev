// lib/mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    date: string;
    excerpt: string;
    category: string;
    readTime: string;
    featured?: boolean;
  };
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  // Ensure directory exists to prevent crashes
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(contentDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      metadata: data as BlogPost["metadata"],
      content,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
      return -1;
    }
    return 1;
  });
}

export function getPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}