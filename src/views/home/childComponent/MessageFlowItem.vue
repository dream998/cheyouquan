<template>
  <div id="message-flow-item">

    <PostContent :msg='flowsItem' />

    <!-- 为图文的情况，为问答的情况暂时还没写 -->
    <div class="circle-comment-like" v-if='!flowsItem.type'>  
      <span class="circle">
           <img src="~assets/imgs/Group 17@2x.png" alt="">
           {{flowsItem.circle}}
      </span>
      <span class="comment"
        ><img src="~assets/imgs/Group 2@2x.png" alt="" />{{
          flowsItem.commentNums
        }}</span
      >
      <span class="like" @click="likeClick">
        <img v-if='flag' src="~assets/imgs/ugc_icon_like_normal_24.svg" alt="" />
        <img v-else src="~assets/imgs/ugc_icon_like_selected_24.svg" alt="" />
        {{flowsItem.likeNums}}
        </span
      >
    </div>
  </div>
</template>

<script>

import PostContent from './PostContent.vue'

export default {
  name: "MessageFlowItem",
    components: {
    PostContent,
  },
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

.circle-comment-like {
  /* float: right; */
  height: 35px;
  margin-top: 20px;
  margin-right: 20px;
  font-family: PingFang SC;
  color: #333333;
  font-size: 12px;
  line-height: 12px;
}

.circle-comment-like .circle {
  /* float: left; */
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  line-height: 12px;
  font-weight: 500;
  margin-right: 90px;
}

.circle-comment-like .circle img {
  vertical-align: middle;
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.circle-comment-like .comment {
  margin-right: 10px;
  
}

.circle-comment-like .comment img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
}

.circle-comment-like .like img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>