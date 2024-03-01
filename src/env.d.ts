/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/info" />

interface ImportMetaEnv {
  readonly PUBLIC_HASHNODE_GQL_ENDPOINT: string;
  readonly PUBLIC_HASHNODE_PUBLICATION_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
