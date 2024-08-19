import path from "path";
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Img: path.resolve(__dirname, 'src/assets/img/'),
      Css: path.resolve(__dirname, 'src/assets/css/'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts/')
    }
  }
}
