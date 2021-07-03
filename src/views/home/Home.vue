<template>
  <div id="home" ref = 'home'>
    
	<top-bar title='主页'></top-bar>
    <HotCycle/>
    <MessageFlow :msg = 'message'/>
    <Release/>
    <MainTabBar/>

  </div>
</template>

<script>

import HotCycle from './childComponent/HotCycle.vue'
import MessageFlow from './childComponent/MessageFlow.vue'
import Release from './childComponent/Release.vue'
import MainTabBar from 'components/tabbar/MainTabBar'
import TopBar from 'components/TopBar.vue'
import {getHomeGoods} from "network/home";


export default {
  name: 'Home',
  components: {
    HotCycle,
    MessageFlow,
    Release,
    MainTabBar,
	TopBar

  },
  data() {
    return {
      message: [],
    }
  },
  created() {
    getHomeGoods().then(res => {
      this.message = res.data.data;
    })
  }
};
</script>

<style scoped>
#home {
  position: relative;
  width: 100%;
  box-sizing: border-box;

}
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.173333rem;
  padding: 5px 0.625rem;
  box-sizing: border-box;
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

.bottom {
    position: absolute;
    bottom: 20px;
    width: 100%;
    height: 49px;
}
</style>