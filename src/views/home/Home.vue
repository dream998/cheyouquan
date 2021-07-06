<template>
  <div id="home" ref = 'home'>
    <div class="home-topbar">
		<top-bar title='主页' ></top-bar>
	</div>
	
   <Scroll class="content" ref="scroll">
      <HotCycle />
      <MessageFlow :msg="message" />
    </Scroll>

    <Release />
    <MainTabBar />
  </div>
</template>

<script>
import Scroll from "components/Scroll.vue";

import HotCycle from "./childComponent/HotCycle.vue";
import MessageFlow from "./childComponent/MessageFlow.vue";
import Release from "./childComponent/Release.vue";
import MainTabBar from "components/tabbar/MainTabBar";
import TopBar from "components/TopBar.vue";

import { getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HotCycle,
    MessageFlow,
    Release,
    MainTabBar,
    TopBar,
    Scroll,
  },
  data() {
    return {
      message: [],
    };
  },

  created() {
    getHomeGoods().then((res) => {
      this.message = res.data.data;
    });
  },

  mounted() {
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.refresh(); 
    });
  },
};
</script>

<style scoped>
#home {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.home-topbar{
	
	height: 50px;

}

.content {
  height: 550px;
  overflow: hidden;
}

.bottom {
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 49px;
}
</style>