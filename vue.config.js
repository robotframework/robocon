const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'test' ? './test' : process.env.NODE_ENV === 'production' ? './dist/' : './',
  outputDir: process.env.NODE_ENV === 'test' ? 'test' : 'dist',
  indexPath: process.env.NODE_ENV === 'test' ? '../test.html' : '../index.html',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        Components: path.resolve(__dirname, './src/components/'),
        Img: path.resolve(__dirname, './src/assets/img/'),
        Css: path.resolve(__dirname, './src/assets/css/'),
        Fonts: path.resolve(__dirname, './src/assets/fonts/')
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0] = {
          ...args[0],
          __INTLIFY_PROD_DEVTOOLS__: false
        }
        return args
      })
  }
}
