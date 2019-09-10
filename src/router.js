import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home/index.vue'),
      children: [
        {
          path: 'films',
          component: () => import('./views/Home/films.vue')
        },
        {
          path: 'cinemas',
          component: () => import('./views/Home/cinemas.vue')
        },
        {
          path: 'center',
          component: () => import('./views/Home/center.vue')
        },
        {
          path: 'brand',
          component: () => import('./views/Home/brand.vue')
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    }
  ]
})
