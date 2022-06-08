import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './routerGuards'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index/Index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/pages/video/Index.vue'),
    meta: {
      title: '视频'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/Index.vue'),
    meta: {
      title: '视频'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
