<template>
  <div id="profile">
      我的页面

    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from "components/tabbar/MainTabBar";

export default {
  name: "Profile",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
</style>