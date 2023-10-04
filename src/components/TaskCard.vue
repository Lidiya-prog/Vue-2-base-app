<template>
  <div :class="model.comleted ? 'todo-row complete' : 'todo-row'">
    <input v-model="task.title" type="text" @input="$emit('onEdit')" />
    <div>
      <div v-if="!model.completed" @click="emitOnDone">
        <unicon name="check-circle"> </unicon>
      </div>
      <div v-else @click="emitOnRemove">
        <unicon name="times-circle"></unicon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      required: true,
      default: {
        id: 0,
        title: 'Create video',
        completed: false,
      },
    },
  },
  computed: {
    task: {
      get() {
        return this.model;
      },
      set(newVal) {
        return newVal;
      },
    },
  },
  methods: {
    emitOnDone() {
      this.$emit('onDone');
    },
    emitOnRemove() {
      this.$emit('onRemove');
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
}
.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
