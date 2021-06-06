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

export default {
  name: 'App',
  components: {
    navBar
  },

  data() {
      return {
        projects: [
          { 
          title: 'Design a new website', 
          person: 'Sr-santiR', 
          due: '1st Jan 2021', 
          status: 'ongoing', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          role:'Web developer', 
          avatar: 'https://images.pexels.com/photos/7266018/pexels-photo-7266018.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          },
          { 
          title: 'Code up the homepage', 
          person: 'Chun Li', 
          due: '10th Jan 2021', 
          status: 'complete', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          role: 'Graphic designer', 
          avatar: 'https://images.pexels.com/photos/7266270/pexels-photo-7266270.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          },
          { 
          title: 'Design video thumbnails', 
          person: 'Ryu', 
          due: '20th Dec 2021', 
          status: 'complete', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          role: 'Web developer', 
          avatar: 'https://images.pexels.com/photos/6194156/pexels-photo-6194156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          { 
          title: 'Create a community forum', 
          person: 'Gouken', 
          due: '20th Oct 2021', 
          status: 'overdue', 
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
          role: 'Social media maverick', 
          avatar: 'https://images.pexels.com/photos/5696534/pexels-photo-5696534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
          {
            title: 'Planning product',
            person: 'Yoshi',
            due: '30th Nov 2021',
            status: 'overdue',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
            role: 'Sales guru', 
            avatar: 'https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          },
        ],
      }
    },
};
</script>
