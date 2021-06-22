<template>
	<div>
		<div class="topbar">
			<img src="../assets/imgs/arrow_ic.svg" alt="">
			<span>登录</span>
			<span>···</span>
		</div>
		<div class="content">
			<div><span class="title">登录车友圈</span></div>
			<div class="login-form">
				<form action="">
					<div>用户名<input type="text" placeholder="请输入用户名" class="input"></div>
					<div>密码<input type="text" placeholder="请输入密码" class="input"></div>
				</form>
			</div>
		</div>
	</div>

</template>

<script>
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
			onSubmit(values) {
				console.log('submit', values);
			},
		},
	};
</script>

<style scoped="scoped">
	.topbar {
		width: 100%;
		height: 4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.625rem;
		box-sizing: border-box;

	}

	.topbar img {
		width: 1.469375rem;
		height: 1.469375rem;
		transform: scaleX(-1);
	}

	.topbar .title {
		font-family: PingFang-SC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		text-align: center;
		font-weight: 500;
	}

	.content {
		position: absolute;
		top: 5.875rem;
		left: 1.75rem;

	}

	.content span {
		font-family: PingFangSC-Medium;
		font-size: 24px;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 34px;
		font-weight: 500;
	}

	.content .login-form {
		margin-top: 3.125rem;

	}

	.login-form .input {
		outline-style: none;
		border: none;
		border-radius: 3px;
		padding: 14px 14px;
		
		font-family: "Microsoft soft";	
	}
	.login-form div{
		width: 82.9%;
		font-size: 16px;
	}
</style>
