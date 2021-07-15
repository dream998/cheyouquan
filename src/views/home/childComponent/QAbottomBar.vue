<template>
  <div id="qabottombar">
    <div class="ask" @click="goPublish(1)">
      <img src="~assets/imgs/Group 87@2x.png" alt="" />
      我要提问
    </div>

    <div class="ans" @click="writeAnswer">
      <img src="~assets/imgs/Group 87@2x.png" alt="" />
      写回答
    </div>
  </div>
</template>

<script>
	
export default {
  name: "QAbottomBar",
  methods:{
	  goPublish(type){
		  this.$router.push({
			  name:'Publish',
			  params:{
				  type:type
			  }
		  })
	  },
	  writeAnswer(){
		  
	  }
  }
};
</script>

<style scoped>
#qabottombar {
  position: fixed;
  bottom: 0px;
  display: flex;
  width: 375px;
  height: 49px;
  background: #ffffff;
  box-shadow: 0 -1px 0 0 #ededed;
  
  /* border-top: 1px solid #EDEDED; */

  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height: 49px;
  font-weight: 500;
}

#qabottombar img {
  vertical-align: middle;
  width: 13.33px;
}

#qabottombar .ask {
  border-right: 1px solid #ededed;
}

#qabottombar .ask,
.ans {
  flex: 1;
}
</style>