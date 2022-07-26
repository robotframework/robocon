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
    top: 3.5rem;
  }
  .banner-slide {
    position: absolute;
    top: 0;
    width: 100%;
    height: 20rem;
  }
</style>
