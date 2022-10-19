<template>
  <div class="banner-slide">
    <div class="type-center p-xsmall color-white bg-black banner">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .banner {
    border-top: 1px solid var(--color-theme);
    border-bottom: 1px solid var(--color-theme);
  }
  .banner-slide {
    top: 0;
    width: 100%;
  }
</style>
