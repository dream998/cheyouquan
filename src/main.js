import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//移动端适配
import 'amfe-flexible/index.js'

//引入vant组件
import { Button, NavBar,Form,Field,Toast,Uploader} from 'vant';


//这是vant组件的使用
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
