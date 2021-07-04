import axios from 'axios'


const service = axios.create({
	baseURL: 'http://121.4.90.69:8082/',
	
})

//拦截器
service.interceptors.request.use(
	config => {
		//console.log(config);
		//1. 作用一：config中的一些信息不符合服务器的要求进行修改
		//2. 作用二：每次发送网络请求时在界面显示一个请求的图标
		//3. 作用三：某些网络请求（比如登录token），必须携带一些特殊的信息
		let token =JSON.parse(window.localStorage.getItem('access-admin'))
		if (token) {
			config.headers.authorization = token
		}
		return config;
	},
	err => {
		//console.log(err);
	})
//响应拦截
service.interceptors.response.use(
	res => {
		//console.log(res);
		return res.data;
	},
	err => {
		//console.log(err);
	})
//return instance(config)
export default service