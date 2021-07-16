<template>
  <div id="profile">
	
		<top-bar title="个人首页" @goBefore="goBefore"></top-bar>
	
	
    <UserMessage :msg = 'message'/>
    <ShareComment />
    <MainTabBar />

    <div class='changeCount' @click="goLogin">切换账号</div>
  </div>
</template>

<script>
import UserMessage from './childComponent/UserMessage.vue'
import ShareComment from './childComponent/ShareComment.vue'
import MainTabBar from "components/tabbar/MainTabBar";
import TopBar from 'components/TopBar.vue'

import { getUserMessage } from "network/profile";
import axios from "axios";
import {Toast} from 'vant'

export default {
  name: "Profile",
  components: {
    UserMessage,
    ShareComment,
    MainTabBar,
	  TopBar

  },

  data() {
    return {
      message: {}
    }
  },

  created() {
    getUserMessage().then((res) => {
      // this.message = res.data.data
      this.message = res.data;
      console.log(res);
  })
  },


  methods: {
     goBefore() {
            this.$router.back();
        },
	goLogin(){
		Toast("请重新登录！")
		this.$router.push('/login')
	}
  }

};
</script>

<style scoped>

#profile {
  background: #F5F5F5;
  height: 667px;
}

.changeCount {
  margin: 6px auto;
  background-color: #fff;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  color: #333333;
  font-weight: 400;
}
</style>