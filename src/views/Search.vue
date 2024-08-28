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
          v-model:items-per-page="itemsPerPage"
          :fixed-header="headers"
          :items="searchQuery ? filteredCustomers : customers"
          :items-length="totalItems"
          class="elevation-1"
          dense
        >
          <template v-slot:item.actions="{ item }">
            <div v-if="item.chit !== 'yes'">
              <!-- Show buttons only if chit is not 'yes' -->
              <div v-if="editedCustomer && editedCustomer.id === item.id">
                <!-- Editable mode -->
                <v-btn color="success" small @click="saveCustomer(item)"
                  >Save</v-btn
                >
                <v-btn color="grey" small @click="cancelEdit">Cancel</v-btn>
              </div>
              <div v-else>
                <!-- Default mode -->
                <v-btn color="primary" small @click="startEditing(item)"
                  >Edit</v-btn
                >
                <v-btn color="red" small @click="deleteCustomer(item)"
                  >Delete</v-btn
                >
              </div>
            </div>
          </template>

          <template v-slot:item.Name="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for Name -->
              <v-text-field v-model="editedCustomer.Name" dense hide-details />
            </div>
            <div v-else>
              {{ item.Name }}
            </div>
          </template>
          <template v-slot:item.mobile1="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.mobile1"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.mobile1 }}
            </div>
          </template>
          <template v-slot:item.mobile2="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.mobile2"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.mobile2 }}
            </div>
          </template>
          <template v-slot:item.address1="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.address1"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.address1 }}
            </div>
          </template>

          <template v-slot:item.address2="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.address2"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.address2 }}
            </div>
          </template>

          <template v-slot:item.area="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field v-model="editedCustomer.area" dense hide-details />
            </div>
            <div v-else>
              {{ item.area }}
            </div>
          </template>

          <template v-slot:item.city="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field v-model="editedCustomer.city" dense hide-details />
            </div>
            <div v-else>
              {{ item.city }}
            </div>
          </template>

          <template v-slot:item.pincode="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.pincode"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.pincode }}
            </div>
          </template>

          <template v-slot:item.tag="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field v-model="editedCustomer.tag" dense hide-details />
            </div>
            <div v-else>
              {{ item.tag }}
            </div>
          </template>
          <template v-slot:item.comment="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.comment"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.comment }}
            </div>
          </template>
          <template v-slot:item.pid="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field v-model="editedCustomer.pid" dense hide-details />
            </div>
            <div v-else>
              {{ item.pid }}
            </div>
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
      totalItems: 10,
      itemsPerPage: 5,
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
          chit: "yes",
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
          chit: "no",
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
          chit: "yes",
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
          chit: "yes",
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
          chit: "no",
          actions: "",
        },
        {
          id: 6,
          Name: "Kishore",
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
          chit: "yes",
          actions: "",
        },
        {
          id: 7,
          Name: "Sanjai",
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
          chit: "no",
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
        { text: "CHIT", value: "chit" },
        { text: "ACTIONS", value: "actions" },
      ],
      editedCustomer: null,
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
    startEditing(item) {
      // Clone the item to avoid modifying the original data while editing
      this.editedCustomer = { ...item };
    },
    saveCustomer(item) {
      // Save changes by updating the original customer data
      const index = this.customers.findIndex((c) => c.id === item.id);
      if (index !== -1) {
        this.customers.splice(index, 1, this.editedCustomer);
      }
      // Exit edit mode
      this.editedCustomer = null;
    },
    cancelEdit() {
      // Cancel editing and exit edit mode
      this.editedCustomer = null;
    },
    deleteCustomer(item) {
      // Delete the customer
      this.customers = this.customers.filter((c) => c.id !== item.id);
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
