<template>
  <v-layout wrap app>
      <v-app-bar app class="elevation-2" color="success px-6" dark>
      <v-app-bar-nav-icon @click="drawerExpanded=!drawerExpanded"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Admin</span> Panel
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Dashboard @drawer="a=>drawerExpanded=a" :drawer="drawerExpanded" />
  </v-layout>
</template>
<script>
import Dashboard from "@/components/Dashboard";
export default {
  data: () => ({
    drawerExpanded: false
  }),
  components: {
    Dashboard
  }
};
</script>