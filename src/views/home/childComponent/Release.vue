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
       this.$router.replace('/publish');
    }
  },
};
</script>

<style scoped>
button {
  position: absolute;
  right: 10px;
  bottom: 120px;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  font-family: PingFang SC;
  font-size: 14px;
  color: #333333 100%;
  background: #ffe100 100%;
  border: none;
  outline: none;
  z-index: 10;
}

.release_content {
  position: absolute;
  right: 10px;
  bottom: 200px;
  width: 134px;
  height: 130px;
  background-color: #ffffff 100%;
}
.release_content img {
  vertical-align: middle;
}

.release_content .img,
.queston {
  margin: 15px;
  box-sizing: border-box;
}
</style>