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
          @input="handleSearch"
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
          :headers="filteredHeaders"
          :items="filteredCustomers"
          :items-length="totalItems"
          class="elevation-1"
          dense
        >
          <template v-slot:item.actions="{ item }">
            <div v-if="item.source === 'new'">
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
            <div v-else>
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

          <template v-slot:item.name="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for Name -->
              <v-text-field v-model="editedCustomer.name" dense hide-details />
            </div>
            <div v-else>
              {{ item.name }}
            </div>
          </template>

          <template v-slot:item.mobile_number="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.mobile_number"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.mobile_number }}
            </div>
          </template>
          <template v-slot:item.address="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <!-- Editable text field for mobile1 -->
              <v-text-field
                v-model="editedCustomer.address"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.address }}
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
          <template v-slot:item.status="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <v-text-field
                v-model="editedCustomer.status"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.status }}
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

          <!-- Display Tags Normally or Edit Mode -->
          <template v-slot:item.tags="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <TagComponent
                :theTags="editedCustomer.tags"
                @tagSelectionChanged="handleTagSelectionChanged"
              />
            </div>
            <div v-else>
              <v-chip
                v-for="(tag, index) in item.tags"
                :key="index"
                color="yellow"
                class="mr-2 mb-2"
                small
              >
                {{ tag }}
              </v-chip>
            </div>
          </template>
          <template v-slot:item.comments="{ item }">
            <div v-if="editedCustomer && editedCustomer.id === item.id">
              <v-text-field
                v-model="editedCustomer.comments"
                dense
                hide-details
              />
            </div>
            <div v-else>
              {{ item.comments }}
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </v-main>
</template>

<script>
import TagComponent from "../components/Tagcomponents.vue";
import axios from "axios";

