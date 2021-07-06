<template>
  <div class="wrapper" ref="wrapper">
      <div class='content'>
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'


export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
      // 1.创建BScorll对象
      // 通过refs获取元素避免多个类名相同时出错
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动位置
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })

     // 3.监听上拉加载更多
     if(this.pullUpLoad) {      // 做一次判断使得代码更高效
       this.scroll.on('pullingUp', () => {
         this.$emit('pullingUp')
       })
     }

     
  },
 methods: {
   refresh() {
     this.scroll && this.scroll.refresh()   // 先判断是否有值
   },
   finishPullUp() {
     this.scroll && this.scroll.finishPullUp()
   }
 }
};
</script>

<style>
</style>