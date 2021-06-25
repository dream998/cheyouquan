<template>
  <div id="publish">
    <div class="top">
      <img src="~assets/imgs/arrow_ic.svg" alt="" />
      <span>发布</span>
      <span>···</span>
    </div>

    <div class='text'>
        <input type="text" placeholder="分享汽车生活..." @click = 'inputClick'>
    </div>

    <div class="addImg">
        <img src="~assets/imgs/addpic_gray@2x.png" alt="">
    </div>

    <div class="select">
        <button>
            <div class='big'>
                <div class='small'></div>
            </div>
           选择车圈 >
        </button>
        <div class="num">0/2000</div>
        <div class='fabu'>发布</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Publish',
    methods: {
        inputClick () {
            //让input框自动聚焦就可以让手机自动调出软键盘
            var input = document.querySelector('input');
            input.focus();
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

.text {
    margin-top: 35px;
    font: 16px;
}
.text input {
   width: 343px;
   height: 24px;
   border: none;
   outline: none;
}

.addImg {
    position: relative;
    margin-top: 60px;
    margin-left: 10px;
    width: 113px;
    height: 113px;
    background-color: #F4F5F6;
}

.addImg img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.select {
    display: flex;
    margin-top: 100px;
}
.select button {
    float: left;
    display: flex;
    height: 30px;
    width: 40%;
    text-align: center;
    /* color: #333333; */
    font-size: 16px;
    border: none;
    outline: 0;
    background-color: #fff;

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
    margin-left: 80px;
} 
.select .fabu {
    width: 64px;
    height: 28px;
    background-color: #FFE100 ;
    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    margin-left: 20px;
    color: #333333;
    font-size: 14px;
}
</style>