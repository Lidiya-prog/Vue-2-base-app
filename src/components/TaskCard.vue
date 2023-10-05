<template>
  <div :class="task.comleted ? 'todo-item complete' : 'todo-item'">
    <input v-model="title" type="text" />
    <div>
      <div v-if="!task.completed" @click="$emit('onDone')">
        <check-circle-outline />
      </div>
      <div v-else @click="$emit('onRemove')">
        <close-circle-outline />
      </div>
    </div>
  </div>
</template>

<script>
  import CloseCircleOutline from 'vue-material-design-icons/CloseCircleOutline.vue';
  import CheckCircleOutline from 'vue-material-design-icons/CheckCircleOutline.vue';

  export default {
    components: { CloseCircleOutline, CheckCircleOutline },
    emits: ['onDone', 'onRemove'],
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
