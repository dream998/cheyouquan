<template>
  <div id="comment-item">
    <div class="icon">
      <img :src="msg.personIcon" alt="" />
    </div>
    <div class="name-text-time">
      <div class="name">{{ msg.username }}</div>
      <div class="text">
        {{ msg.text }}
      </div>
      <div class="time">
          {{msg.time}}
          <img src="~assets/imgs/Group 25@2x.png" alt="">
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "commentItem",
  props: {
    msg: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#comment-item {
    display: flex;
    box-sizing: border-box;
    padding: 30px 18px;
    background: #fff;
    margin-top: 20px;
}

#comment-item .icon img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

#comment-item .name-text-time {
   text-align: left;
   margin-left: 20px;
}

#comment-item .name-text-time .name {
   font-size: 24px;
   color: #333333;
   line-height: 24px;
   font-weight: 600;
   margin-bottom: 5px;
}

#comment-item .name-text-time .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 400;
}

#comment-item .name-text-time .text img {
    width: 13.27px;
    height: 13.27px;
}

#comment-item .name-text-time .time {
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    line-height: 12px;
    font-weight: 400;
    margin-top: 10px;
}

#comment-item .name-text-time .time img {
    vertical-align: bottom;
    margin-left: 5px;
    width: 12px;
    height: 12px;
}
</style>