<template>
	
</template>

<script>
	export default{
		created(){
			alert('登录信息失效，请重新登录')
			this.$router.replace('/login')
		}
	}
	
</script>

<style>
</style>
