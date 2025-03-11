// app/blog/page.tsx
import { client } from "@/lib/contentful";
import { IBlogPostSkeleton } from "@/lib/contentful/index.d";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb, { BreadcrumbItem } from '../components/Breadcrumb';
import { getAbsoluteUrl } from "@/lib/utils";

export const revalidate = 60;

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' }
];

export default async function BlogPage() {
  const response = await client.getEntries<IBlogPostSkeleton>({
    content_type: "blogPost",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = response.items.map((item: any) => item.fields);

  return (
    <main>
      <div className="relative w-full h-64">
        <Image
          src="/images/blog-header.jpg"
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold pb-3">Blog</h1>
            <p className="text-lg font-sniglet">
              Yemek yemek keyifli ve bilinçli bir deneyim olmalı, karmaşık
              değil.
              <br />
              İşte sağlıklı beslenmeyi kolaylaştıracak düşüncelerim ve evde
              uygulayabileceğiniz pratik tarifler.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-48">
                {post.thumbnail && (
                  <Image
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    src={getAbsoluteUrl((post.thumbnail as any).fields.file.url)}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                {post.description && (
                  <p className="text-gray-600 text-sm">{post.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
