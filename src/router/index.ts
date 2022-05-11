import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './routerGuards'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'),
  },
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
