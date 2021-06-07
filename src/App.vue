<template>
  <v-app style="background: #424242;">
    <nav-bar />
    <v-main class="mx-6 my-4">
      <router-view v-bind:projects="projects"/>
    </v-main>

  </v-app>
</template>

<script>
import navBar from '@/components/navBar'
import db from '@/fb.js'

export default {
  name: 'App',
  components: {
    navBar
  },

  data() {
      return {
        projects: [],
      }
    },

  created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
          if (change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        });
      })
    },
};
</script>
