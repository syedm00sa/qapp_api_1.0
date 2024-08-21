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
                v-model="customer.firstName"
                label="Name"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.mobile1"
                label="Mobile 1"
                :rules="[rules.required, rules.number]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.mobile2"
                label="Mobile 2"
                :rules="[rules.number]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.address1"
                label="Address 1"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.address2"
                label="Address 2"
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
              <v-text-field
                v-model="customer.landmark"
                label="Tags"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.address1"
                label="Comments"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.address2"
                label="PID"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                v-model="customer.address2"
                label="Chit"
              ></v-text-field>
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
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      customer: {
        firstName: "",
        area: "",
        city: "",
        pincode: "",
        landmark: "",
        mobile1: "",
        mobile2: "",
        address1: "",
        address2: "",
        chit: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        number: (value) => !isNaN(value) || "Must be a number.",
      },
    };
  },
  methods: {
    clearForm() {
      this.$refs.form.reset();
    },
    createCustomer() {
      if (this.$refs.form.validate()) {
        // Logic to create customer
        console.log("Customer created", this.customer);
        // Clear form after creation
        this.clearForm();
      }
    },
  },
};
</script>

<style scoped>
/* .v-card {
  padding: 2em;
} */
</style>
