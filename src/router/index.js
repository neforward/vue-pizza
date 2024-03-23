import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vue-pizza',
      name: 'main',
      component: Main
    },
    {
      path: '/cart',
      name: 'cart',
      // which is lazy-loaded when the route is visited.
      component: Cart
    }
  ]
})

export default router
