<template>
  <div id="user-message">
    <div class="icon">
        <img :src="msg.personIcon" alt="">
    </div>
    <div class='name-decription'>
        <div class="name">{{msg.username}}</div>
        <div class='decription'>
            <input class='introduction' :value="msg.introduction"></span>
            <img src="~assets/imgs/Group 87@2x.png" alt="" @click='edit'>
        </div>
    </div>
  </div>
</template>

<script>

import request from "network/request_z.js";

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

  data() {
    return {
      introduction: "",
      userMessage: {},
    };
  },

  watch: {
     msg: function(newVal){
        this.userMessage = newVal; //newVal即是chartData
        this.edit();
      }
  },

  methods: {
    edit() {
      let text = document.querySelector(".introduction");
      text.focus();
      let dd = this.userMessage
      text.onblur = function () {
        this.introduction = text.value;
        console.log('用户简介',this.introduction);
        console.log(dd);
        request.post("api/user/changePersonMessage", {        // 存在问题
          params: {
             userName: dd.username,
             personIcon: dd.personIcon,
             introduction: this.introduction,
             userId:  'adw'    //暂时不知道    
          }
        }).then (res => {
          console.log(res);
        })
      };
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

#user-message .icon img {
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

#user-message .name-decription .decription .introduction {
  border: 0;
}
#user-message .name-decription .decription img {
  width: 13.27px;
  height: 13.27px;
}
</style>