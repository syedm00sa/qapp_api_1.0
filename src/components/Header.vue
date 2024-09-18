<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>CUSTOMERS</v-toolbar-title>

      <v-btn text :to="{ path: '/search' }" class="mx-3">SEARCH</v-btn>
      <v-btn text :to="{ path: '/create' }" class="mx-3">CREATE</v-btn>

      <v-spacer></v-spacer>
      <v-btn icon :to="{ path: '/landing' }">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <h1>Main Hearder</h1>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.v-toolbar-title {
  display: flex;
  justify-content: baseline;
  font-weight: bold;
}
</style>
