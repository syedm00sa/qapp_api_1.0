<template>
  <v-main>
    <v-card class="mx-auto my-5" max-width="800">
      <v-card-title>
        <span class="headline">Create New Customer</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.name"
                label="Name"
                :rules="[rules.required]"
                required
                class="text-field"
                type="text"
                auto-grow
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.mobile_number"
                label="Mobile Number"
                :rules="[rules.required, rules.number]"
                required
                class="text-field"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.address"
                label="Address"
                :rules="[rules.required]"
                required
                class="text-field"
                type="text"
                auto-grow
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.area"
                label="Area"
                :rules="[rules.required]"
                required
                class="text-field"
                type="text"
                auto-grow
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.city"
                label="City"
                :rules="[rules.required]"
                required
                class="text-field"
                type="text"
                auto-grow
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.pincode"
                label="Pincode"
                :rules="[rules.required, rules.number]"
                required
                class="text-field"
                type="text"
                auto-grow
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-combobox
                v-model="customer.tags"
                label="Tags"
                multiple
                chips
                clearable
                class="text-field"
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.comments"
                label="Comments"
                :rules="[rules.required]"
                required
                class="text-field"
                type="text"
                auto-grow
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="customer.pid"
                label="PID"
                class="text-field"
                type="text"
                auto-grow
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <div class="verified-header">Verified</div>
              <v-radio-group
                v-model="customer.verified"
                class="verified-radio-group"
                :rules="[rules.required]"
              >
                <v-row>
                  <v-col cols="6" class="text-left">
                    <v-radio label="Yes" value="Yes"></v-radio>
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <v-radio label="No" value="No"></v-radio>
                  </v-col>
                </v-row>
              </v-radio-group>
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
        verified: "No",
        area: "",
        city: "",
        pincode: "",
        tags: [],
        address: "",
        comments: "",
        pid: "",
      },
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

          if (
            response.data.message ===
            "Customer with same mobile number is already exist"
          ) {
            this.showSnackbar(
              "Customer with same mobile number is already exist",
              "error"
            );
          } else {
            this.showSnackbar("Customer created successfully", "success");
          }

          // Handle the response
          console.log("Customer created successfully:", response.data);

          // Clear form after creation
          this.clearForm();
        } catch (error) {
          console.error("Error creating customer:", error);
          this.showSnackbar(
            "Unable to create customer. Please try again.",
            "error"
          );
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
/* Allow vertical resize on text fields */
.text-field {
  word-wrap: break-word; /* Break long words */
  overflow-wrap: break-word; /* Break words at boundaries */
  white-space: normal; /* Ensure normal text wrapping */
  resize: vertical; /* Allow resizing the text field vertically */
}

/* Make input fields resize on large text input */
.v-text-field input,
.v-combobox input {
  overflow-wrap: break-word; /* Break long words */
  word-wrap: break-word; /* Prevent horizontal scroll */
}

.verified-header {
  font-weight: bold;
  margin-bottom: 8px;
}

.verified-radio-group {
  margin-top: 8px;
}

.v-card {
  padding: 1em;
}
</style>
