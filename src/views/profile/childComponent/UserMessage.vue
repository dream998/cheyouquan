<template>
  <div id="user-message">
    <div class="icon">
        <img :src="msg.personIcon" alt="">
    </div>
    <div class='name-decription'>
        <div class="name">{{msg.username}}</div>
        <div class='decription'>
            {{msg.introduction}}
            <img src="~assets/imgs/Group 87@2x.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMessage",
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
#user-message {
    display: flex;
    box-sizing: border-box;
    padding: 30px 18px;
    background: #fff;
}

#user-message .icon img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

#user-message .name-decription {
   text-align: left;
   margin-left: 20px;
}

#user-message .name-decription .name {
   font-size: 24px;
   color: #333333;
   line-height: 24px;
   font-weight: 600;
   margin-bottom: 5px;
}

#user-message .name-decription .decription {
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

#user-message .name-decription .decription img {
    width: 13.27px;
    height: 13.27px;
}
</style>