<template>
  <div id="my-comment">
    <div class="top">
      <img src="~assets/imgs/arrow_ic.svg" alt="" @click="back" />
      <span>我的评论</span>
      <span>···</span>
    </div>
    
    <commentItem v-for='item in message' :msg='item' />
  </div>
</template>

<script>

import commentItem from './commentItem.vue'

import {getMyComment} from 'network/MyComment.js'

export default {
  name: "MyComment",
  components: {
    commentItem
  },
  data() {
    return {
      message: []
    }
  },
  created() {
     getMyComment().then(res => {
       this.message = res.data.data
     })
  },

  methods: {
    back () {
      this.$router.replace('/profile');
    }
  }
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.173333rem;
  padding: 5px 0.625rem;
  box-sizing: border-box;
  background: #fff;
}

.top img {
  width: 1.469375rem;
  height: 1.469375rem;

  transform: scaleX(-1);
}

.top span {
  font-family: PingFang SC;
  color: #333333;
  font-size: 16px;
}

</style>