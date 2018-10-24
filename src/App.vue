<template>
  <div id="app">
    <v-toolbar class="white">
      <router-link id="title_link" :to="{ name: 'home'}">
        <v-toolbar-title>Auto-scope Poster</v-toolbar-title>
      </router-link>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
#title_link { 
  text-decoration: none; 
}
</style>
