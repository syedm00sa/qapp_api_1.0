<template>
  <v-app>
    <!-- Show header only if not on the login page -->
    <v-app-bar v-if="showHeader" app class="border rounded" max-height="300">
      <Header />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    showHeader() {
      // List of route names where the header should not be shown
      const excludedRoutes = ["login", "landing"]; // Add any other route names where you don't want to show the header

      // Return true if the current route is not in the excluded routes
      return !excludedRoutes.includes(this.$route.name);
    },
  },
};
</script>

<style scoped>
.v-container {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  background-color: brown;
}
</style>
