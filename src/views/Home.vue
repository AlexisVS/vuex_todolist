<template>
  <div
    class="min-h-screen w-full flex flex-col items-center bg-gray-900 text-gray-200 space-y-6"
  >
    <h1 class="text-4xl uppercase mt-25%">Todo List</h1>
    <div class="w-80">
      <NewTodo />
      <Todolist />
    </div>
  </div>
</template>

<script>
import NewTodo from "../components/NewTodo.vue";
import Todolist from "../components/Todolist.vue";
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    NewTodo,
    Todolist
  }
}
</script>
