/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-01 16:34:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 22:42:21
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@css/init.less'
import microApps from './micro-app'
import { registerMicroApps, start } from 'qiankun'
import globalStore from './globalStore'
import Antd, { message } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.config.productionTip = false
Vue.prototype.$message = message
Vue.prototype.$globalStore = globalStore

/**
 * 微前端：在主应用中注册子应用
 */
const instance = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader(loading) {
  if (instance && instance.$children) {
    // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
    instance.$children[0].isLoading = loading
  }
}

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  }
})
registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  beforeUnmount: [
    app => {
      console.log('[LifeCycle] before unmount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
// setDefaultMountApp('/sub-vue')
start()
