<template>
	<div class="tab-control">
		<!-- 使用v-for遍历所有标题 -->
		<!-- @click="addActive(index)"将currentIndex设置为index，并将index传到父组件 -->
		<!-- :class="{active:index===currentIndex}"如果该div的index和currentIndex相同，则该样式得以显示 -->
		<div v-for="(item,index) in titles" class="item" @click="addActive(index)" :class="{active:index===currentIndex}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			// 接收外界传入的标题
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			addActive(index){
				this.currentIndex=index
				this.$emit('tabClick',index)
			}
		}
		
	}
</script>

<style scoped="scoped">
	.tab-control {
		/*  */
		display: flex;
		text-align: left;
		height: 40px;
		line-height: 40px;
		background-color: white;
		
	}
	.tab-control .item{
		
		margin-left: 10px;
		font-size: 18px;
		
		
		
		
	}
	.tab-control .item span{
		
	}
	.active{
		color: var(--color-high-text);
		
	}
	.active span{
		padding: 5px;
		border-bottom: 5px solid var(--color-high-text);
	}
</style>
