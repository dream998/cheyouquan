<template>
    <div id="message-flow">
        <MessageFlowItem v-for='item in msg' :flows-item='item'/>
    </div>
</template>

<script>

import MessageFlowItem from './MessageFlowItem.vue'

export default {
   name: 'MessageFlow',
   components: {
       MessageFlowItem
   },
   props: {
       msg: {
           type: Array,
           default() {
               return [];
           }
       }
   }
}
</script>

<style scoped>
  #message-flow {
      width: 100%;
      margin: 25px;
  }
</style>