<template>
  <v-container>
    <!-- Search Box -->
    <v-card class="mb-5" elevation="2">
      <v-card-title>
        <v-text-field
          v-model="searchQuery"
          label="Search customers"
          append-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>

    <!-- Manage Customers Table -->
    <v-card class="mb-5" elevation="2">
      <v-card-title>
        <h2>Manage Customers</h2>
      </v-card-title>
      <div class="table-wrapper">
        <v-data-table
          :headers="headers"
          :items="customers"
          class="elevation-1"
          dense
        >
          <template v-slot:item.actions="{ item }">
            <v-btn color="primary" @click="editCustomer(item)">Edit</v-btn>
            <v-btn color="red" @click="deleteCustomer(item)">Delete</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-card>

    <!-- Search Results Table -->
    <v-card v-if="searchQuery" elevation="2">
      <v-card-title>
        <h2>Search Results</h2>
      </v-card-title>
      <div class="table-wrapper">
        <v-data-table
          :headers="headers"
          :items="filteredCustomers"
          class="elevation-1"
          dense
        ></v-data-table>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      customers: [
        {
          id: 1,
          Name: "Mariselvam",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          tag: "sample tag",
          comment: "sample comment",
          pid: "sample pid",
        },
        {
          id: 2,
          Name: "Karthi",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          tag: "sample tag",
          comment: "sample comment",
          pid: "sample pid",
        },
        {
          id: 3,
          Name: "Prakash",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          tag: "sample tag",
          comment: "sample comment",
          pid: "sample pid",
        },
        {
          id: 4,
          Name: "Maheshkumar",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          tag: "sample tag",
          comment: "sample comment",
          pid: "sample pid",
        },
        {
          id: 5,
          Name: "Sathis",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          tag: "sample tag",
          comment: "sample comment",
          pid: "sample pid",
        },
        {
          id: 6,
          Name: "Shiva",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          tag: "sample tag",
          comment: "sample comment",
          pid: "sample pid",
        },
      ],
      headers: [
        { text: "Name", value: "Name" },
        { text: "Mobile 1", value: "mobile1" },
        { text: "Mobile 2", value: "mobile2" },
        { text: "Address 1", value: "address1" },
        { text: "Address 2", value: "address2" },
        { text: "Area", value: "area" },
        { text: "City", value: "city" },
        { text: "Pincode", value: "pincode" },
        { text: "Tag", value: "tag" },
        { text: "Comment", value: "comment" },
        { text: "PID", value: "pid" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter((customer) => {
        return customer.Name.toLowerCase().includes(
          this.searchQuery.toLowerCase()
        );
      });
    },
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
  margin-bottom: 20px;
}

.table-wrapper {
  overflow-x: auto;
}

.v-data-table {
  white-space: nowrap;
}

.v-data-table__wrapper {
  overflow-x: auto !important;
}
</style>
