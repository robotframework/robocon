import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from "vite";

export default defineConfig ({
  build: {
    outDir: './docs',
    emptyOutDir: true,
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Img: path.resolve(__dirname, 'src/assets/img/'),
      Css: path.resolve(__dirname, 'src/assets/css/'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts/'),
      Utils: path.resolve(__dirname, 'src/utils'),
      Store: path.resolve(__dirname, 'src/store'),
      Content: path.resolve(__dirname, 'src/content/')
    }
  }
})
