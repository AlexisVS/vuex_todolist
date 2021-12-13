import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputNewTodo: "",
    todoList: [],
    idIncrementor: 1,
  },
  mutations: {
    updateInputNewTodo (state, event) {
      state.inputNewTodo = event.target.value;
    },
    addTodo (state) {
      state.todoList = [...state.todoList,{
        id : state.idIncrementor,
        text : state.inputNewTodo,
      }];
      state.idIncrementor++;
      state.inputNewTodo = "";
    },
    deleteTodoItem (state, id) {
      state.todoList = [...state.todoList].filter( e => e.id !== id);
    },
  },
  actions: {
  },
  modules: {
  }
})
