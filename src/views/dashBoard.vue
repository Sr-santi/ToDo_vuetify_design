<template>
  <div class="dashboard">
    <h1 class="subtitle-1 white--text">Dashboard</h1>
    <v-container class="grey--text my-7">

      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs}">
            <v-btn small elevation="0" color="#424242" v-on:click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small class="grey--text">mdi-folder-outline</v-icon>
              <span class="caption text-lowercase white--text">By Project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs}">
            <v-btn small elevation="0" color="#424242" v-on:click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small class="grey--text">mdi-account</v-icon>
              <span class="caption text-lowercase white--text">By Person</span>
            </v-btn>
          </template>
          <span>Sort project by person name</span>
        </v-tooltip>
      </v-row>

      <v-card class="pa-3" tile v-for="(project,index) in projects" v-bind:key="index">
        <v-row v-bind:class="`pa-3 project ${project.status}`">
          <v-col cols="7" xs="5" sm="5">
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="2" xs="3" sm="3" class="px-2">
            <div class="caption grey--text">Due By</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="1" xs="2" sm="2">
            <v-chip
            :color="project.status==='complete'?'#3cd1c2':project.status==='ongoing'?'#ffaa2c':'#ff3e70'"
            class="white--text caption my-2" small>
              {{ project.status }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

  </div>
</template>

<script>
  export default {
    name: 'dashboard',

    props: {
      projects: {
        type: Array,
        default: () => [],
      },
    },

    methods: {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
      }
    },

  }
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
</style>
