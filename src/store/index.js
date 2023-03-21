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
      userDownLevel1:[]
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
    },
    userRewardInfo:{
      totalCapitals:0,
      totalStatic:0,
      totalLevel1:0,
      totalLevel24:0,
      totalLevel510:0,
      totalLevel1115:0,
      totalLuck:0,
      totalFreeze:0,
      freezeSplit:0,
      totalRevenue:0,
      pendingSplit:0,
      pendingWithdraw:0,
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
