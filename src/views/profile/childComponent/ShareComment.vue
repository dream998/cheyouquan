<template>
  <div id="share-comment">

    <div class="share" @click='shareClick'>
      <img class="icon" src="~assets/imgs/Star 2 Copy@2x.png" alt="" />
      <span class="text">我的动态</span>
      <img  class='img' src="~assets/imgs/arrow_ic@2x.png" alt="" />
    </div>

    <div class="comment" @click='commentClick'>
      <img class="icon" src="~assets/imgs/Group 2@2x.png" alt="" />
      <span class="text">我的评论</span>
      <img  class='img' src="~assets/imgs/arrow_ic@2x.png" alt="" />
    </div>

  </div>
</template>

<script>
export default {
  name: "ShareComment",
  methods: {
      commentClick() {
          this.$router.replace('/mycomment')
      },

      shareClick() {
        this.$router.replace('/myshare')
      }
  }
};
</script>

<style scoped>
#share-comment {
  box-sizing: border-box;
  margin-top: 6px;
  padding: 30px 18px;
  background-color: #fff;
}

#share-comment .share {
    background-color: #fff;
}

#share-comment .share .icon {
  margin-right: 15px;
  padding-left: 5px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

#share-comment .share .text {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
  font-weight: 400;
}

#share-comment .share .img {
    vertical-align: middle;
    margin-left: 200px;
}

#share-comment .comment {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 0.5px solid #E8E8E8;
  
  text-align: center;
}

#share-comment .comment .icon {
  margin-right: 15px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

#share-comment .comment .text {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
  font-weight: 400;
}

#share-comment .comment .img {
    vertical-align: middle;
    margin-left: 200px;
}
</style>