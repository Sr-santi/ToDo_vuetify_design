<template>
  <div class="dashboard">
    <h1 class="subtitle-1 white--text">Projects</h1>

    <template>
      <v-row justify="center" class="my-5">
        <v-expansion-panels inset>
          <v-expansion-panel v-for="(project,index) in myProjects" :key="index">
            <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
            <v-expansion-panel-content class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'projects',

    props: {
      projects: {
        type: Array,
        default: () => [],
      },
    },

    computed: {
      myProjects() {
        return this.projects.filter(project => {
          return project.person === 'Sr-santiR'
        })
      }
    },

  }
</script>