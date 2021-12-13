import Vue from 'vue'
import Vuex from 'vuex'
/* --------------------------------- Modules -------------------------------- */
import {moduleTodolist} from './modules/todolist/todolist.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    todolist: moduleTodolist,
  }
})
