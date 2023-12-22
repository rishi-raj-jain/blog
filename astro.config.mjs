import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        dark: 'github-dark',
        light: 'github-light',
      }
    },
    remarkPlugins: [
      [
        remarkToc,
        {
          maxDepth: 3,
          ordered: false,
          heading: 'Table of Contents',
        }
      ]
    ]
  },
  integrations: [
    tailwind(),
    mdx(),
  ],
});