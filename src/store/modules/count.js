const state = {
    count: 0,
    
};
const getters = {
    count: state => state.count
};
const mutations = {
    incrementCount: state => state.count++,
    decrementCount: (state,payload) => state.count -= payload.amount
};
const actions = {
    incrementCountAsync: ({commit}) => {
        setTimeout(() => {
          commit("incrementCount")
        },1000)
      },
      decrementCountAsync: (context,payload)  => {
        setTimeout(() => {
          context/*= this.$store */ .commit("decrementCount",payload)
        },1000)
      },
};

export default{
    state,getters,mutations,actions
}