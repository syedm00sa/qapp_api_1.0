<template>
  <v-main class="login-container" fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="username"
                label="Username"
                :rules="[rules.required]"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                :type="'password'"
                :rules="[rules.required]"
                required
              ></v-text-field>
              <v-btn color="primary" @click="handleLogin">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    handleLogin() {
      if (this.$refs.form.validate()) {
        console.log("Logging in with", this.username, this.password);

        // Simulate login success and navigate to the landing page
        this.$router.push("/landing");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
