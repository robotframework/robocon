<template>
  <v-col cols="12" md="7" lg="5">
    <div class="d-flex flex-col justify-between ga-10">
      <div class="text-sm-left text-center">
        <slot name="title"></slot>
      </div>

      <div class="d-flex flex-col ga-3 pr-0 pr-md-10">
        <v-btn color="secondary" flat>
          Get ticket now
        </v-btn>
        <v-btn variant="outlined" color="secondary" flat>
          Find out more
        </v-btn>
      </div>
    </div>
  </v-col>
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