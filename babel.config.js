/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-06 13:48:57
 * @LastEditors: 王敏
 * @LastEditTime: 2021-07-06 14:32:23
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    development: {
      plugins: ['dynamic-import-node']
    },
    production: {
      plugins: ['transform-remove-console']
    }
  }
}
