<template>
  <div class="h-96 overflow-y-auto flex flex-col space-y-2 items-center">
    <Todo v-for="todo in todoList" :key="'todo' + todo.id" :todo="todo"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Todo from "./Todo.vue";
export default {
    name: "Todolist",
    components: { Todo },
    computed: {
      ...mapState('todolist',[
        'todoList'
      ])
    }
}
</script>

<style>

</style>