<template>
  <div class="team">
    <h1 class="subtitle-1 white--text">Team</h1>
    <v-container class="grey--text my-7">
        <v-row>
          <v-col cols="12" sm="4" v-for="(person, index) in team" v-bind:key="index">
            <v-card class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100">
                  <img class="img_ajust" :src="person.avatar" :alt="person.name">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="text-subtitle-1 black--text">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="white" depressed>
                  <v-icon small left>mdi-chat-processing</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb.js'

  export default {
    name: 'team',

    props: {
      projects: {
        type: Array,
        default: () => [],
      },
    },

    data() {
      return {
        team: []
      }
    },

    created() {
      db.collection('team').onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
          if (change.type === 'added'){
            this.team.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        });
      })
    },

  }
</script>

<style scoped>
.img_ajust {
  object-fit: cover;
}
</style>