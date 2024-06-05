import { defineConfig } from "astro/config";
// import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import AstroCompress from 'astro-compress';
import AstroCompressor from 'astro-compressor';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

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
      },
      manifest: {
        name: 'Achmad Kurnianto',
        description: "Achmad Kurnianto's website",
        short_name: 'achmadk',
        orientation: 'portrait',
        theme_color: '#13131f',
        background_color: '#13131f',
        icons: [
          { "src": "/favicon.ico", "type": "image/x-icon", "sizes": "16x16 32x32" },
          { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
          { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" },
          { "src": "/icon-192-maskable.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
          { "src": "/icon-512-maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
        ],
        protocol_handlers: [
          {
            protocol: 'web+achmadkblogs',
            url: '/blogs/%s'
          }
        ]
      },
    }),
    AstroCompress(),
    AstroCompressor()
  ],
});
