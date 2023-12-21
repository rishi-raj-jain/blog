import getSortedBlogs from './getSortedBlogs';
import type { CollectionEntry } from "astro:content";

type TaggedBlogs = Record<string, CollectionEntry<"blogs">[]>;

export default function getTaggedBlogs(blogs: CollectionEntry<"blogs">[]) {
  const tags: TaggedBlogs = {};

  blogs.forEach((blog) => {
    const blogTags = blog.data.tags as string[];
    if (!blogTags || !blogTags.length) return;
    blogTags.forEach((tag) => {
      const tagTolowerCase = tag.toLowerCase();
      if (!tags[tagTolowerCase]) {
        tags[tagTolowerCase] = [];
      }
      tags[tagTolowerCase].push(blog);
    });
  });

  return Object.entries(tags).reduce<TaggedBlogs>(
    (acc, [tag, blogs]) => {
      const sortedBlogs = getSortedBlogs(blogs);
      return { ...acc, [tag]: sortedBlogs };
    },
    {}
  );
}
