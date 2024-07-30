<template>
  <div>
    <h1>Home</h1>
    <CustomerDropdown @customer-selected="handleCustomerSelected" />
  </div>
</template>

<script>
import CustomerDropdown from "@/CustomerDropdown.vue";

export default {
  components: {
    CustomerDropdown,
  },
  methods: {
    handleCustomerSelected(customer) {
      this.$router.push(`/customer/${customer.id}`);
    },
  },
};
</script>
