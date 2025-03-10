import { EntrySkeletonType, EntryFields, Asset, EntriesQueries } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IBlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    description?: EntryFields.Text;
    content: Document;
    date: EntryFields.Date;
    thumbnail: Asset;
  };
}

// Extend the query interface to allow filtering by slug
export interface BlogPostQuery extends EntriesQueries<IBlogPostSkeleton, undefined> {
  content_type: string;
  'fields.slug'?: string;
  limit: number;
}
