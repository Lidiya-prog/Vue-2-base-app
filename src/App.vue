<template>
  <main class="todo-app">
    <TaskInput @onAddTask="addTask"></TaskInput>
    <span class="loader" v-if="isLoading"></span>
    <ul class="task-list my-list">
      <li v-for="item in taskList" :key="item.id" class="todo-row">
        <TaskCard
          @onRemove="removeTask(item.id)"
          @onDone="setDoneTask(item.id)"
          @onEdit="editTask(item.id)"
          :model="item"
        />
      </li>
    </ul>
  </main>
</template>

<script>
  import TaskInput from './components/TaskInput.vue';
  import TaskCard from './components/TaskCard.vue';

  export default {
    name: 'App',
    components: {
      TaskCard,
      TaskInput,
    },
    data() {
      return {
        taskList: [],
        isLoading: false,
      };
    },
    methods: {
      async fetchTasks() {
        const tasks = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        ).then((res) => res.json());

        this.taskList = tasks
          .map((item) => ({
            id: item.id,
            completed: item.completed,
            title: item.title,
          }))
          .splice(0, 10);
        return this.taskList;
      },
      addTask({ title }) {
        const nextId = this.taskList[this.taskList.length - 1].id + 1;
        this.taskList.push({
          id: this.taskList.length > 0 ? nextId : 1,
          title,
          completed: false,
        });
      },
      setDoneTask(id) {
        this.taskList = this.taskList.map((item) => {
          if (item.id === id) item.completed = true;
          return item;
        });
      },
      removeTask(id) {
        this.taskList = this.taskList.filter((item) => item.id !== id);
      },
      editTask(id) {
        const currentIndex = this.taskList.findIndex((task) => task.id === id);

        const newTask = {
          completed: false,
          id,
          title: 'new text',
        };
        //  this.taskList[currentIndex] = newTask
        this.$set(this.taskList, currentIndex, newTask);
      },
    },
    async mounted() {
      this.isLoading = true;
      await this.fetchTasks();
      this.isLoading = false;
    },
  };
</script>

<style scoped>
  .task-list {
    list-style: none;
  }
</style>
