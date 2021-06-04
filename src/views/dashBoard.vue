<template>
  <div class="dashboard">
    <h1 class="subtitle-1 white--text">Dashboard</h1>
    <v-container class="grey--text my-7">

      <v-row class="mb-3">
        <v-btn small elevation="0" color="#424242">
          <v-icon left small class="grey--text">mdi-folder-outline</v-icon>
          <span class="caption text-lowercase white--text">By Project name</span>
        </v-btn>
        <v-btn small elevation="0" color="#424242">
          <v-icon left small class="grey--text">mdi-account</v-icon>
          <span class="caption text-lowercase white--text">By Person</span>
        </v-btn>
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
            <div class="right">
              <v-chip
              :color="project.status==='complete'?'#3cd1c2':project.status==='ongoing'?'#ffaa2c':'#ff3e70'"
              class="white--text caption my-2" small>
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

  </div>
</template>

<script>
  export default {
    name: 'dashboard',
    data() {
      return {
        projects: [
          { 
          title: 'Design a new website', 
          person: 'Sr-santiR', 
          due: '1st Jan 2021', 
          status: 'ongoing', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          },
          { 
          title: 'Code up the homepage', 
          person: 'Chun Li', 
          due: '10th Jan 2021', 
          status: 'complete', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          },
          { 
          title: 'Design video thumbnails', 
          person: 'Ryu', 
          due: '20th Dec 2021', 
          status: 'complete', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          },
          { 
          title: 'Create a community forum', 
          person: 'Gouken', 
          due: '20th Oct 2021', 
          status: 'overdue', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          },
        ],
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
