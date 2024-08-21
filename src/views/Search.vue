<template>
  <v-main>
    <v-card class="mb-5" elevation="2">
      <v-card-title>
        <v-text-field
          v-model="searchQuery"
          label="Search customers"
          append-icon="mdi-magnify"
          single-line
          hide-details
          outlined
        ></v-text-field>
      </v-card-title>
    </v-card>

    <v-card class="mb-5" elevation="2">
      <v-card-title class="pb-0">
        <h2>Manage Customers</h2>
      </v-card-title>
      <v-divider></v-divider>
      <div class="table-wrapper">
        <v-data-table
          :fixed-header="headers"
          :items="searchQuery ? filteredCustomers : customers"
          class="elevation-1"
          dense
        >
          <template v-slot:item.actions="{ item }">
            <v-btn color="primary" small @click="editCustomer(item)"
              >Edit</v-btn
            >
            <v-btn color="red" small @click="deleteCustomer(item)"
              >Delete</v-btn
            >
          </template>
        </v-data-table>
      </div>
    </v-card>
  </v-main>
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
          actions: "",
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
          actions: "",
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
          actions: "",
        },
        {
          id: 4,
          Name: "Mahesh",
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
          actions: "",
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
          actions: "",
        },
        // Add more customers here
      ],
      headers: [
        { text: "NAME", value: "Name" },
        { text: "MOBILE 1", value: "mobile1" },
        { text: "MOBILE 2", value: "mobile2" },
        { text: "ADDRESS 1", value: "address1" },
        { text: "ADDRESS 2", value: "address2" },
        { text: "AREA", value: "area" },
        { text: "CITY", value: "city" },
        { text: "PINCODE", value: "pincode" },
        { text: "TAG", value: "tag" },
        { text: "COMMENT", value: "comment" },
        { text: "PID", value: "pid" },
        { text: "ACTIONS", value: "actions" },
      ],
    };
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter((customer) =>
        customer.Name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    editCustomer(customer) {
      console.log("Editing customer", customer);
    },
    deleteCustomer(customer) {
      this.customers = this.customers.filter((c) => c.id !== customer.id);
      console.log("Deleted customer", customer);
    },
  },
};
</script>

<style scoped>
.v-main {
  padding: 2em;
}
.v-card-title .v-col {
  max-width: 600px; /* Adjust width as needed */
  width: 100%;
}

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

.v-card {
  width: "100%";
}

.v-card-title h2 {
  margin: 0;
  font-weight: bold;
}

.v-btn {
  margin-right: 8px;
}
</style>
