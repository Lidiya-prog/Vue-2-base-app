<template>
  <div :class="model.comleted ? 'todo-item complete' : 'todo-item'">
    <div>
      <h4>{{ model.title }}</h4>
    </div>
    <div>
      <div v-if="!model.completed" @click="emitOnDone">
        <check-circle-outline />
      </div>
      <div v-else @click="emitOnRemove">
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
      model: {
        required: true,
        default: {
          id: 0,
          title: 'Create video',
          completed: false,
        },
      },
    },
    setup(props, { emit }) {
      const emitOnDone = () => {
        emit('onDone');
      };

      const emitOnRemove = () => {
        emit('onRemove');
      };

      return {
        emitOnDone,
        emitOnRemove,
      };
    },
  };
</script>

<style scoped>
  .task-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
