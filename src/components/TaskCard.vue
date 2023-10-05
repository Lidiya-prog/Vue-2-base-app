<template>
  <div :class="task.comleted ? 'todo-item complete' : 'todo-item'">
    <input v-model="title" type="text" />
    <div>
      <div v-if="!task.completed" @click="$emit('onDone')">
        <unicon name="check-circle" />
      </div>
      <div v-else @click="$emit('onRemove')">
        <unicon name="times-circle" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      task: {
        required: true,
        default: {
          id: 0,
          title: 'Create video',
          completed: false,
        },
      },
    },
    computed: {
      title: {
        get() {
          return this.task.title;
        },
        set(newVal) {
          this.$emit('onEdit', newVal);
        },
      },
    },
};
</script>

<style scoped>
  input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: white;
  }
  .task-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
