<template>
  <v-main>
    <v-card class="mb-2" elevation="2">
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
    <v-card class="mb-5" elevation="0">
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
          class="elevation-1 custom-table"
          dense
        >
          <template v-slot:item.tags="{ item }">
            <div v-if="item.tags && item.tags.length > 0 && item.tags.some(tag => tag.trim() !== '')">
              <div v-if="editedCustomer && editedCustomer.id === item.id">
                <UiTagShow
                  :theTags="item.tags  || []"
                  @tagSelectionChanged="handleTagSelectionChanged"
                />
              </div>
              <div v-else class="nameaddress-text">
                <v-chip
                  v-for="(tag, index) in item.tags"
                  :key="index"
                  color="blue"
                  class="mr-2 mb-2"
                  small
                >
                  {{ tag }}
                </v-chip>
              </div>
            </div>
          </template>
          <template v-slot:item.actions="{ item }">
            <div class="button" v-if="item.chit !== 'Yes'"> 
              <v-btn color="primary" small @click="openEditDialog(item)">
                <v-icon left>mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="red" small @click="deleteCustomer(item)">
                <v-icon left>mdi-delete</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>
    <!-- Edit Dialog -->
    <v-dialog v-model="editDialog" max-width="600px">
      <v-card v-if="editedCustomer">
        <v-card-title>
          <span class="text-h6">Edit Customer</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row dense>
              <!-- Editable fields -->
              <v-col
                cols="12"
                sm="6"
                v-for="(field, key) in editableFields"
                :key="key"
              >
                <v-text-field
                  v-model="editedCustomer[field.key]"
                  :label="field.label"
                  dense
                ></v-text-field>
              </v-col>

              <!-- TagComponent -->
              <v-col cols="12">
                <TagComponent
                  :theTags="editedCustomer.tags"
                  @tagSelectionChanged="handleTagSelectionChanged"
                />
              </v-col>
              <!-- Verified checkbox -->
              <v-col cols="12">
                <v-radio-group v-model="editedCustomer.verified" row dense>
                  <v-radio label="Yes" value="Yes"></v-radio>
                  <v-radio label="No" value="No"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="saveCustomer">Save</v-btn>
          <v-btn color="red darken-1" text @click="cancelEdit">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import TagComponent from "../components/Tagcomponents.vue";
import UiTagShow from "../components/UiTagShow.vue";
import axios from "axios";

