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
                <span class="text-h5">{{ user.initials }}</span>
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
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    user: {
      initials: "",
      fullName: "Selva",
      email: "sk@gamil.com",
    },
  }),
  methods: {
    logout() {
      console.log("Logout");

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.v-toolbar-title {
  display: flex;
  justify-content: baseline;
  font-weight: bold;
}
</style>
