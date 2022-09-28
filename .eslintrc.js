/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-01 16:56:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 15:54:52
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-trailing-spaces': 1,
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 后面回顾代码发现格式报错，先注释
    quotes: 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    semi: 0
  }
}
