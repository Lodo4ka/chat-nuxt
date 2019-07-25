<template>
  <v-layout column justify-content align-center>
    <v-flex xs12 sm8 md6>
      <v-card min-width="400">
        <v-card-title>
          <h1>Nuxt chat</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="16"
              :rules="nameRules"
              label="Name"
              required
            />

            <v-text-field
              v-model="room"
              :rules="roomRules"
              label="Input your room"
              required
            />

            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="submit"
            >
              Enter
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
/* eslint-disable prettier/prettier */
import { mapMutations } from 'vuex'
export default {
  layout: 'empty',
  head: {
    title: 'Welcome to nuxt chat'
  },
  sockets: {
    connect() {
      console.log('Client IO connected')
    }
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => {
        return !!v || 'Input your name'
      },
      v => (v && v.length <= 16) || 'Name must be less than 16 characters'
    ],
    room: '',
    roomRules: [
      v => !!v || 'Input room'
    ]
  }),

  methods: {
    ...mapMutations(['setUser']),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        }

        this.setUser(user)
        this.$router.push('chat')
      }
    }
  }
}
</script>
