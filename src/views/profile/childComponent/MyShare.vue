<template>
	
	
	<div>
		<top-bar title="我的动态" @goBefore='goBefore'></top-bar>
		<div class="content">
			<div class="dynamicItem">
				<my-comment-item v-for='item in message' :msg='item' ></my-comment-item>
			</div>
		</div>
	</div>
	

</template>

<script>
	import TopBar from 'components/TopBar.vue'
	import MyCommentItem from './commentItem.vue'
	export default{
		components:{
			TopBar,MyCommentItem
		},
		methods:{
			goBefore(){
				console.log("你点击了后退");
				this.$router.back()
			}
		}
	}
</script>

<style>
</style>
