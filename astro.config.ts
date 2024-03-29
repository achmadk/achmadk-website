import { defineConfig } from "astro/config";
// import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
// import AstroCompress from 'astro-compress';
import AstroCompressor from 'astro-compressor';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import { removeReactDevtools  } from '@achmadk/vite-plugin-react-remove-devtools'

const isProduction = process.env.NODE_ENV === 'production'

// https://astro.build/config
export default defineConfig({
  site: process.env.BLOG_URL ?? "https://achmadk-dev.vercel.app",
  // integrations: [mdx(), sitemap()],
  integrations: [tailwind(), react(), AstroPWA(), AstroCompressor()],
  vite: {
    plugins: [
      ...(isProduction ? [removeReactDevtools() as any] : [])
    ]
  }
});
