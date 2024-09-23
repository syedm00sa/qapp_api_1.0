<template>
  <v-main>
    <v-card class="mx-auto my-5" max-width="800">
      <v-card-title>
        <span class="headline">Create New Customer</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="6" md="3">
              <v-text-field
                v-model="customer.name"
                label="Name"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.mobile_number"
                label="Mobile Number"
                :rules="[rules.required, rules.number]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.verified"
                label="Verified"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.address"
                label="Address"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.area"
                label="Area"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.city"
                label="City"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.pincode"
                label="Pincode"
                :rules="[rules.required, rules.number]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-combobox
                v-model="customer.tags"
                label="Tags"
                multiple
                chips
                clearable
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.comments"
                label="Comments"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="customer.pid" label="PID"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="clearForm">Clear</v-btn>
        <v-btn color="primary" @click="createCustomer">Create</v-btn>
      </v-card-actions>
    </v-card>
    <!-- Snackbar for Toast Notifications -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" top>
      {{ snackbar.message }}
    </v-snackbar>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: false,
      customer: {
        name: "",
        mobile_number: "",
        verified: "",
        area: "",
        city: "",
        pincode: "",
        tags: [],
        address: "",
        comments: "",
        pid: "",
      },
      // tagOptions: ["black", "blue", "green", "violet", "purple"], // Predefined tag options
      rules: {
        required: (value) => !!value || "Required.",
        number: (value) => !isNaN(value) || "Must be a number.",
      },
      snackbar: {
        show: false,
        message: "",
        color: "success",
      },
    };
  },
  methods: {
    clearForm() {
      this.$refs.form.reset();
    },
    async createCustomer() {
      if (this.$refs.form.validate()) {
        console.log(this.customer);

        try {
          const url = "http://localhost:3000/api/customer/create";
          const response = await axios.post(url, this.customer);

          // Show success message
          this.showSnackbar("Customer created successfully", "success");
          // Handle the response
          console.log("Customer created successfully:", response.data);

          // Clear form after creation
          this.clearForm();
        } catch (error) {
          console.error("Error creating customer:", error);
          // Show error message
          this.showSnackbar(
            "Unable to create customer. Please try again.",
            "error"
          );
          // alert(
          //   "An error occurred while creating the customer. Please try again."
          // );
        }
      }
    },
    showSnackbar(message, color) {
      this.snackbar.message = message;
      this.snackbar.color = color;
      this.snackbar.show = true;
    },
  },
};
</script>

<style scoped>
/* .v-card {
  padding: 2em;
} */
</style>
