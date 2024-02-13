import { defineConfig } from "astro/config";
// import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';
// import AstroPWA from '@vite-pwa/astro';
// import AstroCompress from 'astro-compress';
import AstroCompressor from 'astro-compressor';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.BLOG_URL ?? "https://achmadk-dev.vercel.app",
  // integrations: [mdx(), sitemap()],
  integrations: [tailwind(), react(), AstroCompressor()]
});
