<template>
    <nav>
        <v-app-bar app flat color='#4CAF50'>
            <v-btn depressed color="#4CAF50" v-on:click="toggleDrawer" class="hidden-lg-and-up">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Todo</span>
                <span>Sr-Santi</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn depressed color="#4CAF50">
                <span>Sign out</span>
                <v-icon right>mdi-location-enter</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" color="#66BB6A">
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
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-desktop-mac-dashboard', text: 'Dashboard', route:'/'},
                {icon: 'mdi-folder', text: 'My projects', route: '/projects'},
                {icon: 'mdi-account-supervisor', text: 'team', route: '/team'},
            ],
        }
    },

    methods: {
        toggleDrawer () {
            this.drawer = !this.drawer
        }
    }
}
</script>

<style scoped>
.v-application {
  background-color: #00a86b;
}
</style>