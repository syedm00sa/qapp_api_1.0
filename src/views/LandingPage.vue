<template>
  <CustomerDropdown />
  <v-container>
    <!-- <v-row justify="end" align="center">
      <v-col cols="auto">
        <v-select
          v-model="selectedCustomer"
          :items="customers"
          item-text="fullName"
          label="Select Customer"
          class="mr-4"
        ></v-select>
      </v-col>
      <v-col cols="auto">
        <v-icon color="black">mdi-account</v-icon>
      </v-col>
    </v-row> -->

    <!-- <div class="customer-dropdown">
      <span class="person-icon">👤</span>
      <div class="dropdown">
        <input
          type="text"
          @focus="toggleDropdown"
          placeholder="Select Customer"
          readonly
        />
        <span class="caret">&#9662;</span>
        <div v-if="showDropdown" class="dropdown-menu">
          <ul>
            <li
              v-for="customer in customers"
              :key="customer.id"
              @click="selectCustomer(customer)"
            >
              {{ customer.fullName }}
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <v-row>
      <v-col
        v-for="customer in customers"
        :key="customer.id"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card @click="goToSearch(customer)">
          <v-card-title>
            <v-avatar :color="customer.color" size="40">
              <span>{{ customer.initials }}</span>
            </v-avatar>
            <span class="ml-3">{{ customer.fullName }}</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomerDropdown from "@/CustomerDropdown.vue";
export default {
  components: {
    CustomerDropdown,
  },
  data() {
    return {
      showDropdown: false,
      selectedCustomer: null,
      customers: [
        { id: 1, fullName: "John Doe", initials: "JD", color: "red" },
        { id: 2, fullName: "Jane Smith", initials: "JS", color: "blue" },
        { id: 3, fullName: "Sam Johnson", initials: "SJ", color: "green" },
        // More customer objects...
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectCustomer(customer) {
      this.selectedCustomer = customer;
      this.$emit("customer-selected", customer);
      this.showDropdown = false;
    },
    goToSearch(customer) {
      this.$router.push({
        name: "search",
        params: { customerId: customer.id },
      });
    },
  },
};
</script>

<style scoped>
.v-card {
  cursor: pointer;
  margin-bottom: 20px;
}
.v-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: white;
}
.ml-3 {
  margin-left: 1rem;
}
.customer-dropdown {
  display: flex;
  align-items: center;
  position: relative;
}

.person-icon {
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

input[type="text"] {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.caret {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 8px 16px;
  cursor: pointer;
}

li:hover {
  background-color: #f0f0f0;
}
</style>
