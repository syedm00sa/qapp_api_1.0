<template>
  <div>
    <!-- Display Tags with Yellow Background -->
    <v-chip
      v-for="(tag, index) in theTags"
      :key="index"
      color="yellow"
      class="mr-2 mb-2"
      small
    >
      {{ tag }}
      <v-icon right small @click="removeTag(index)" class="ml-1"
        >mdi-close</v-icon
      >
    </v-chip>

    <!-- Input for Adding Tags -->
    <v-text-field
      v-model="newTag"
      @keyup.enter="addTag"
      placeholder="Add a tag and press Enter"
      dense
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    theTags: Array,
  },
  data() {
    return {
      newTag: "", // Store the new tag being added
    };
  },
  methods: {
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
  },
};
</script>
