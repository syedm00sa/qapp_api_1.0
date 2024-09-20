<template>
  <v-main class="login-container" fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
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
              <v-btn :loading="loading" color="primary" @click="handleLogin">
                Login
              </v-btn>
            </v-form>
            <v-alert v-if="errorMessage" type="error" class="mt-3">
              {{ errorMessage }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      valid: false,
      loading: false,
      errorMessage: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    async handleLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.errorMessage = "";

        console.log("userName", this.username);
        console.log("Password", this.password);

        try {
          const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            {
              username: this.username,
              password: this.password,
            }
          );

          if (response.data && response.data.status_code === 200) {
            console.log("User Login Successfully");

            // Handle success - store token and navigate
            const token = response.data.data.token;
            localStorage.setItem("token", token); // Save token to localStorage
            this.$router.push("/landing"); // Navigate to landing page
          } else {
            this.errorMessage = response.data.message || "Login failed";
          }
        } catch (error) {
          this.errorMessage = "Unable to login. Please check your credentials.";
        } finally {
          this.loading = false;
        }
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
