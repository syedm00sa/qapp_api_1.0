<template>
  <div>
    <v-chip v-for="(tag, index) in theTags" :key="index" color="blue" close>
      {{ tag }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    theTags: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addTag() {
      const newTag = prompt("Enter a new tag:");
      if (newTag) {
        const updatedTags = [...this.theTags, newTag];
        this.$emit("tagSelectionChanged", updatedTags);
      }
    },
    removeTag(index) {
      const updatedTags = this.theTags.filter((_, i) => i !== index);
      this.$emit("tagSelectionChanged", updatedTags);
    },
  },
};
</script>
