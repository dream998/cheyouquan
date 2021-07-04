<template>
  <div id="hot-cycle">
    <div class="title">
      <img src="~assets/imgs/车友圈@3x.png" alt="" />
      <span class="text">热门车友圈</span>
    </div>

    <Swiper/>
  </div>
</template>

<script>

import Swiper from 'components/swiper/Swiper.vue'

export default {
  name: "HotCycle",
  components: {
      Swiper
  }
};
</script>

<style scoped>
.title{
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


</style>