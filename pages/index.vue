<template>
  <v-layout column justify-content align-center>
    <v-flex xs12 sm8 md6>
      <v-btn @click="message">
        NEW MSG
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  sockets: {
    connect() {
      console.log('Client IO connected')
    }
  },
  methods: {
    message() {
      this.$socket.emit('createMessage', {
        text: 'FROM CLIENT'
      })
    }
  }
}
</script>
