import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from 'views/Login.vue'
import Error from 'views/Error.vue'
import Circle from 'views/Circle.vue'

const Home = () => import('views/home/Home.vue')
const Profile = () => import('views/profile/Profile.vue')
const Publish = () => import('views/Publish.vue')
const MyComment = () => import('views/profile/childComponent/MyComment.vue')

const MyShare = () => import('views/profile/childComponent/MyShare.vue')

const QAdetail = () => import('views/home/childComponent/QAdetail.vue')
const Detail = () => import('views/home/childComponent/Detail.vue')
const ChooseCircle = () => import("views/ChooseCircle.vue")


import axios from 'axios'
import mock from 'network/mock.js'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
	  path:'',
	  redirect:'/home'
	  
  },
  {
  	  path:'/home',
  	  name:'Home',
  	  component:Home,
  	  
  },
  {
	  path:'/error',
	  name:'error',
	  component:Error
  },
  {
	  path:'/circle',
	  name:'Circle',
	  component:Circle
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
  },
  {

	  path:'/myshare',
	  name: "MyShare",
	  component: MyShare
  },
  {
    path: '/qadetail',
    name: 'QAdetail',
    component: QAdetail
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/choosecircle',
    name: 'ChooseCircle',
    component: ChooseCircle
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
	//访问登录界面清除本地的token
	if(to.path.startsWith('/login')){
		window.localStorage.removeItem('access-admin')
		next()
	}else{
		let admin = JSON.parse(window.localStorage.getItem('access-admin'))
		//如果本地没有token跳转到登录界面
		if(!admin) {
			next({path:'/login'})
		}
		next()
		/* else{
			axios({url:'http://localhost:8000/checktoken',
			methds:'get',
			headers:{
				token:admin.token
			}
			}).then((res)=>{
				if(!res.data){
					console.log('校验失败');
					
					next({path:'/error'})
				}else{
					console.log(res.data);
				}
			})
			next()
		} */
	}
})
export default router
