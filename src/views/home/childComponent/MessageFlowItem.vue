<template>
  <div id="message-flow-item">
    <div class="header">
      <img :src="flowsItem.personIcon" alt="用户头像" />
      <div class="name-time">
        <div class="username">{{ flowsItem.username }}</div>
        <div class="time">{{ flowsItem.time }}</div>
      </div>
    </div>

    <div class="text">{{ flowsItem.text }}</div>

    <div class="img">
      <img v-for="item in flowsItem.img" :src="item" alt="" />
    </div>

    <div class="comment-like">
      <span class="comment"
        ><img src="~assets/imgs/Group 2@2x.png" alt="" />{{
          flowsItem.commentNums
        }}</span
      >
      <span class="like" @click="likeClick"
        ><img src="~assets/imgs/ugc_icon_like_selected_24.svg" alt="" />{{
          flowsItem.likeNums
        }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageFlowItem",
  props: {
    flowsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      flag: true,
    }
  },
  methods: {
    likeClick() {
      if (this.flag) {
        this.flowsItem.likeNums++;
        this.flag = false;
      } else {
        this.flowsItem.likeNums--;
        this.flag = true;
      }
    },
  },
};
</script>

<style scoped>
#message-flow-item {
  width: 100%;
  text-align: left;
  margin: 50px 0;
}
.header {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
}
.header img {
  float: left;
  border-radius: 50%;
}
.name-time {
  margin-left: 40px;
  margin-top: 20px;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.img {
  display: flex;
}
.img img {
  padding-right: 1px;
  flex: 50%;
}

.comment-like {
  float: right;
  height: 35px;
  margin-top: 20px;
  margin-right: 20px;
}

.comment-like .comment {
  margin-right: 10px;
}

.comment-like .comment img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
}

.comment-like .like img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>