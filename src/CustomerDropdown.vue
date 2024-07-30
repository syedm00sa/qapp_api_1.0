<template>
  <div class="customer-dropdown">
    <span class="person-icon" @click="navigateToCustomer">👤</span>
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
            {{ customer.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      customers: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Sam Johnson" },
      ],
      selectedCustomer: null,
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
    navigateToCustomer() {
      if (this.selectedCustomer) {
        this.$router.push(`/customer/${this.selectedCustomer.id}`);
      }
    },
  },
};
</script>

<style scoped>
.customer-dropdown {
  display: flex;
  justify-content: flex-end;
  align-items: end;
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
<!-- <template>
  <div class="customer-dropdown">
    <span class="person-icon" @click="navigateToCustomer">👤</span>
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
            {{ customer.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      customers: [
        { id: 1, name: "Customer 1" },
        { id: 2, name: "Customer 2" },
        { id: 3, name: "Customer 3" },
      ],
      selectedCustomer: null,
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
    navigateToCustomer() {
      if (this.selectedCustomer) {
        this.$router.push(`/customer/${this.selectedCustomer.id}`);
      }
    },
  },
};
</script>

<style scoped>
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
</style> -->
