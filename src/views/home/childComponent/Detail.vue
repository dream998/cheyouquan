<template>
     <div id="detail">
         <top-bar title='帖子详情'></top-bar>
         <!-- <h4>{{this.$route.params.data}}</h4> -->
     </div>
</template>

<script>

import TopBar from 'components/TopBar.vue'

export default {
   name: 'Detail',
   components: {
	TopBar
  },
}
</script>

<style scoped>

</style>