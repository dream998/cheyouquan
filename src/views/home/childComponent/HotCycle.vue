<template>
  <div id="hot-cycle">
    <div class="title">
      <img src="~assets/imgs/车友圈@3x.png" alt="" />
      <span class="text">热门车友圈</span>
    </div>

    <vuescroll :ops="ops">
      <div class="hot-cycle-item">
        <!-- <swiper ref="mySwiper">
        <swiper-slide v-for='item in haha'> -->

        <HotCycleItem v-for="item in message" :msg="item" :key="item.id" />
        <!-- </swiper-slide>
      </swiper> -->
      </div>
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

import HotCycleItem from "./HotCycleItem.vue";

import { getHotCycle } from "network/hotCycle.js";

export default {
  name: "HotCycle",
  components: {
    HotCycleItem,
    vuescroll,
  },

  data() {
    return {
      message: [],
      ops: {
        vuescroll: {
          mode: "native",
        },
        scrollPanel: {
          easing: "easeInOutQuart",
        },
        bar: {
          onlyShowBarOnScroll: false,
          // keepShow: true,
          size: "350px",
          opacity: 0,
        },
      },
    };
  },

  created() {
    getHotCycle().then((res) => {
      this.message = res.data.data;
      console.log(this.message);
    });
  },
};
</script>

<style scoped>
.title {
  box-sizing: border-box;
  height: 30px;
  margin-top: 40px;
  margin-left: 17px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  line-height: 14px;
  font-weight: 500;
}

.title img {
  float: left;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 1px;
}

.hot-cycle-item {
  display: flex;
  box-sizing: border-box;
  width: 246px;
  height: 177px;
  margin: 0 12px;
}
</style>