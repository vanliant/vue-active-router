import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    isCollapse:false,
  },
  mutations: {
    saveUserInfo(state,data){//存储用户信息
      state.userInfo = data
    },
    saveIsCollapse(state,data){
      state.isCollapse = data
    }
  },
  actions: {

  },
  modules: {

  }
})
