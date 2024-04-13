import { defineConfig } from "astro/config";
// import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import AstroCompress from 'astro-compress';
import AstroCompressor from 'astro-compressor';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import { removeReactDevtools  } from '@achmadk/vite-plugin-react-remove-devtools'

const isProduction = process.env.NODE_ENV === 'production'

// https://astro.build/config
export default defineConfig({
  site: process.env.BLOG_URL ?? "https://achmadk-dev.vercel.app",
  // integrations: [mdx(), sitemap()],
  integrations: [
    tailwind(),
    react(),
    AstroPWA({
      injectRegister: false,
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.ts',
      base: '/',
      injectManifest: {
        globPatterns: ['**/*.{css,js,png,webp,svg,woff,woff2,html,avif}'],
        rollupFormat: 'iife',
      }
    }),
    AstroCompress(),
    AstroCompressor()
  ],
  vite: {
    plugins: [
      ...(isProduction ? [removeReactDevtools()] : [])
    ]
  }
});
