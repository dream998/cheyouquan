<template>
  <div id="profile">
	<div class="profile-topbar">
		<top-bar title="个人首页"></top-bar>
	</div>
	
    <UserMessage :msg = 'message'/>
    <ShareComment />
    <MainTabBar />

    <div class='changeCount'>切换账号</div>
  </div>
</template>

<script>
import UserMessage from './childComponent/UserMessage.vue'
import ShareComment from './childComponent/ShareComment.vue'
import MainTabBar from "components/tabbar/MainTabBar";
import TopBar from 'components/TopBar.vue'

import { getUserMessage } from "network/profile";

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
      this.message = res.data.data
  })
  },

  methods: {
     back() {
            this.$router.replace('/home');
        }
  }

};
</script>

<style scoped>

#profile {
  background: #F5F5F5;
  height: 667px;
}
.profile-topbar{
	height: 50px;
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