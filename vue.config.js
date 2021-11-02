const path = require('path')

module.exports = {
  productionSourceMap: false,
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
      .plugin('html')
      .tap(args => {
        args[0].title = 'Robocon 2022'
        args[0].meta = 'RoboCon: Conference for Robot Framework community'
        return args
      })
    config
      .plugin('define')
      .tap(args => {
        args[0] = {
          ...args[0],
          __INTLIFY_PROD_DEVTOOLS__: false
        }
        return args
      })
    config
      .plugin('preload')
      .tap(args => {
        args[0].include = 'allAssets'
        args[0].as = (entry) => {
          if (/\.css$/.test(entry)) return 'style'
          if (/\.woff$/.test(entry)) return 'font'
          return 'script'
        }
        return args
      })
  }
}
