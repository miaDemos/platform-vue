/*
 * @Description:配置子应用
 * @Autor: 王敏
 * @LastEditTime: 2022-09-28 18:53:16
 */
import globalStore from './globalStore'
import { message } from 'ant-design-vue'
import router from './router'
import api from '@api'

const { logout } = api.login

const microApps = [// entryDev：本地调试子应用地址  entryPro：发包后子应用访问地址
  { // 民宗子应用1（杭州）
    name: 'subapp1',
    entryDev: '//localhost:7100',
    // entryDev: 'http://101.132.194.174:7830/subvue',
    entryPro: process.env.VUE_APP_SUB1,
    activeRule: '/subapp1'
  },
  { // 民宗子应用2（台州）
    name: 'subapp2',
    entryDev: '//localhost:7200',
    // entryDev: 'http://101.132.194.174:7830/subvue',
    entryPro: process.env.VUE_APP_SUB2,
    activeRule: '/subapp2'
  }
]

// 退登方法
let canLogout = true
const _logoutFun = () => {
  // TODO:调退出登录接口
  Promise.resolve().then(() => {
    localStorage.clear()
    router.push('/login')
    canLogout = true
  })
  // logout().then().finally(() => {
  //   localStorage.clear()
  //   router.push('/login')
  //   canLogout = true
  // })
}

const apps = microApps.map(item => {
  let { name, entryDev, entryPro, activeRule } = item
  activeRule = process.env.VUE_APP_BASE + activeRule
  return {
    name,
    entry: process.env.NODE_ENV === 'development' ? entryDev : entryPro,
    activeRule,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: activeRule, // 下发基础路由
      globalState: (key) => globalStore.getGlobalState(key), // 下发getGlobalState方法
      globalFun: (name) => {
        // console.log('全局方法我进来了', name)
        switch (name) {
          case 'backMain':
            router.push('/home')
            break
          case 'logout':
            if (!canLogout) return message.info('正在退登，请稍后')
            canLogout = false
            _logoutFun()
            break
        }
      }

    }
  }
})

export default apps
