<template>
  <div class="todo-form">
    <input
      v-model="title"
      placeholder="Title"
      type="text"
      class="todo-input"
    />
    <button
      @click="onAddTask"
      class="todo-button"
    >Add task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    onAddTask() {
      if (this.title === '') {
        alert('Fill some info please!');
        return;
      }
      this.$emit('onAddTask', { title: this.title });
      this.title = '';
    },
  },
};
</script>

<style scoped>
.task-input {
  margin: 10px 0;
}
</style>
