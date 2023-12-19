import { config } from '@/config/global';
import { z, defineCollection } from 'astro:content';

export const collections = defineCollection({
  type: "content",
  schema: {
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    hidden: z.boolean().optional(),
    date: z.date().default(new Date()),
    author: z.string().default(config.author.name),
  }
});