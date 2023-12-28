import { getCollection } from "astro:content";

export default async function getBlogs() {
  return getCollection('blogs', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
}
