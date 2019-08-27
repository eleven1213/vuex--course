import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //属性
    count: 0,
    todos:[
      {id:1,title:"todos item 1",completed:false},
      {id:1,title:"todos item 1",completed:false},
      {id:1,title:"todos item 1",completed:false}

    ]
  },
  getters:{

  },
  mutations: {

  },
  actions: {

  }
})
