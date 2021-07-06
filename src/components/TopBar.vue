<template>
	<div class="outer">
		<div class="topbar">
			<van-nav-bar
			  :title='this.title'
			  right-text="···"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			/>
		</div>
	</div>
	
	
</template>

<script>	
import { Toast } from 'vant';
	export default {
		
	  methods: {
	    onClickLeft() {
	      //this.$router.back()
		  this.$emit('goBefore')
		 
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
	  },
	  data() {
	  	return {
			
		}
	  },
	  props:{
		  title:String
	  }
	};
</script>

<style scoped="scoped">
	.topbar{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}	
	.outer{
		height: 50px;
	}
</style>
