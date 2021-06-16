import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules/index'

const routerHandler = createWebHistory()
// const routerHandler = createWebHashHistory()

const router = createRouter({
  history: routerHandler,
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
