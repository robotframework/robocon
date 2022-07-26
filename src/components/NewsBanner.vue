<template>
  <div class="banner-slide">
    <div class="type-center p-small color-white bg-black banner">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .banner {
    position: sticky;
    top: 3.74rem;
    border-top: 0.2rem solid var(--color-theme);
    border-bottom: 0.2rem solid var(--color-theme);
  }
  .banner-slide {
    top: 0;
    width: 100%;
  }
</style>
