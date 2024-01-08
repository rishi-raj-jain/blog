import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import codesandbox from "remark-codesandbox";
import rehypeExternalLinks from "rehype-external-links";
import { remarkCodeSandbox } from "./plugins/remark-codesandbox.mjs";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";
import { remarkModifiedTime } from "./plugins/remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        dark: "github-dark",
        light: "github-light",
      },
    },
    remarkPlugins: [
      remarkReadingTime,
      remarkModifiedTime,
      [
        remarkToc,
        {
          maxDepth: 3,
          ordered: false,
          heading: "Table of Contents",
        },
      ],
      [codesandbox, { mode: "meta" }],
      remarkCodeSandbox,
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          content: { type: "text", value: " 🔗" },
        },
      ],
    ],
  },
  integrations: [tailwind(), mdx()],
});
