<template>
  <div id="my-comment">

    <top-bar title='我的评论' @goBefore="goBefore"></top-bar>
    
    <commentItem v-for='item in message' :msg='item' @deleteItem="deleteItem"/>
  </div>
</template>

<script>

import TopBar from "components/TopBar.vue";
import commentItem from './commentItem.vue'

import {getMyComment} from 'network/MyComment.js'

export default {
  name: "MyComment",
  components: {
    TopBar,
    commentItem

  },
  data() {
    return {
      message: []
    }
  },

  created() {
     getMyComment().then(res => {
      //  this.message = res.data.data
       this.message = res.data
      console.log(res.data);
     })
  },

  methods: {

    // back () {
    //   this.$router.replace('/profile');
    // },
	goBefore(){
		console.log("你点击了后退");
		this.$router.back()
	},
	deleteItem(){
		console.log("接收到了");
		
	}
	

  }
};
</script>

<style scoped>

</style>