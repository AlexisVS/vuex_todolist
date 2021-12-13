<template>
  <div class="max-h-96 flex flex-col space-y-2 items-center">
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
      ...mapState([
        'todoList'
      ])
    }
}
</script>

<style>

</style>