export default {
  components: {
    TagComponent,
  },
  data() {
    return {
      searchQuery: "",
      isSearchResult: false,
      totalItems: 10,
      itemsPerPage: 10,
      customers: [],
      filteredCustomers: [],
      editedCustomer: null,
      loading: false,

      // Custom Headers with Display Names
      headers: [
        { title: "Name", key: "name", visibility: "", show: "false" },
        { title: "Mobile", key: "mobile_number" },
        { title: "Address", key: "address" },
        { title: "Area", key: "area" },
        { title: "Status", key: "status" },
        { title: "City", key: "city" },
        { title: "Postal Code", key: "pincode" },
        { title: "Tag", key: "tags" },
        { title: "Comments", key: "comments" },
        { title: "PID", key: "pid" },
        { title: "Verified", key: "verified" },
        { title: "Chit", key: "chit" },
        { title: "Actions", key: "actions" },
      ],
    };
  },

  created() {
    this.fetchCustomers();
    // this.handleSearch();
  },
  computed: {
    filteredResultsWithChitDisplay() {
      return this.filteredCustomers.map((customer) => {
        return {
          ...customer,
          chitDisplay: customer.source ? "Yes" : "No", // Add chitDisplay based on source
        };
      });
    },
    // Compute headers dynamically based on isSearchResult flag
    filteredHeaders() {
      return this.headers.filter((header) => {
        if (header.key === "chit") {
          // Show chit column only if search result is active
          return this.isSearchResult;
        }
        return true; // Include all other columns
      });
    },
  },
  methods: {
    fetchCustomers() {
      this.loading = true;
      axios
        .get(
          "http://localhost:3000/api/customer/list?limit=10&offset=1&orderby=id&order=desc&status=Active"
        )
        .then((response) => {
          this.customers = response.data.map((customer) => ({
            // Transform the API response to match custom headers
            name: customer.name,
            mobile_number: customer.mobile_number,
            address: customer.address,
            area: customer.area,
            status: customer.status,
            created_at: customer.created_at,
            created_by: customer.created_by,
            updated_at: customer.updated_at,
            updated_by: customer.updated_by,
            city: customer.city,
            pincode: customer.pincode,
            tags: customer.tags,
            comments: customer.comments,
            pid: customer.pid,
            verified: customer.verified,
            id: customer.id, // Ensure 'id' is included for row identification
          }));
          this.filteredCustomers = this.customers;
          this.isSearchResult = false; // Data from getAllCustomers, no chit column
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleTagSelectionChanged(newTags) {
      if (this.editedCustomer) {
        this.editedCustomer.tags = newTags; // Update tags on edit mode
      }
    },
    addTag() {
      const trimmedTag = this.newTag.trim();
      if (trimmedTag && !this.theTags.includes(trimmedTag)) {
        this.$emit("tagSelectionChanged", [...this.theTags, trimmedTag]);
        this.newTag = "";
      }
    },
    removeTag(index) {
      const updatedTags = [...this.theTags];
      updatedTags.splice(index, 1);
      this.$emit("tagSelectionChanged", updatedTags);
    },
    async deleteCustomer(item) {
      const Customer = JSON.parse(JSON.stringify(item));
      console.log("Customer", Customer);

      console.log("item", item.id);

      if (!confirm(`Are you sure you want to delete customer ${item.name}?`)) {
        return;
      }

      try {
        const url = `http://localhost:3000/api/customer/delete/${item.id}`;
        const response = await axios.post(url);

        // If the deletion is successful
        if (response.status === 201) {
          // Remove the customer from the table
          this.customers = this.customers.filter(
            (customer) => customer.id !== item.id
          );
          this.filteredCustomers = this.filteredCustomers.filter(
            (customer) => customer.id !== item.id
          );

          alert("customerDeleted"); // If needed, emit an event to notify parent components
          this.editedCustomer = null;
        }
      } catch (error) {
        console.error("Error deleting customer:", error);
        alert(
          "An error occurred while deleting the customer. Please try again."
        );
      }
    },
    async handleSearch() {
      const query = this.searchQuery.trim();
      console.log(query, "query");

      // Check if search query is empty
      if (!query) {
        this.filteredCustomers = this.fetchCustomers(); // Show all customers if query is empty
        this.editedCustomer = null;

        return;
      }

      try {
        // Make an API call to fetch search results
        const response = await axios.get(
          `http://localhost:3000/api/customer/search?searchtext=${query}`
        );
        console.log("searchResponse", response.data.data);

        // Check if the response is successful and contains data
        if (response.status === 200 && response.data.data) {
          this.filteredCustomers = response.data.data.map((customer) => {
            return {
              ...customer,
              chit: customer.source === "existing" ? "No" : "Yes", // Add chitDisplay based on source
            };
          }); // Update filteredCustomers with search results
          this.isSearchResult = true; // Data from search, chit column should be shown
        } else {
          console.error("Unexpected status code:", response.status);
        }
      } catch (error) {
        console.error(
          "Error fetching search results:",
          error.response ? error.response.data : error.message
        );
      }
    },

    startEditing(item) {
      this.editedCustomer = JSON.parse(JSON.stringify(item)); // Clone the selected row data for editing
    },
    async saveCustomer() {
      if (!this.editedCustomer) return; // Ensure there's an edited customer

      try {
        const { id } = this.editedCustomer; // Get the ID of the customer to be updated

        const payload = {
          name: this.editedCustomer.name,
          address: this.editedCustomer.address,
          area: this.editedCustomer.area,
          city: this.editedCustomer.city,
          mobile_number: this.editedCustomer.mobile_number,
          pincode: this.editedCustomer.pincode,
          status: this.editedCustomer.status,
          tags: this.editedCustomer.tags,
          comments: this.editedCustomer.comments,
          pid: this.editedCustomer.pid,
          verified: this.editedCustomer.verified,
        };
        console.log("payload", payload);

        const url = `http://localhost:3000/api/customer/edit/${id}`;
        const response = await axios.post(url, payload, {
          headers: {
            "Content-Type": "application/json", // Ensure the correct Content-Type
          },
        });
        console.log("res", response);

        // Handle the response and update the UI
        // if (response.status === 201) {
        //   this.fetchCustomers();

        //   this.editedCustomer = null;
        // } else {
        //   console.log("Unexpected status code:", response.status);
        // }
        if (response.status === 201) {
          // Find the index of the customer being edited and update it
          console.log("Save button Clicked");
          const query = this.searchQuery.trim();

          const index = this.customers.findIndex(
            (customer) => customer.id === id
          );
          if (index !== -1) {
            this.customers.splice(index, 1, this.editedCustomer);
          }
          if (!query) {
            this.filteredCustomers = this.fetchCustomers(); // Show all customers if query is empty
            this.editedCustomer = null;

            return;
          } else {
            this.filteredCustomers = this.handleSearch();
            this.editedCustomer = null;
          }

          this.filteredCustomers = this.customers; // Refresh filtered data
          this.editedCustomer = null; // Reset the editing state
        }
      } catch (error) {
        console.error("Error updating customer:", error);
      }
    },
    cancelEdit() {
      this.editedCustomer = null; // Reset the edit state
    },
  },
};
</script>

<style scoped>
.v-main {
  padding: 2em;
}
.v-card-title .v-col {
  max-width: 600px;
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
.v-card-title h2 {
  margin: 0;
  font-weight: bold;
}
.v-btn {
  margin-right: 8px;
}
</style>
