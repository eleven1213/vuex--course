<template>
  <div id="app">
    <p>App.vue:{{count}}</p>
    <p>App.vue:{{todos}}</p>

   <Count />
  </div>
</template>

<script>

import Count from './components/Count';
import {mapState} from "vuex";
import { stat } from 'fs';
export default {
  name: 'app',
  components: {
    Count
  },
  computed: mapState(["count","todos"])

  // 写法二
  // computed:mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })

  // 写法一
  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   },
  //   todos(){
  //     return this.$store.state.todos;
  //   }
  // }
}
</script>

<style>

</style>
