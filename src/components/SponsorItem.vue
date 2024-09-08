<template>
  <a
    :href="props.href"
    target="_blank"
    :aria-label="props.sponsorName"
    class="sponsor"
    :class="props.sponsorTier">
    <img :src="props.sponsorLogo.fields.file.url">
  </a>
</template>

<script setup lang="ts">
import type { Asset } from 'contentful';
import type { PropType } from 'vue';


const props = defineProps({
  sponsorName: String,
  sponsorTier: String,
  href: String,
  sponsorLogo: Object as PropType<Asset>
})

</script>

<style scoped>
.sponsor {
  display: inline-block;
  max-width: 15rem;

  &.big {
    max-width: 25rem;
  }

  & > img {
    width: 100%;
    display: block;
  }
}
</style>
