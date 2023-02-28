import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据格式
  state: {
    user: {}
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
