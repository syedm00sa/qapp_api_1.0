<template>
  <v-app>
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
      return this.$route.name !== "landing";
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
