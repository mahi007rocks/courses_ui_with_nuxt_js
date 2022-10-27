import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import auth from './auth'
import course from './course'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      course
    }
  })
}

export default createStore