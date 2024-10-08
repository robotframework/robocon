<template>
  <a
    :href="props.href"
    target="_blank"
    :aria-label="props.sponsorName"
    class="sponsor"
    :class="props.sponsorTier.toLowerCase()">
    <img :src="props.sponsorLogo.fields.file.url as string">
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
  aspect-ratio: 1.7;
  align-content: center;
  width: calc(100% / 5);
  padding: 0.5rem;

  &.gold {
    width: calc(100% / 3);
    padding: 1.5rem;
  }

  &.big {
    max-width: 25rem;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% / 3);
    padding: 0.25rem;
    &.gold {
      width: calc(100% / 2);
      padding: 0.75rem;
    }
  }

  img {
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
    transform: scale(0.98);
    opacity: 0.85;
    transition: transform 0.5s, opacity 0.2s;
  }

  transition: background-color 0.5s, box-shadow 0.5s;
  border-radius: 4px;
  &:hover {
    transition: background-color 0.2s, box-shadow 0.2s;
    background-color: rgba(8, 25, 153, 0.05);
    box-shadow: 0 4px 8px #020d6722;
    &.gold {
      background-color: rgba(8, 25, 153, 0.075);
      box-shadow: 0 4px 8px #020d6744;
    }
    img {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
