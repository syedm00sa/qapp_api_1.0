<template>
  <v-container>
    <v-card class="mx-auto my-5" max-width="1200">
      <v-card-title>
        <span class="headline">Manage Customers</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="customers"
          item-key="id"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn color="primary" @click="editCustomer(item)">Edit</v-btn>
            <v-btn color="red" @click="deleteCustomer(item)">Delete</v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "First Name", value: "firstName" },
        { text: "Area", value: "area" },
        { text: "City", value: "city" },
        { text: "Pincode", value: "pincode" },
        { text: "Landmark", value: "landmark" },
        { text: "Mobile 1", value: "mobile1" },
        { text: "Mobile 2", value: "mobile2" },
        { text: "Address 1", value: "address1" },
        { text: "Address 2", value: "address2" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      customers: [
        {
          id: 1,
          firstName: "John",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        {
          id: 2,
          firstName: "Mari",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        {
          id: 3,
          firstName: "Karthick",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        {
          id: 4,
          firstName: "sathis",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        {
          id: 5,
          firstName: "Prakash",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        {
          id: 6,
          firstName: "Shiva",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        {
          id: 6,
          firstName: "Mahesh",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        {
          id: 7,
          firstName: "Kishore",
          area: "Downtown",
          city: "Metropolis",
          pincode: "123456",
          landmark: "Near Park",
          mobile1: "1234567890",
          mobile2: "0987654321",
          address1: "123 Main St",
          address2: "Apt 4B",
        },
        // More customer objects...
      ],
    };
  },
  methods: {
    editCustomer(customer) {
      // Logic to edit customer
      console.log("Editing customer", customer);
    },
    deleteCustomer(customer) {
      // Logic to delete customer
      this.customers = this.customers.filter((c) => c.id !== customer.id);
      console.log("Deleted customer", customer);
    },
  },
};
</script>

<style scoped>
.v-card {
  padding: 20px;
}
</style>
