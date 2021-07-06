<template>
  <div id="qadetail">
    <top-bar title="车友圈"></top-bar>
    <div class="qadetail">
      <PostContent :msg="message" />
    </div>
    <div class="blank"></div>
    <div class="ans">
      <span>回答</span>
      ({{ message.commentNums }})
    </div>

    <QAbottomBar />
  </div>
</template>

<script>

import TopBar from "components/TopBar.vue";
import PostContent from "./PostContent.vue";
import QAbottomBar from "./QAbottomBar.vue";

export default {
  name: "QAdetail",
  data() {
    return {
      message: {},
    };
  },

  components: {
    TopBar,
    PostContent,
    QAbottomBar,
  },

  created() {
    this.message = this.$route.params.data;
    console.log(this.message);
  },

};
</script>

<style scoped>
.qadetail {
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 0px 10px;
}

.blank {
  width: 100%;
  height: 1px;
  background-color: #f4f5f6;
  margin-top: 10px;
}
.ans {
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 700;
  padding: 5px 10px;
}
</style>