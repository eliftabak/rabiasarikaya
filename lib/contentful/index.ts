// lib/contentful/index.ts
import { createClient } from 'contentful';
import { IBlogPostSkeleton } from "@/lib/contentful/index.d";

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("❌ Expected parameter accessToken or spaceId is missing.");
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// ✅ Fetch the latest blog posts
export async function getLatestPosts(limit: number) {
  const response = await client.getEntries({
    content_type: "blogPost",
    limit,
    select: ["fields.title", "fields.slug", "fields.description", "fields.content", "fields.date", "fields.thumbnail"],
  });

  return response.items.map((item) => ({
    title: item.fields.title as string,
    slug: item.fields.slug as string,
    description: item.fields.description as string | undefined,
    content: item.fields.content,
    date: item.fields.date as string,
    thumbnail: item.fields.thumbnail || null, 
  }));
}