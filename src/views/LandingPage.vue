<template>
  <v-app class="app-container">
    <!-- Header with Icons in the Top Right Corner -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-title class="appBarTitle">Qapp</v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- <v-row justify="center"> -->
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="red">
              <v-icon class="white--text">mdi-account</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="red">
                <v-icon class="white--text">mdi-account</v-icon>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-card width="200">
                <v-card-title>{{ username }}</v-card-title>
                <v-card-actions>
                  <v-btn icon @click="logout">
                    <v-icon color="red">mdi-logout</v-icon>
                  </v-btn>
                  <v-btn text @click="logout">Logout</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
      <!-- </v-row> -->
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
  data: () => ({
    user: {
      initials: "",
      fullName: localStorage.getItem("userName"),
      email: "",
    },
  }),

  methods: {
    logout() {
      // Handle logout logic here
      console.log("User logged out");
      this.$router.push("/");
    },
    navigateToSearch() {
      this.$router.push("/search");
    },
    navigateToLogin() {
      this.$router.push("/");
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
.appBarTitle {
  font-weight: bold;
}
</style>
