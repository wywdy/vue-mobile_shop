import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter)

import categoryArr from './categoryChildren'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category.vue'),
    children:categoryArr
  },
  {
    path:'/cart',
    name:"Cart",
    component:()=>import('@/views/cart/Cart.vue')
  },
  {
    path:'/profile',
    name:"Profile",
    component:()=>import('@/views/profile/Profile.vue')
  },
  {
    path:'/login',
    name:"Login",
    component:()=>import('@/views/login/Login.vue')
  },
  {
    path:'/register',
    name:"Register",
    component:()=>import('@/views/resigter/Register.vue')
  },
 /* {
    path:'/detail',
    name:"Detail",
    component:()=>import('@/views/detail/Detail.vue')
  }*/
  {
    path:'/detail/:sid',
    name:"Detail",
    component:()=>import('@/views/detail/Detail.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
