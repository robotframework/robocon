<template>

  <!-- <a class="anchor" :id="anchorName"></a> -->
  <v-container class="pt-15">
    <v-row>
      <h2>{{ title }}</h2>
    </v-row>
    <v-row>
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script>
import { useGlobalStore } from '../store';
import { mapState } from 'pinia';

export default {
  name: 'PageSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String
    },
    body: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      required: true
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(useGlobalStore, ['isMobile']),
    anchorName() {
      return this.title?.replaceAll(' ', '-').toLowerCase()
    }
  }
}
</script>

<style scoped>
a.anchor {
  display: block;
  position: relative;
  top: -15vh;
  visibility: hidden;
}

h2::before {
  display: block;
  content: " ";
  margin-top: -50px;
  height: 50px;
  visibility: hidden;
  pointer-events: none;
}

@media screen and (max-width: 1280px) {
  h2::before {
    margin-top: -80px;
    height: 80px;
  }
}
</style>
