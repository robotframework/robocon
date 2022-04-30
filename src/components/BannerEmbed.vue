<template>
  <div class="row middle bg-black">
    <transition appear name="opacity-slow">
      <div class="col-sm-12 type-center mt-large">
        <h1>WELCOME</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BannerEmbed'
}
</script>

<style>

  .rbcn-container {
    max-width: 34.3rem;
    min-height: 8.1rem;
    filter: drop-shadow(0 0 0.45rem var(--color-theme));
  }
  @media screen and (max-width: 34.3rem) {
    .rbcn-container {
      width: calc(100% - 2rem);
      min-height: 6rem;
    }
  }
  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 20vw !important;
    }
  }
  .glow-white {
    text-shadow:
      0 0 0.5rem #fff,
      0 0 1rem #fff,
      0 0 2rem #fff,
      0 0 4rem #fff;
  }
</style>
