<template>
  <div class="pb-large m-small">
    <div class="container narrow row middle">
      <transition appear name="opacity-slow">
        <div class="col-sm-12" style="transition-delay: 0.25s">
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style></style>
