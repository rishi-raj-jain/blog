import { config } from '@/config/global';
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    words: z.number().optional(),
    draft: z.boolean().optional(),
    hidden: z.boolean().optional(),
    date: z.date().default(new Date()),
    readingTime: z.string().optional(),
    deprecated: z.boolean().default(false),
    lastModified: z.date().default(new Date()),
    author: z.string().default(config.author.name),
  })
});

export const collections = {
  blogs: blogCollection
};
