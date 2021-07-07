<template>
  <div id="detail-bottom">
    <input type="text" placeholder="说点什么吧" />
    <span>发布</span>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
};
</script>

<style scoped>
#detail-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 375px;
  height: 48px;
}
#detail-bottom input {
  box-sizing: border-box;
  margin: 8px 16px;
  width: 295px;
  height: 32px;
  background: #f4f5f6;
  border: 0 solid #e6e6e6;
  border-radius: 16px;

  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0;
  text-align: left;
  line-height: 14px;
  font-weight: 400;
  padding-left: 12px;
}

#detail-bottom span {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #3296fa;
  letter-spacing: 0;
  text-align: left;
  line-height: 16px;
  font-weight: 500;
  margin-right: 16px;
}
</style>