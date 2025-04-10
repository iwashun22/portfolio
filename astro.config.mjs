// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import { resolve } from 'node:path';
import { imagetools } from 'vite-imagetools';

dotenv.config();

const BASE_URL = process.env.BASE_URL || '/';
const PUBLIC_URL = BASE_URL.replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
  base: BASE_URL,
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
        '@utils': resolve('./src/utils'),
        '@fonts': resolve('./src/assets/fonts'),
        '@images': resolve('./src/assets/images'),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$public-url: "${PUBLIC_URL}";`,
        }
      }
    },
    build: {
      rollupOptions: {
        output:  {
          hashCharacters: 'hex',
          assetFileNames: (assetInfo) => {
            const prefix = "img_";
            const imageFiles = /^.*\.(jpg|jpeg|webp|avif|png|gif)$/
            const fontFiles = /^.*\.(woff|woff2|ttf)$/

            console.log(assetInfo.names);
            // if(assetInfo.names.match(imageFiles)) {
            //   return `assets/images/${prefix}[hash][extname]`;
            // } else if(assetInfo.names.match(fontFiles)) {
            //   return `assets/fonts/[name]-[hash][extname]`;
            // }
            return `assets/[name]-[hash:26][extname]`;
          }
        }
      }
    }
  },
  integrations: [],
});
