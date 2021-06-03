<template>
    <nav>
        <v-app-bar app flat color='#4CAF50'>
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
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.v-application {
  background-color: #00a86b;
}
</style>