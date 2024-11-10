<template>
  <div class="container">
    <div class="row center type-center" style="margin-top: 10rem">
      <div class="col-sm-12">
        <h3>404 - Not found</h3>
      </div>
      <!-- <img v-if="isDarkMode" :src="`/img/RF-white.svg`" /> -->
      <img :src="`/img/RF.svg`" class="mt-small" />
      <div class="col-sm-12 mt-medium">
        <router-link :to="{ path: '/' }">
          Back to home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data: () => ({
    isDarkMode: false
  }),
  created() {
    this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}
</script>
