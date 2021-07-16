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
     <!-- <comment></comment> -->
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

	<comment class="comment-content" :newComment='commentData' @reply='reply'></comment>
    <DetailBottom @publishComment='publishComment' :username='username'/>

  </div>

</template>

<script>
import TopBar from "components/TopBar.vue";
import PostContent from "./PostContent.vue";
import DetailBottom from "./DetailBottom.vue";
import comment from 'components/Comment/Comment.vue'
import {Toast} from 'vant'
export default {
  name: "Detail",
  components: {
    TopBar,
    PostContent,
    DetailBottom,
	comment
  },


  data() {
    return {
      message: [],
	   username:'',
	   commentID:'',
	   content:'',
	  commentData:{
		 
		  mainData:{
			  "username": "奥特曼打小鬼",
			  "dynamicID": "呼啦呼啦20211181332",
			  "personIcon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F15%2F20160115232537_FYdvP.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628344107&t=5f894a3ef22e2f7be43a216df173ea75",
			  "text": "asf了！",
			  "time": "2021-06-18 13:32",
			  "commentID": "奥特曼打小鬼202454181332",
			  "parentCommentId": "null"
		  },
	},
	additionData:{
				 "username": "奥特曼打小鬼",
				 "dynamicID": "呼啦呼啦20211181332",
				 "personIcon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F15%2F20160115232537_FYdvP.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628344107&t=5f894a3ef22e2f7be43a216df173ea75",
				 "text": "asf了！",
				 "time": "2021-06-18 13:32",
				 "commentID": "奥特曼打小鬼202454181332",
				 "parentCommentId": "null" 
	}
    };
  },

  created() {
	console.log("detail创建了")
    this.message = this.$route.params.data;
    console.log(this.$route.params.data);
  },
  methods:{
  	  goBefore(){
  		  this.$router.back()
  	  },
	  publishComment(content){
		  
		  if(this.additionData.parentCommentId =='null'){
			this.commentData.mainData.text = content
			//console.log( this.commentData.text);
			this.$children[2].newCommentData.unshift(this.commentData);
			//console.log(this.$children[2].newCommentData);
			Toast("评论发布成功！")  
		  }else{
			  
			 for(let i=0;i<this.$children[2].newCommentData.length;i++){
				 if(this.$children[2].newCommentData[i].mainData.commentID==this.additionData.parentCommentId){
					 this.additionData.text = content
					//console.log(this.$children[2].newCommentData[i].additionData)
					this.$children[2].newCommentData[i].additionData.push(this.additionData) 
					Toast('回复成功!')
				 }
			 } 
			 this.additionData.parentCommentId='null'
		  }
		  
		 
	  },
	 
	  reply(replyData){
		  console.log(replyData);
		  this.additionData.parentCommentId = replyData.commentID
		  console.log(this.additionData.parentCommentId)
		  Toast("回复"+replyData.username)
		  this.username = replyData.username
		  
	  }
  }
};

 


</script>

<style scoped>
.content {
  box-sizing: border-box;
  width: 100%;
  text-align: left;

  padding: 0px 10px 10px;

}
.comment{
	margin-bottom: 20px;
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
.comment-content{
	margin-bottom: 40px;
}
</style>