import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    log:false,
    drawer: false
  },
  mutations: {
    mutDrawer(data){
      if(data.drawer == false){
        data.drawer= true;
      }
      else{
        data.drawer = false;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
