import type { CollectionEntry } from "astro:content";

export default function getSortedBlogs(blogs: CollectionEntry<"blogs">[]) {
  return blogs.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}
