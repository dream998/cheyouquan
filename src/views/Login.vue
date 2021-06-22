<template>
	<div>
		<top-bar title='登录'></top-bar>
	</div>

</template>

<script>
	import TopBar from '../../components/TopBar.vue'
	export default {
		components: {
			TopBar
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
	.title{
		font-size: 30px;
		font-weight: bold;
		text-align: center;
	}
	.message{
		font-size: 16px;
	}
</style>
