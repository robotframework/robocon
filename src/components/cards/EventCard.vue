<script setup lang="ts">
import { PropType } from 'vue';

type Styling = 'primary' | 'secondary'
defineProps({
  title: String,
  description: String,
  styling: String as PropType<Styling>
})

</script>

<template>
  <v-col cols="12" sm="4">
    <v-card elevation="2" rounded="md">

      <div style="height: 240px; width: 240px;"></div>

      <v-card-item class="pt-0">
        <h4 class="text-h5" v-text="title" :class="styling === 'secondary' ? 'text-white' : 'text-primary'"></h4>
        <div class="d-flex align-center justify-space-between mt-1">
          <div>
            <span :class="[
              styling === 'secondary' ? 'text-white' : 'text-black', 'text-body-1 text-medium-emphasis']"
              v-text="description"></span>
          </div>
          <div class="d-flex justify-end">
            <v-btn size="xs" variant="text" :color="styling === 'secondary' ? 'white' : 'secondary'" class="d-flex">
              more
            </v-btn>
          </div>
        </div>
      </v-card-item>
    </v-card>
  </v-col>
</template>
