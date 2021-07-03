<template>
	<div>

		<top-bar title='登录'></top-bar>
		<div class="content">
			<div class="content-title">登录车友圈</div>
			<van-form @submit="onSubmit">
				<van-field v-model="username" name="用户名" label="用户名" placeholder="请输入您的用户名"
					:rules="[{ required: true, message: '请填写用户名' }]" />
				<van-field v-model="password" type="password" name="密码" label="密码" placeholder="请输入您的密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
				<div style="margin: 16px;">
					<van-button block type="warning" native-type="submit">提交</van-button>
				</div>
			</van-form>
		</div>

	</div>

</template>

<script>
	import TopBar from 'components/TopBar.vue'
	import axios from 'axios'
	//import mock from 'network/mock.js'
	import request from 'network/request.js'
	import {
		Toast
	} from 'vant';

	export default {
		components: {

		},
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			//登录函数
			signIn() {
				let _this = this
				//访问登录接口
				let formData = new FormData();
				// 将请求参数一个一个append进去，因为涉及到项目内部东西，而且需要安全请求，所以就随便写了几个键值代替
				formData.append('username', this.username);
				formData.append('password', this.password);

				axios.post("http://121.4.90.69:8082/login", formData)
					.then((res) => {
						console.log(res);
						if (res.data != null) {
							Toast("登录成功！")
							window.localStorage.setItem('access-admin', JSON.stringify(res.headers.authorization))
							_this.$router.replace({
								path: '/'
							})
						}
					}, err => {
						console.log(err);
					})
			},
			//注册函数
			register() {
				let _this = this
				//访问注册接口
				axios.post("http://121.4.90.69:8082/api/user/register", {
						username: _this.username,
						password: _this.password
					})
					.then(res => {
						console.log(res.data.state);
						if (res.data.state == 200) {
							Toast('注册成功，点击登录！')


						} else {
							//用户名重复，表示已注册过，调用登录接口
							_this.signIn()
						}
					}, err => {
						console.log(err);
					})
			},
			onSubmit(values) {
				console.log('submit', values);
				//this.register()
				this.signIn()
			}
		},
	};
</script>

<style scoped="scoped">
	.content {
		margin-top: 50px;
		margin-left: 28px;
	}

	.content-title {
		font-family: PingFangSC-Medium;
		font-size: 24px;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 34px;
		font-weight: 500;
		margin-bottom: 50px;
		margin-left: 12px;


	}

	.van-button--warning {
		color: #1F2129;
	}
</style>
