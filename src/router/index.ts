import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'font-bold',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/diensten',
      name: 'diensten',
      component: () => import('../diensten.vue'),
    },
     {
      path: '/over-ons',
      name: 'over-ons',
      component: () => import('../over-ons.vue'),
    },
        {
      path: '/contact',
      name: 'contact',
      component: () => import('../contact.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    }

    return { top: 0 }
  },
})

export default router
