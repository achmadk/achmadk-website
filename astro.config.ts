import { defineConfig, fontProviders } from "astro/config";

import AstroPWA from '@vite-pwa/astro';
import AstroCompressor from 'astro-compressor';
import react from "@astrojs/react";
import { removeReactDevtools } from '@achmadk/vite-plugin-react-remove-devtools';
import million from "million/compiler";
import tailwindcssVite from '@tailwindcss/vite';

// https://astro.build/config
const _plugins = [
  tailwindcssVite(),
  (removeReactDevtools() as any),
  million.vite({ auto: { threshold: 0.05 }})
];
// const _plugins = [(removeReactDevtools() as any)];
// _plugins.unshift(MillionLint.vite())
export default defineConfig({
  site: process.env.BLOG_URL ?? "https://achmadk.com",
  vite: {
    plugins: _plugins
  },
  // integrations: [mdx(), sitemap()],
  integrations: [react(), AstroPWA({
    injectRegister: false,
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'service-worker.ts',
    base: '/',
    injectManifest: {
      globPatterns: ['**/*.{css,js,png,webp,svg,woff,woff2,html,avif}'],
      rollupFormat: 'iife'
    },
    useCredentials: true,
    manifest: {
      name: 'Achmad Kurnianto',
      description: "Achmad Kurnianto's website",
      short_name: 'achmadk',
      orientation: 'portrait',
      theme_color: '#13131f',
      background_color: '#13131f',
      icons: [{
        "src": "/favicon.ico",
        "type": "image/x-icon",
        "sizes": "16x16 32x32"
      }, {
        "src": "/icon-192.png",
        "type": "image/png",
        "sizes": "192x192"
      }, {
        "src": "/icon-512.png",
        "type": "image/png",
        "sizes": "512x512"
      }, {
        "src": "/icon-192-maskable.png",
        "type": "image/png",
        "sizes": "192x192",
        "purpose": "maskable"
      }, {
        "src": "/icon-512-maskable.png",
        "type": "image/png",
        "sizes": "512x512",
        "purpose": "maskable"
      }],
      protocol_handlers: [{
        protocol: 'web+achmadkblogs',
        url: '/blogs/%s'
      }]
    }
  }), AstroCompressor()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-primary",
      weights: ["400 bold 900"],
      featureSettings: "'ss02'"
    }
  ],
  experimental: {
    clientPrerender: true
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  }
});