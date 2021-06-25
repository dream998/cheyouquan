<template>
  <div id="home" ref = 'home'>
    <div class="top">
      <img src="~assets/imgs/arrow_ic.svg" alt="" />
      <span>车友圈</span>
      <span>···</span>
    </div>

    <div class='hot_cycle'>
        <img src="~assets/imgs/车友圈@3x.png" alt="" />
        <span class='text'>热门车友圈</span>
    </div>

    <Release/>
    <MainTabBar/>

  </div>
</template>

<script>

import Release from './Release.vue'
import MainTabBar from 'components/tabbar/MainTabBar'


export default {
  name: 'Home',
  components: {
    Release,
    MainTabBar
  }
};
</script>

<style scoped>
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
.hot_cycle {
    width: 100%;
    height: 30px;
    margin-top: 40px;
    margin-left: 17px;
}

.hot_cycle img {
    float: left;
    width: 15px;
    height: 15px;
    vertical-align: middle;
    background-color: #fff;
}

.hot_cycle .text {
    float: left;
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: #333333;
    line-height: 14px;
    margin-left: 5px;
}

.bottom {
    position: absolute;
    bottom: 20px;
    width: 100%;
    height: 49px;
}
</style>