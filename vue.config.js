/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-06 11:55:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 23:05:26
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = '民宗主应用' // 标题

module.exports = {
  lintOnSave: false,
  publicPath: process.env.VUE_APP_BASE + '/', // 主应用静态资源路径
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件
    extract: process.env.NODE_ENV === 'production',
    // 开启 CSS source maps，一般不建议开启
    sourceMap: false
  },
  devServer: {
    port: 7000, // 端口号
    https: false, // https:{type:Boolean}
    hot: true, // 配置热更新
    open: true, // 配置自动启动浏览器
    proxy: {
      '^/api': {
        // target: 'http://101.132.194.174:7830/national', // 测试
        target: 'https://dingoa.zjhy.gov.cn/gfdn/national', // 黄岩
        changeOrigin: true,
        // ws: true,//是否启用websocket
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@img': resolve('src/img'),
        '@css': resolve('src/css'),
        '@utils': resolve('src/utils'),
        '@api': resolve('src/api')
      }
    }
  }

}
