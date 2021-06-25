import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'views/Login.vue'

const Home = () => import('views/home/Home.vue')
const Profile = () => import('views/Profile.vue')
const Publish = () => import('views/Publish.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
