export const moduleTodolist = {
  namespaced: true,
  state: () => ({
    inputNewTodo: "",
    todoList: [],
    idIncrementor: 1,
  }),
  mutations: {
    updateInputNewTodo (state, event) {
      console.log([event, state]);
      state.inputNewTodo = event.target.value;
    },
    addTodo (state) {
      state.todoList = [...state.todoList,{
        id : state.idIncrementor,
        text : state.inputNewTodo,
      }];
      console.log(state);
      state.idIncrementor++;
      state.inputNewTodo = "";
    },
    deleteTodoItem (state, id) {
      state.todoList = [...state.todoList].filter( e => e.id !== id);
    },
  },
}