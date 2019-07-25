<template>
  <v-app app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          />

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          />

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title />
              <v-list-item-subtitle />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <!-- -->
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn icon @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Чат комнаты {{ user.room }}</v-toolbar-title>
    </v-toolbar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <div>
        <!-- If using vue-router -->
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    drawer: true
  }),
  computed: mapState(['user']),
  methods: {
    exit() {}
  }
}
</script>
