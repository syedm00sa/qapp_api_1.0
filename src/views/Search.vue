<!-- <template>
  <div>
    <h1>Search Customers</h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search customers..."
    />
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Area</th>
          <th>City</th>
          <th>Pincode</th>
          <th>Landline</th>
          <th>Mobile 1</th>
          <th>Mobile 2</th>
          <th>Address 1</th>
          <th>Address 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filteredCustomers" :key="customer.id">
          <td>{{ customer.fullName }}</td>
          <td>{{ customer.area }}</td>
          <td>{{ customer.city }}</td>
          <td>{{ customer.pincode }}</td>
          <td>{{ customer.landline }}</td>
          <td>{{ customer.mobile1 }}</td>
          <td>{{ customer.mobile2 }}</td>
          <td>{{ customer.address1 }}</td>
          <td>{{ customer.address2 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      customers: [
        {
          id: 1,
          fullName: "John Doe",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          landline: "123-456-7890",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
        },
        {
          id: 2,
          fullName: "Jane Smith",
          area: "Area 2",
          city: "City 2",
          pincode: "67890",
          landline: "123-456-7890",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
        },
        // Add more customers as needed
      ],
    };
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter((customer) => {
        return customer.fullName
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 12px;
  border: 1px solid #ddd;
}

thead {
  background-color: #f2f2f2;
}
</style> -->
<template>
  <v-container>
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
    <v-card elevation="2">
      <v-card-title>
        <h2>Customer List</h2>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="filteredCustomers"
        class="elevation-1"
      ></v-data-table>
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
          fullName: "John Doe",
          area: "Area 1",
          city: "City 1",
          pincode: "12345",
          landline: "123-456-7890",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
        },
        {
          id: 2,
          fullName: "Jane Smith",
          area: "Area 2",
          city: "City 2",
          pincode: "67890",
          landline: "123-456-7890",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
        },
        {
          id: 3,
          fullName: "Mariselvam",
          area: "Area 2",
          city: "City 2",
          pincode: "67890",
          landline: "123-456-7890",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
        },
        {
          id: 4,
          fullName: "Karthick",
          area: "Area 2",
          city: "City 2",
          pincode: "67890",
          landline: "123-456-7890",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
        },
        {
          id: 5,
          fullName: "Prakash",
          area: "Area 2",
          city: "City 2",
          pincode: "67890",
          landline: "123-456-7890",
          mobile1: "987-654-3210",
          mobile2: "876-543-2109",
          address1: "Address 1",
          address2: "Address 2",
        },
        // Add more customers as needed
      ],
    };
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter((customer) => {
        return customer.fullName
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}

/* .v-data-table {
  margin-bottom: 20px;
} */
</style>
