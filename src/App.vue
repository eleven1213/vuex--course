<template>
  <div id="app">
   <!-- mutations -->
   <button @click="decrementCount({amount:2})">-</button>
   <span>{{count}}</span>
   <button @click="incrementCount">+</button>
  </div>
</template>

<script>

import Count from './components/Count';
import {mapState,mapGetters,mapMutations} from "vuex";
import { stat } from 'fs';
export default {
  name: 'app',
  components: {
    Count
  },
  computed:mapGetters(
    ["count","completedTodos","completedTodosCount","getTodosById"]
    ),
    methods:mapMutations(["incrementCount","decrementCount"])
  // methods:{
  //   increment(){
  //     //调用mutations里的incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n){
  //     //调用mutations里的decrementCount
  //     this.$store.commit("decrementCount",n);
  //   }
  // }
  // 等同于
  // computed:{
  //   count(){
  //     return this.$store.getters.getCount;
  //   },
  //   completedTodos(){
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount(){
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById(){
  //     return this.$store.getters.getTodosById;
  //   }
  // }

  
}
</script>

<style>

</style>
