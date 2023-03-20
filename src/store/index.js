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
      star:5,
      maxDeposit:0,
      referrer:"",
      maxDeposit:0,
      teamNum:0,
      otherTeamDeposit:0,
      maxTeamDeposit:0,
      userOrder:[],
    },
    contractAddress:{
      IDOfdfStaking:"0xAE84a15Be43af7AC2c85dd20f0b0C443B33fcDEC"
    },
    tips:{
      errormsg:""
    },
    IDOinfo:{
      totalRegisterUser:0,
      stakingPool:0 ,
      timePassed:0,
      stakingPoolTime:new Date(),
      stakingPoolCountDown:0,
      startTime:0
    },
    nftpool:{
      balanceOf:0,
      pendingWith:0,
      startTime:0
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
