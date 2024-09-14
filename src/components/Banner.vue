<template>
  <div class="banner-container">
    <img :src="content.image.fields.file.url as string" class="banner-img">
    <div class="container narrow flex h-100">
      <h1
        class="colo-white font-title"
        style="transition-delay: 0.25s;">
        <span class="color-black" style="padding-right: 2rem;">RBCN</span><span class="color-black">2025</span><br>
        <span class="bg-secondary color-white" style="padding-right: 2rem;">FROM</span><span class="bg-secondary color-white">FINLAND</span><br>
        <span class="color-black" style="padding-right: 2rem;">WITH</span><span class="color-black">LOVE</span><br>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Banner } from '@/content';
import type { PropType } from 'vue';

const props = defineProps({
  content: Object as PropType<Banner['fields']>
})

</script>

<style scoped>
.banner-container {
  height: min(30rem, 40vh);
  position: relative;
  overflow: hidden;
}
h1 {
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: -0.25rem;
  color: black;
  line-height: 1.25;

  span {
    padding-bottom: 0.25rem;
    padding-inline: 0.5rem;
  }
}
@media screen and (max-width: 701px) {
  h1 {
    font-size: 12.5vw;
  }
}
.container {
  position: relative;
  align-items: center;
}
.banner-img {
  height: 110%;
  width: 100%;
  position: absolute;
  top: -5%;
  object-fit: cover;
  filter: blur(3px) brightness(1.3) contrast(0.7) saturate(0.5) opacity(0.5);
}
</style>
