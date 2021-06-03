<template>
  <v-app style="background: #424242;">
    <nav-bar />
    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  name: 'App',
  components: {
    navBar
  },

  data: () => ({
    //
  }),
};
</script>
