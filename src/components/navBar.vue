<template>
    <nav>
        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
        >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>

        <v-app-bar app flat color='#4CAF50'>
            <v-btn depressed color="#4CAF50" v-on:click="toggleDrawer" class="hidden-lg-and-up">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Todo</span>
                <span>Sr-Santi</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Drop down menu -->
            <div class="text-center">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        depressed
                        color="#4CAF50"
                        v-bind="attrs"
                        v-on="on"
                        >
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                        v-for="link in links" 
                        v-bind:key="link.text"
                        router
                        v-bind:to="link.route"
                        >
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <v-btn depressed color="#4CAF50">
                <span>Sign out</span>
                <v-icon right>mdi-location-enter</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" color="#66BB6A">
            <v-container>
            <v-row justify="center" align="center" class="mt-5"> 
                <div class="text-center">
                    <v-avatar size="100">
                        <img class="img_ajust" src="https://images.pexels.com/photos/7266018/pexels-photo-7266018.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">Sr-santiR</p>
                </div>
            </v-row>
            </v-container>
            <v-container>
                <v-row justify="center" class="mt-4 mb-3">
                    <popup v-on:projectAdded="snackbar=true"/>
                </v-row>
            </v-container>
            <v-list>
                <v-list-item v-for="link in links" v-bind:key="link.text" router v-bind:to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from '@/components/popup.vue'
export default {
    components: { Popup },
    data() {
        return {
            drawer: false,
            //snackbar
            snackbar: false,
            timeout: 3500,
            text: 'entry successfully registered.',
            //routes
            links: [
                {icon: 'mdi-desktop-mac-dashboard', text: 'Dashboard', route:'/'},
                {icon: 'mdi-folder', text: 'My projects', route: '/projects'},
                {icon: 'mdi-account-supervisor', text: 'team', route: '/team'},
            ],
        }
    },

    props: {
      projects: {
        type: Array,
        default: () => [],
      },
    },

    methods: {
        toggleDrawer () {
            this.drawer = !this.drawer
        }
    }
}
</script>

<style scoped>
.img_ajust {
  object-fit: cover;
}

</style>