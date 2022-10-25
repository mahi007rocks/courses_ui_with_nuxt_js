import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import auth from './modules/auth'
import course from './modules/course'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
   auth,
   course
  }
})
