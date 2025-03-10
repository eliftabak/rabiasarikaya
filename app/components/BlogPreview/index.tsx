import { getLatestPosts } from "@/lib/contentful";
import Link from "next/link";
import Image from "next/image";
import BlogSwiper from "../BlogSwiper";

const BlogPreview = async () => {
  const latestPosts = (await getLatestPosts(3)).map(post => ({
    ...post,
    description: post.description || ""
  }));

  function getAbsoluteUrl(url: string): string {
    return url.startsWith("//") ? `https:${url}` : url;
  }

  return (
    <section className="py-16 px-6 lg:py-26 max-w-6xl mx-auto">
      <h2 className="text-3xl font-sniglet font-bold text-[#1F3B08] text-left">Güncel Blog Yazıları</h2>
      <div className="block md:hidden mt-8">
        <BlogSwiper latestPosts={latestPosts} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {latestPosts.map((post) => (
          <div key={post.slug} className="hidden md:block bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Blog Image */}
            {post.thumbnail && (
              <Image
                src={getAbsoluteUrl((post.thumbnail as any).fields.file.url)}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}
            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1F3B08]">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mt-2">{post.description || ""}</p>
              <Link href={`/blog/${post.slug}`} className="text-[#5D8736] font-medium mt-4 inline-block">
                Devamını Oku →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
