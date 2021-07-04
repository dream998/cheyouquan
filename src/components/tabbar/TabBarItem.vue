<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
  height: 49px;
  font-size: 10px;
  font-family: PingFang SC;
  color: #000000 100%;
}

.tab-bar-item img {
  margin-top: 10px;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>