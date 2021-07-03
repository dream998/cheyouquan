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
    width: 100%;
    height: 30px;
    margin-top: 40px;
    margin-left: 17px;
}

.title img {
    float: left;
    width: 15px;
    height: 15px;
    vertical-align: middle;
    background-color: #fff;
}

.title .text {
    float: left;
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: #333333;
    line-height: 14px;
    margin-left: 5px;
}

</style>