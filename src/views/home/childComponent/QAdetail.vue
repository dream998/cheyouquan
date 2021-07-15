<template>
  <div id="qadetail">
    <top-bar title="车友圈" @goBefore='goBefore'></top-bar>
    <div class="content">
      <PostContent :msg="message" />
    </div>
    <div class="blank"></div>
    <div class="ans">
      <span>回答</span>
      ({{ message.commentNums }})
    </div>
	<answer class="answer"></answer>
	<QAbottomBar />
  </div>
</template>

<script>

import TopBar from "components/TopBar.vue";
import PostContent from "./PostContent.vue";
import QAbottomBar from "./QAbottomBar.vue";
import Answer from 'components/Comment/Answer.vue'
export default {
  name: "QAdetail",
  data() {
    return {
      message: {
		  commentNums:0
	  },
    };
  },

  components: {
    TopBar,
    PostContent,
    QAbottomBar,
	Answer
  },
  methods:{
	  goBefore(){
		  this.$router.back()
	  }
  },
  created() {
    this.message = this.$route.params.data;
    console.log(this.message);
  },

};
</script>

<style scoped>
.content {
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 0 10px 10px;
}


.blank {
  width: 100%;
  height: 6px;
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
.answer{
		
		margin-bottom: 50px;
	}
</style>