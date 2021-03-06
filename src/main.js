import Vue from 'vue'
// import socketio from '../src/plugins/socketio'
// import VueSocketIO from 'vue-socket.io'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import envSettings from './envSettings'
Vue.prototype.$http = axios
Vue.config.productionTip = false

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: envSettings.back,
//   vuex: {
//     store,
//     actionPrefix: 'SOCKET123_',
//     mutationPrefix: 'SOCKET_'
//   },
//   // options: { path: "/my-app/" } //Optional options
// }))

new Vue({
  methods: {
    testFromClient() {
      this.$socket.emit('from.client2', 'ping!')
    },
    chat(packet) {
      this.$socket.emit("chat", packet);
    }
  },
  sockets: {
    roomList: function (data) {
      console.log(data)
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
