<template>
  <div
    class="mb-xlarge p-small"
    tabindex="-1">
    <a class="anchor" :id="anchorName"></a>
    <div class="bar"></div>
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
import { useStore } from '../store';
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
    ...mapState(useStore, ['isMobile']),
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
  @media screen and (min-width: 1281px) {
    h2 {
      position: sticky;
      top: 2rem;
    }
    h3 {
      position: sticky;
      top: 7.5rem;
    }
  }
</style>
