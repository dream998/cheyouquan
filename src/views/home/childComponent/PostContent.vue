<template>
  <div id="post-content">
    <div class="header">
      <img :src="msg.personIcon" alt="用户头像" />
      <div class="name-time">
        <div class="username">{{ msg.username }}</div>
        <div class="time">{{ msg.time }}</div>
      </div>
    </div>

    <div class="text" @click="goToDetail">{{ msg.text }}</div>

    <div class="img" >
      <img v-for="item in msg.img" :src="item" alt="" @load="imageLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostContent",
  props: {
    msg: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    goToDetail() {
      if (this.$route.path.indexOf("/home") !== -1) {
        if (this.msg.type) {
          this.$router.push({
            name: "QAdetail",
            params: {
              data: this.msg,
            },
          });
        } else {
          this.$router.push({
            name: "Detail",
            params: {
              data: this.msg,
            },
          });
        }
      }
    },

    imageLoad() {                    // 发送图片加载完成信号
       this.$bus.$emit('itemImageLoad')
    }
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  /* height: 40px; */
  margin-bottom: 10px;
}
.header img {
  float: left;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.name-time {
  margin-left: 50px;
  margin-top: 20px;
}
.name-time .username {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
  line-height: 14px;
  font-weight: 500;
}

.name-time .time {
  margin-top: 5px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  line-height: 12px;
  font-weight: 400;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
  font-weight: 400;
}
.img {
  display: flex;
}
.img img {
  padding-right: 1px;
  flex: 50%;
}
</style>