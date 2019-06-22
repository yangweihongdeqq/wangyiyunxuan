import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import 'lib-flexible/flexible'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
