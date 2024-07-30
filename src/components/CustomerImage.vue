<template>
  <div class="customer-image">
    <svg viewBox="0 0 100 100" width="200" height="200">
      <!-- Sample SVG content -->
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="3"
        fill="lightblue"
      />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        stroke="#51c5cf"
        stroke-width="1px"
        dy=".3em"
      >
        {{ customerName }}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["customerName"],
};
</script>

<style scoped>
.customer-image {
  text-align: center;
  margin-top: 20px;
}
</style>
