import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://fanegg.github.io',
  base: '/Feat2GS',
  integrations: [tailwind(), icon(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});