import Vue from 'vue';
import App from './App.vue';
import './index.css';

window.vm = new Vue({
  el: '#app',
  render: (h) => h(App),
});
