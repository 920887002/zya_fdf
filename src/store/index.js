import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据格式
  state: {
    user:{
      UserAddress:"",
      fdfAmount:0,
      nftNums:0,
      registers:0,
      amount:0,
      invites:0,
      inviteAmount:0,
      showBool:false,
    },
    contractAddress:{
      IDOfdfStaking:"0xcee5a124a758c1d7885f814f7d2a5f3d1cde9a26"
    },
    tips:{
      errormsg:""
    }
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
