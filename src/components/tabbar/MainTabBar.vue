<template>
  <TabBar>
    <TabBarItem path="/home">
    <img slot="item-icon" src="~assets/imgs/ugc_icon_车友圈_16.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/imgs/common_icon_circle_24.svg"
        alt=""
      />
      <div slot="item-text">车友圈</div>
    </TabBarItem>

    <TabBarItem path="/profile">
      <img slot="item-icon" src="~assets/imgs/未选中@2x.png" alt="" />
      <img slot="item-icon-active" src="~assets/imgs/选中@2x.png" />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>

import TabBar from './TabBar.vue'   
import TabBarItem from './TabBarItem.vue'  

export default {
  name: "MainTabBar",
    components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>