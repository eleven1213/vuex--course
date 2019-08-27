import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //属性
    count: 0,
    todos:[
      {id:1,title:"todos item 1",completed:false},
      {id:2,title:"todos item 2",completed:true},
      {id:3,title:"todos item 3",completed:true}

    ]
  },
  getters:{
    count: state => state.count,
    // 等同于
    // count(state){
    //   return ++state.count
    // }
    completedTodos: state => state.todos.filter(todo =>todo.completed),
    
    // 等同于
    // completedTodos: function(state){
    //   return state.todos.filter(function(todo){
    //     return todo.completed;
    //   })
    // }

    completedTodosCount: (state,getters) => getters.completedTodos.length,
    // 等同于
    // completedTodosCount: function(state,getters){
    //   return getters.completedTodos.length
    // }

    getTodosById: state => id => state.todos.find(todo => todo.id == id)
    // getTodosById: function(state){
    //   //处理东西
    //   function(id){
    //     return state.todos.find(function(todo){
    //       return todo.id == id
    //     })(id)
    //   }
    // }
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state,payload) => state.count -= payload.amount,
    setTodos:(state,todos) => state.todos = todos
  },
  actions: {
    incrementCountAsync: ({commit}) => {
      setTimeout(() => {
        //解构
        // const object = {
        //   name:"米斯特任",
        //   age:20
        // }
        // const name = object.name;
        // const age = object.age;
        // const{name , age} = object;
        //context/*= this.$store */ .commit("incrementCount")
        commit("incrementCount")
      },1000)
    },
    decrementCountAsync: (context,payload)  => {
      setTimeout(() => {
        context/*= this.$store */ .commit("decrementCount",payload)
      },1000)
    },
    async fetchDataAsync(context){
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos",response.data);
    }
   
  }
})