export default {
  props: {
    theTags: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TagComponent,
    UiTagShow,
  },
  data() {
    return {
      searchQuery: "",
      isSearchResult: false,
      itemsPerPage: 10,
      customers: [],
      filteredCustomers: [],
      editedCustomer: null,
      loading: false,

      editDialog: false, // Controls the visibility of the dialog
      editedCustomer: {
        name: "",
        mobile_number: "",
        address: "",
        area: "",
        city: "",
        pincode: "",
        pid: "",
        comments: "",
        verified: "",
        tags: [],
      },
      editableFields: [
        { key: "name", label: "Name" },
        { key: "mobile_number", label: "Mobile Number" },
        { key: "address", label: "Address" },
        { key: "area", label: "Area" },
        { key: "city", label: "City" },
        { key: "pincode", label: "Pin Code" },
        { key: "pid", label: "PID" },
        { key: "comments", label: "Comments" },
      ],

      // Custom Headers with Display Names
      headers: [
        { title: "Name", key: "name" },
        { title: "Mobile", key: "mobile_number" },
        { title: "Address", key: "address" },
        { title: "Area", key: "area" },
        { title: "City", key: "city" },
        { title: "Pin Code", key: "pincode" },
        { title: "Comments", key: "comments" },
        { title: "PID", key: "pid" },
        { title: "Verified", key: "verified" },
        { title: "Chit", key: "chit" },
        { title: "Tag", key: "tags" },
        { title: "Actions", key: "actions" },
      ],
    };
  },

  created() {
    this.fetchCustomers();
    // this.handleSearch();
  },
  computed: {
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
  startEditing(customer) {
    this.editedCustomer = customer
      ? { ...customer, tags: customer.tags || [] } // Clone and ensure `tags` is an array
      : {
          name: "",
          mobile_number: "",
          address: "",
          area: "",
          city: "",
          pincode: "",
          pid: "",
          comments: "",
          verified: "",
          tags: [],
        };
    this.editDialog = true; // Open the dialog
  },

  watch: {
    editDialog(newValue) {
      if (newValue && !this.editedCustomer) {
        this.editedCustomer = {
          name: "",
          mobile_number: "",
          address: "",
          area: "",
          city: "",
          pincode: "",
          pid: "",
          comments: "",
          verified: "",
          tags: [],
        };
      }
    },
  },

  methods: {
    enterEditMode(item) {
      this.editedCustomer = { ...item }; // Copy the item to preserve its original state
    },
    fetchCustomers() {
      this.loading = true;
      axios
        .get(
          "http://localhost:3000/api/customer/list?limit=20&offset=1&orderby=id&order=desc&status=Active",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Get the token from localStorage
            },
          }
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
            tags: customer.tags || [],
            comments: customer.comments,
            pid: customer.pid,
            verified: customer.verified,
            id: customer.id, // Ensure 'id' is included for row identification
          }));
          this.filteredCustomers = this.customers;
          console.log("filteredCustomers", this.filteredCustomers);

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
        const response = await axios.post(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Get the token from localStorage
          },
        });

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
          `http://localhost:3000/api/customer/search?searchtext=${query}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Get the token from localStorage
            },
          }
        );
        console.log("searchResponse", response.data.data);

        // Check if the response is successful and contains data
        if (response.status === 200 && response.data.data) {
          this.filteredCustomers = response.data.data.map((customer) => {
            return {
              ...customer,
              chit: customer.source === "existing" ? "Yes" : "No", // Add chitDisplay based on source
            };
          }); // Update filteredCustomers with search results
          this.isSearchResult = true; // Data from search, chit column should be shown
        } else {
          console.error("Unexpected status code:", response);
        }
      } catch (error) {
        console.error(
          "Error fetching search results:",
          error.response ? error.response.data : error.message
        );
      }
    },
    openEditDialog(item) {
      this.editedCustomer = { ...item }; // Clone the selected customer for editing
      this.editDialog = true; // Open the dialog
    },
    startEditing(item) {
      this.editedCustomer = JSON.parse(JSON.stringify(item)); // Clone the selected row data for editing
    },
    async saveCustomer() {
      if (!this.editedCustomer) return; // Ensure there's an edited customer
      // Save logic
      try {
        const { id } = this.editedCustomer; // Get the ID of the customer to be updated
        const url = `http://localhost:3000/api/customer/edit/${id}`;

        const payload = {
          name: this.editedCustomer.name,
          mobile_number: this.editedCustomer.mobile_number,
          address: this.editedCustomer.address,
          area: this.editedCustomer.area,
          city: this.editedCustomer.city,

          pincode: this.editedCustomer.pincode,
          tags: [...this.editedCustomer.tags],
          comments: this.editedCustomer.comments,
          pid: this.editedCustomer.pid,
          verified: this.editedCustomer.verified,
        };
        console.log("payload", payload);

        const response = await axios.post(url, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("res", response);

        if (response.status === 201) {
          // Update local data
          const index = this.customers.findIndex(
            (customer) => customer.id === this.editedCustomer.id
          );
          if (index !== -1) {
            this.customers[index] = { ...this.editedCustomer };
            this.filteredCustomers = [...this.customers];
          }
          this.editDialog = false; // Close the dialog
        }
      } catch (error) {
        console.error("Error saving customer:", error);
      }
    },
    cancelEdit() {
      this.editedCustomer = null; // Reset edited customer
      this.editDialog = false; // Close the dialog
    },
  },
};
</script>

<style scoped>
/* Wrapping text inside table cells */
.v-data-table td,
.v-data-table th {
  white-space: normal; /* Allows text to wrap */
  word-wrap: break-word; /* Ensures long words wrap */
  overflow-wrap: break-word; /* Modern browser support */
}

/* Main container styling */
.v-main {
  padding: 2em;
}

/* Adjusting card title layout */
.v-card-title .v-col {
  max-width: 400px;
  width: 100%;
}

/* Card spacing */
.v-card {
  margin-bottom: 20px;
}

/* Table wrapper for horizontal scrolling */
.table-wrapper {
  overflow-x: auto;
}

/* Remove conflicting nowrap style */
.v-data-table {
  white-space: normal !important; /* Ensures wrapping takes effect */
}

/* Wrapper adjustments */
.v-data-table__wrapper {
  overflow-x: auto !important;
}

/* Card title styles */
.v-card-title h2 {
  margin: 0;
  font-weight: bold;
}

/* Button styles */
.button {
  display: flex;
}
.v-btn {
  margin-right: 8px;
  min-width: 50px;
}
</style>
