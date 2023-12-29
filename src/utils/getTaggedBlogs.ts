import getBlogs from './getBlogs';
import getSortedBlogs from './getSortedBlogs';
import type { CollectionEntry } from "astro:content";

type TaggedBlogs = Record<string, CollectionEntry<"blogs">[]>;

export default async function getTaggedBlogs() {
  const blogs = await getBlogs();
  const lowercaseTags: TaggedBlogs = {};

  blogs.forEach((blog) => {
    const tags = blog.data.tags;
    if (!tags || !tags.length) return;
    tags.forEach((tag) => {
      const lowercaseTag = tag.toLowerCase();
      if (!lowercaseTags[lowercaseTag]) {
        lowercaseTags[lowercaseTag] = [];
      }
      lowercaseTags[lowercaseTag].push(blog);
    });
  });

  return Object.entries(lowercaseTags).reduce<TaggedBlogs>(
    (acc, [tag, blogs]) => {
      const sortedBlogs = getSortedBlogs(blogs);
      return { ...acc, [tag]: sortedBlogs };
    },
    {}
  );
}
