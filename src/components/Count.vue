<template>
  <div id="count">
      <div>
          <hr>
         <h1>Count.vue:{{count}}</h1> 
         <h1>Count.vue:{{todos}}</h1> 

         
      </div>
  
  </div>
</template>

<script>


import {mapState} from "vuex";
export default {
  name: 'count',
  components: {
    
  },
  computed: mapState(["count","todos"])
//   computed:{
//     count(){
//       return this.$store.state.count;
//     },
//     todos(){
//       return this.$store.state.todos;
//     }
//   }
}
</script>

<style>

</style>
