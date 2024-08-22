<template>
  <div>
    <v-container>
      <v-row>
        <h2>{{ props.title }}</h2>
      </v-row>
      <v-row>
        <slot></slot>
      </v-row>
    </v-container>
  </div>
</template>


<script setup>
import { useGlobalStore } from '@/store';
import { mapState } from 'pinia';

const props = defineProps({
  titleId: {
    type: String,
    required: true
  },
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
  fullWidth: {
    type: Boolean,
    default: false
  },
  bg: {
    type: String
  }
})

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
