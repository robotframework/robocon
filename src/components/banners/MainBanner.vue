<template>
  <div class="banner-wrapper">
    <div class="text-sm-left text-center">
      <slot name="title"></slot>
    </div>

    <div class="d-flex flex-column ga-3">
      <v-btn color="secondary" class="mr-0 mr-sm-5 d-sm-flex d-block btn-100" size="large" flat>
        Get ticket now
      </v-btn>
      <v-btn size="large" to="/" class="d-sm-flex d-block w-120" variant="outlined" color="secondary" flat>
        Find out more
      </v-btn>
    </div>


  </div>
</template>


<script>
export default {
  name: "Banner",
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped>
.banner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2.4rem 2rem;
}
</style>