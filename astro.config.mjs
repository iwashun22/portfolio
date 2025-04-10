// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import { resolve } from 'node:path';
import { imagetools } from 'vite-imagetools';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  base: process.env.BASE_URL || '/',
  output: 'static',
  outDir: './dist',
  vite: {
    plugins: [
      imagetools({
        defaultDirectives: (url) => {
          if (url.searchParams.has("fallback")) {
            return new URLSearchParams({
              format: "avif;webp;jpeg",
            })
          }
          return new URLSearchParams();
        },
        removeMetadata: true,
      })
    ],
    resolve: {
      alias: {
        '@utils': resolve('./src/utils')
      }
    }
  },
});
