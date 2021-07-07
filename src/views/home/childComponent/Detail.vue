<template>

  <div id="detail">
      <top-bar title='帖子详情' @goBefore="goBefore"></top-bar>

    <div class="content">
      <PostContent :msg="message" />
    </div>

    <!-- 有评论情况 -->
    <div class="comment" v-if='Number(message.commentNums)'>
      <div class="blank"></div>
      <span>评论</span>
    <!-- 评论展示组件 -->
    </div>

    <!-- 无评论情况 -->
    <div class="nocomment" v-else>
      <div class="fromcircle">
        <span class="from">来自：</span>
        <span class="circlename">{{ message.circle }}</span>
      </div>
      <div class="blank"></div>

      <img src="~assets/imgs/mountain_pic@2x.png" alt="" />

      <div class="text">抢先评论，这里需要你的态度</div>
    </div>

    <DetailBottom />
  </div>

</template>

<script>
import TopBar from "components/TopBar.vue";
import PostContent from "./PostContent.vue";
import DetailBottom from "./DetailBottom.vue";

export default {
  name: "Detail",
  components: {
    TopBar,
    PostContent,
    DetailBottom,
  },
<<<<<<< HEAD

  data() {
    return {
      message: [],
    };
  },

  created() {
    this.message = this.$route.params.data;
    console.log(this.$route.params.data);
  },
};
=======
  methods:{
	  goBefore(){
		  this.$router.back()
	  }
  }
}
>>>>>>> jianning
</script>

<style scoped>
.content {
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 50px 10px 10px;
}

.comment span{
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 16px;
  font-weight: 700;
  margin: 12px 15px;
}

.blank {
  width: 100%;
  height: 6px;
  background-color: #f4f5f6;
  margin-top: 10px;
}

.nocomment .from {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  line-height: 12px;
  font-weight: 400;
  margin-left: 15px;
}

.nocomment .circlename {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  line-height: 12px;
  font-weight: 500;
}

.nocomment img {
  width: 150px;
  height: 150px;
  margin: 44px 112px 20px 113px;
}

.nocomment .text {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
}
</style>