<template>
	<van-nav-bar
	  :title='this.title'
	  right-text="···"
	  left-arrow
	  @click-left="onClickLeft"
	  @click-right="onClickRight"
	/>
</template>

<script>	
import { Toast } from 'vant';
	export default {
	  methods: {
	    onClickLeft() {
	      Toast('返回');
		 
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

<style>
</style>
