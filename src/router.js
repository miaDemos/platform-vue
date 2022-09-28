/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-05 15:35:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-15 15:24:57
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Routes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/home',
    name: '主应用home页面',
    component: () => import('@/pages/Home')
  },
  {
    path: '/login',
    name: '登录页面',
    component: () => import('@/pages/Login')
  },
  {
    path: '/a',
    name: 'a页面',
    component: () => import('@/pages/A')
  },
  {
    path: '/404',
    name: '404页面',
    component: () => import('@/pages/NotFound')
  }
]

const createRouter = () => new Router({
  base: process.env.VUE_APP_BASE,
  mode: 'history',
  routes: Routes
})

const router = createRouter()
export default router
