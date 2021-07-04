<template>
  <div id="publish">

    <top-bar title='发布'></top-bar>

    <div class="text">
      <input type="text" placeholder="分享汽车生活..." @click="inputClick" />
    </div>

    <div class="addImg">
      <img src="~assets/imgs/addpic_gray@2x.png" alt="" />
    </div>

    <div class="select">
      <button>
        <div class="big">
          <div class="small"></div>
        </div>
        选择车圈 >
      </button>
      <div class="num">0/2000</div>
      <div class="fabu">发布</div>
    </div>
  </div>
</template>

<script>
import TopBar from "components/TopBar.vue";

export default {
  name: "Publish",
  components: {
    TopBar,
  },
  methods: {
    inputClick() {
      //让input框自动聚焦就可以让手机自动调出软键盘
      var input = document.querySelector("input");
      input.focus();
    },

    back() {
      this.$router.replace("/home");
    },
  },
};
</script>

<style scoped>

.text {
  margin: 12px 18px;

  font: 16px;
}
.text input {
  width: 343px;
  height: 24px;
  border: none;
  outline: none;

  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #999999;
  line-height: 24px;
  font-weight: 400;
}

.addImg {
  position: relative;
  margin-top: 72px;
  margin-left: 16px;
  width: 113px;
  height: 113px;
  background-color: #f4f5f6;
}

.addImg img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.select {
  display: flex;
  margin-top: 102px;
}
.select button {
  float: left;
  display: flex;
  height: 30px;
  width: 40%;
  text-align: center;
  border: none;
  outline: 0;
  background-color: #fff;

  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 700;
}

.big {
  width: 12px;
  height: 12px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 3px 10px;
}
.small {
  width: 5px;
  height: 5px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #333333;
  margin: 2px auto;
}

.select .num {
  margin-top: 5px;
  margin-left: 100px;
  margin-right: 10px;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  text-align: right;
  line-height: 12px;
  font-weight: 400;
}
.select .fabu {
  width: 64px;
  height: 28px;
  background-color: #ffe100;

  border-radius: 14px;
  /* margin-right: 20px; */


  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  font-weight: 500;
}
</style>