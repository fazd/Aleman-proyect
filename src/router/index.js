import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Autentication/Login.vue'
import Register from '../views/Autentication/Register.vue'
import ForgotPassword from '../views/Autentication/ForgotPassword.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home1',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/register',
    name: 'register',
    component:Register
  },
  {
    path: '/forgotpassword',
    name: 'forgotPassword',
    component:ForgotPassword
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
