<template>
  <div class="release">
    <div class="release_content" v-if="isClick" @click='divClick'>
      <div class="img">
        <img src="~assets/imgs/图文@2x.png" alt="" />
        发图文
      </div>
      <div class="question">
        <img src="~assets/imgs/03-发布@2x.png" alt="" />
        提问
      </div>
    </div>
    <button @click="btnClick">发布</button>
  </div>
</template>

<script>
export default {
  name: "Release",
  data() {
    return {
      isClick: false,
    };
  },

  methods: {
    btnClick() {
      return (this.isClick = !this.isClick);
    },

    divClick() {
       this.$router.push('/publish');
    }
  },
};
</script>

<style scoped>
button {
  position: fixed;
  right: 16px;
  bottom: 75px;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
  font-weight: 500;;
  background: #ffe100;
  border: none;
  outline: none;
  z-index: 10;
}

.release_content {
  position: fixed;
  right: 16px;
  bottom: 133px;
  width: 134px;
  height: 112px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.20);

  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
  font-weight: 500;
}
.release_content img {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin: 14px 12px;
  box-sizing: border-box;
}

</style>