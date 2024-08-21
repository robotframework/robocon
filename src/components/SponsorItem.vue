<template>
  <a :href="href" :aria-label="name" class="sponsor" :class="important && 'big'">
    <img :src="src">
  </a>
</template>

<script setup lang="ts">

const props = defineProps({
  href: String,
  name: String,
  src: String,
  important: Boolean
})

</script>

<style scoped>
.sponsor {
  display: inline-block;
  max-width: 15rem;

  &.big {
    max-width: 25rem;
  }

  &>img {
    width: 100%;
    display: block;
  }
}
</style>
