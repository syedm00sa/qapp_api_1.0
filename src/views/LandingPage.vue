<template>
  <v-app class="app-container">
    <!-- Header with Icons in the Top Right Corner -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-title class="appBarTitle">Qapp</v-app-bar-title>
      <v-spacer></v-spacer>
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
              <p class="text-caption mt-1">{{ user.email }}</p>
              <v-card width="200">
                <v-card-title>{{ user.fullName }}</v-card-title>
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
    </v-app-bar>

    <v-main class="main-container">
      <!-- Landing Page Content -->
      <v-container fluid class="pt-4">
        <v-row
          justify="center"
          align="center"
          class="landing-row"
        >
          <!-- Quotation Section -->
          <v-col
            cols="12"
            sm="4"
            md="3"
            lg="2"
            xl="2"
            class="text-center mb-4"
            @click="navigateToSearch('quotation')"
          >
            <v-icon size="64" color="primary">mdi-file-document-edit</v-icon>
            <div class="mt-2">Quotation</div>
          </v-col>
          
          <!-- Inventory Section -->
          <v-col
            cols="12"
            sm="4"
            md="3"
            lg="2"
            xl="2"
            class="text-center mb-4"
            @click="navigateToSearch('inventory')"
          >
            <v-icon size="64" color="primary">mdi-warehouse</v-icon>
            <div class="mt-2">Inventory</div>
          </v-col>

          <!-- Customers Section -->
          <v-col
            cols="12"
            sm="4"
            md="3"
            lg="2"
            xl="2"
            class="text-center mb-4"
            @click="navigateToSearch('customers')"
          >
            <v-icon size="64" color="primary">mdi-account-group</v-icon>
            <div class="mt-2">Customers</div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      user: {
        fullName: localStorage.getItem("userName") || "Guest",
        email: localStorage.getItem("userEmail") || "No email available",
      },
    };
  },

  methods: {
    logout() {
      // Clear user data from localStorage and redirect to login page
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      console.log("User logged out");
      this.$router.push("/login");
    },

    // Generalize navigateToSearch method to take a category as an argument
    navigateToSearch(category) {
      this.$router.push(`/search/${category}`);
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

.v-menu .v-card {
  min-width: 200px;
}

.v-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.landing-row {
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.v-col {
  text-align: center;
}

.v-col div {
  margin-top: 8px;
  font-weight: bold;
  font-size: 1.2em;
}

.v-icon {
  transition: transform 0.3s;
}

.v-icon:hover {
  transform: scale(1.1);
}

/* Ensure proper responsiveness for small screens */
@media (max-width: 600px) {
  .v-row {
    flex-direction: column; /* Stack the items on mobile */
    align-items: flex-start; /* Align items to the left */
  }

  .v-col {
    margin-bottom: 16px; /* Ensure spacing between the sections */
  }

  .v-icon {
    font-size: 48px; /* Smaller icons for mobile screens */
  }

  .v-col div {
    font-size: 1em;
  }
}
</style>
