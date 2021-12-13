<template>
  <div class="mb-10 w-full">
    <input
      type="text"
      :value="$store.state.inputNewTodo"
      @input="updateInputNewTodo"
      @keydown.enter="addTodo"
      class="w-full px-4 bg-gray-900 rounded-full"
    />
  </div>
</template>

<script>
import {mapMutations ,mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      'inputNewTodo',
    ]),
  },
  methods: {
    ...mapMutations([
      'addTodo',
      'updateInputNewTodo',
    ]),    
  }
}
</script>

<style>
</style>