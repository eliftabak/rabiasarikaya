import { client } from '@/lib/contentful'; // ensure this is your default or named export as appropriate
import { IBlogPostSkeleton, BlogPostQuery } from '@/lib/contentful/index.d';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import richTextOptions from '@/lib/contentful/richTextOptions';
import Breadcrumb, { BreadcrumbItem } from '../../components/Breadcrumb';

export const revalidate = 60;

export async function generateStaticParams() {
  const response = await client.getEntries<IBlogPostSkeleton>({
    content_type: 'blogPost',
    select: ['fields.slug'],
  });
  return response.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

// @ts-expect-error: Next.js expects `params` to match `PageProps`, but it's already structured correctly.
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const query: BlogPostQuery = {
    content_type: 'blogPost',
    'fields.slug': params.slug,
    limit: 1,
  };

  const response = await client.getEntries<IBlogPostSkeleton>(query);

  if (!response.items.length) {
    notFound();
  }

  const post = response.items[0].fields;

  function formatDate(date: Date): string {
    // Format as dd/mm/yyyy using en-GB locale
    const formatted = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
    // Replace "/" with "."
    return formatted.replace(/\//g, '.');
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title }, // current page, no href
  ];

  return (
    <div >
      <div className='px-16 py-12 lg:px-32 lg:py-10'>
      <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className='max-h-96 overflow-hidden'>
      {post.thumbnail && (
            <img
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              src={(post.thumbnail as any).fields.file.url}
              alt={post.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
      </div>
      <main className='p-12 lg:px-32 lg:py-16'>
        <h1 className='text-xl lg:text-2xl pb-2'>{post.title}</h1>
        <div className='flex justify-end py-2 pb-2'>
          <p>Tarih: {formatDate(new Date(post.date))}</p>
        </div>
        <div className='py-2 pb-2'>
          {post.description && <p>{post.description}</p>}
        </div>
        <section>
        {documentToReactComponents(post.content, richTextOptions)}
        </section>
      </main>
    </div>
  );
}
