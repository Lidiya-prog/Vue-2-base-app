import Vue from 'vue'
import App from './App.vue'
import './index.css'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniTimesCircle, uniCheckCircle } from 'vue-unicons/dist/icons'

Unicon.add([uniTimesCircle, uniCheckCircle])

Vue.use(Unicon)

new Vue({
  el: '#app',
  render: h => h(App)
})