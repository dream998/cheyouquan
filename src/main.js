import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

//移动端适配
import 'amfe-flexible/index.js'
// import 'assets/js/flexible.js'

//引入vant组件

import { Button, NavBar,Form,Field,Toast,Uploader,ActionSheet,Sticky} from 'vant';



Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

//这是vant组件的使用
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Sticky);
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()     //数据总线$bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
