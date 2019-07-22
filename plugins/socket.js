import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

// eslint-disable-next-line prettier/prettier
export default function ({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: 'http://localhost:3000',
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}
