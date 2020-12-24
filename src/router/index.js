import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
// import login from '../components/login.vue'
import main from '../views/main.vue'
import home from "..//views/home.vue";
import board from '../views/board.vue'
import chat from '../views/chat.vue'
import chatLobby from '../components/chatLobby.vue'
import chatRoom from '../components/chatRoom.vue'
import VueSocketIO from 'vue-socket.io'
import setting from '../views/setting.vue'
import envSettings from '../envSettings'

Vue.use(VueRouter)

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


const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: main,
    beforeEnter(to, from, next) {
      if (!Vue.prototype.$socket) {
        Vue.use(new VueSocketIO({
          debug: true,
          connection: envSettings.back,
          vuex: {
            // store,
            store: Vue.prototype.$store,
            // store: this.$store,
            actionPrefix: 'SOCKET123_',
            mutationPrefix: 'SOCKET_'
          },
          // options: { path: "/my-app/" } //Optional options
        }))
      }
      next()
    },
    children: [
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: 'board',
        name: 'board',
        component: board
      },
      {
        path: 'chat',
        name: 'chat',
        component: chat,
        children: [
          {
            path: '',
            name: 'chatLobby',
            component: chatLobby
          },
          {
            path: 'room',
            name: 'chatRoom',
            component: chatRoom
          },
        ]
      },
      {
        path: 'setting',
        name: 'setting',
        component: setting
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
