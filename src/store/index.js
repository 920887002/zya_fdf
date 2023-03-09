import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据格式
  state: {
    user: {},
    count:"123456",
    UserAddress:"0x94C20d72295d9Ea392e554a536515C1BE20727b7"
  },
  // 获取state数据
  getters: {
    token: state => state.user,
  },
  // 触发actions方法
  mutations: {
    SET_PROCESS_PEPOLE: (state, user) => {
      state.user = {}
    },
    setaddree(state,newval){
      state.UserAddress=newval
    }
  },
  // 变更state数据
  actions: {
    setLastAppId({ commit, state }, payload) {
      commit('SET_PROCESS_PEPOLE', payload)
    },
  },
  modules: {
  }
})
