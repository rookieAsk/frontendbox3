import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    // component: resolve => require(['../view/home.vue'], resolve),
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    redirect:'/index',
    name: 'home',
    component: () => import('../views/home.vue'),
    children:[
      {
        path:'/index',
        component:() => import('../views/subpage/index.vue')
      },
      {
        path:'/about',
        component:() => import('../views/subpage/about.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
