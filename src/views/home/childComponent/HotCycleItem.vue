<template>
  <div id="hotcycleitem">
    <div class="cycle-name">{{ msg.name }}</div>
    <div class="car-img">
      <img v-for="item in msg.imgs" :src="item" alt="" />
    </div>
    <div class="icon-text-btn">
        <img v-for="item in msg.perconIcons" :src="item" alt="" />
        <span>{{msg.count}}位活跃车友</span>
        <button>加入</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "HotCycleItem",
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
#hotcycleitem {
  box-sizing: border-box;
  margin: 0 6px;
  padding: 12px 6px;
  border: 0.5px solid #eee;
}
#hotcycleitem .cycle-name {
  font-family: PingFang-SC-Bold;
  font-size: 14px;
  color: #333333;
  line-height: 14px;
  font-weight: 700;
  margin-bottom: 12px;
}

#hotcycleitem .car-img {
  display: flex;
  margin-right: 1.5px;
}

#hotcycleitem .icon-text-btn img {
    border-radius: 50%;
    vertical-align: middle;
}

#hotcycleitem .icon-text-btn span {
font-family: PingFangSC-Regular;
font-size: 12px;
color: #333333;
letter-spacing: 0;
line-height: 12px;
font-weight: 400;
margin-left: 4px;
}

#hotcycleitem .icon-text-btn button {
  width: 44px;
  height: 20px;
  border: 0;
  background: #FFE100;
border-radius: 10px;

font-family: PingFang-SC-Medium;
font-size: 10px;
color: #333333;
letter-spacing: 0;
text-align: center;
line-height: 12px;
font-weight: 500;
margin-left: 24px;
}
</style>
