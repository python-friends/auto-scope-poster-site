import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/scans/:id',
      name: 'scans',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "scans" */ './views/Scans.vue')
    },
    {
      path: '/404',
      name: '404',
      alias: '*', 
      component: NotFound 
    },
    { 
      path: '*',
      redirect: '/404'
    }, 
  ]
})

export default router