<template>
  <div id="profile">

   <!-- <div class="top">
      <img src="~assets/imgs/arrow_ic.svg" alt="" @click="back" />
      <span>我的</span>
      <span>···</span>
    </div> -->
	<top-bar title="个人首页"></top-bar>
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

.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.173333rem;
  padding: 5px 0.625rem;
  box-sizing: border-box;
  background: #fff;
}

.top img {
  width: 1.469375rem;
  height: 1.469375rem;

  transform: scaleX(-1);
}

.top span {
  font-family: PingFang SC;
  color: #333333;
  font-size: 16px;
}

.changeCount {
  margin: 6px auto;
  background-color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #333333;
  font-weight: 400;
}
</style>