export const moduleTodolist = {
  namespaced: true,
  state: () => ({
    inputNewTodo: "",
    todoList: [],
    idIncrementor: 1,
  }),
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
}