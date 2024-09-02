/// <reference types="vitest" />

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { fileURLToPath, URL } from "url";
// import { defineConfig } from "vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
    emptyOutDir: true,
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
    Components(),
  ],
  // publicPath: process.env.NODE_ENV === 'test' ? './test' : process.env.NODE_ENV === 'production' ? './dist/' : './',
  // outputDir: process.env.NODE_ENV === 'test' ? 'test' : 'dist',
  // indexPath: process.env.NODE_ENV === 'test' ? '../test.html' : '../index.html',
  // productionSourceMap: false,
  // devServer: {
  //   disableHostCheck: true
  // },
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      Components: fileURLToPath(new URL("./src/components/", import.meta.url)),

      Img: fileURLToPath(new URL("./src/assets/img/", import.meta.url)),

      Css: fileURLToPath(new URL("./src/assets/css/", import.meta.url)),

      Fonts: fileURLToPath(new URL("./src/assets/fonts/", import.meta.url)),
    },
    extensions: [".js", ".json", ".mjs", ".ts", ".vue"],
  },
  test: {
    globals: true,
    testTimeout: 8000,
    environment: 'jsdom',
    setupFiles: ['./tests/vitest-setup.ts'],
    alias: [
      {
        find: '@',
        replacement: resolve('./src'),
      }
    ],
  },
});
