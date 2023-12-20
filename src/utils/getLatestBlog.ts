import type { CollectionEntry } from "astro:content";

export default function getLatestBlog(blogs: CollectionEntry<"blogs">[]) {
  let latest: CollectionEntry<'blogs'> = blogs[0];

  blogs.forEach((blog) => {
    if (new Date(blog.data.date).getTime() > new Date(latest.data.date).getTime()) {
      latest = blog;
    }
  });

  return latest;
}
