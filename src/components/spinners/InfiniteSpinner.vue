<template>
  <v-progress-circular :width="props.width" :size="props.size" :color="props.color" :indeterminate="indeterminate"
    class="text-center">
    <template v-slot:default> {{ loadingText }} </template>
  </v-progress-circular>
</template>


<script setup lang="ts">

const props = defineProps({
  loadingText: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: "primary"
  },
  width: {
    type: Number,
    default: 3
  },
  size: {
    type: Number,
    default: 10
  },
  indeterminate: {
    type: Boolean,
    default: true
  },
})
</script>