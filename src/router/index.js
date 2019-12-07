import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Autentication/Login.vue'
import Register from '../views/Autentication/Register.vue'
import ForgotPassword from '../views/Autentication/ForgotPassword.vue'
import Artikel from '../views/Artikel.vue'
import Konjugation from '../views/Konjugation.vue'
import Verben from '../views/Verben.vue'
import Wortschatz from '../views/Wortschatz.vue'
import Profile from '../views/Profile.vue'

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
    path: '/profile',
    name: 'profile',
    component:Profile
  },
  {
    path: '/forgot_password',
    name: 'ForgotPassword',
    component:ForgotPassword
  },
  {
    path: '/artikel',
    name: 'Artikel',
    component:Artikel
  },
  {
    path: '/konjugation',
    name: 'Konjugation',
    component:Konjugation
  },
  {
    path: '/verben',
    name: 'Verben',
    component:Verben
  },
  {
    path: '/wortschatz',
    name: 'Wortschatz',
    component:Wortschatz
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
