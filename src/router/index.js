import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'views/Login.vue'

const Home = () => import('views/home/Home.vue')
const Profile = () => import('views/profile/Profile.vue')
const Publish = () => import('views/Publish.vue')
const MyComment = () => import('views/profile/childComponent/MyComment.vue')
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
  },
  {
    path: '/mycomment',
    name: 'MyComment',
    component: MyComment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
