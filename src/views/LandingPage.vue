<template>
  <v-app class="app-container">
    <!-- Header with Icons in the Top Right Corner -->
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <!-- Icons in the top-right corner -->
      <v-icon size="32" class="mr-4">mdi-home</v-icon>
      <v-icon size="32">mdi-account</v-icon>
    </v-app-bar>

    <v-main class="main-container">
      <!-- Landing Page Content -->
      <v-container fluid class="pt-4">
        <v-row>
          <v-col
            cols="12"
            md="4"
            lg="1"
            class="text-left"
            @click="navigateToSearch"
          >
            <v-icon size="64" color="primary">mdi-file-document-edit</v-icon>
            <div>Quotation</div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            lg="1"
            class="text-left"
            @click="navigateToSearch"
          >
            <v-icon size="64" color="primary">mdi-warehouse</v-icon>
            <div>Inventory</div>
          </v-col>

          <v-col
            cols="12"
            md="4"
            lg="1"
            class="text-left"
            @click="navigateToSearch"
          >
            <v-icon size="64" color="primary">mdi-account-group</v-icon>
            <div>Customers</div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LandingPage",
  methods: {
    navigateToSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
.app-container {
  height: 100vh;
  overflow: hidden;
}

.main-container {
  height: 100%;
  overflow: hidden;
}

.v-main {
  background-color: #f5f5f5;
}
</style>
