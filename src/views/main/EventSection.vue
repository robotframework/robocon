<template>

  <page-section :data="store.getMainEvents2025" :activeView="activeView">
    <template #header>
      <div class="d-flex justify-between align-center flex-wrap ga-3 mb-3">
        <h1 class="section-title offset text-secondary">Events</h1>
        <v-btn-toggle rounded="xs" v-model="activeView" color="#0032a3" base-color="grey" density="compact"
          class="w-max-content">
          <v-btn value="in_person">In Person</v-btn>
          <v-btn value="online">Online</v-btn>
        </v-btn-toggle>
      </div>
    </template>
  </page-section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useGlobalStore } from '@/store/modules';

const activeView = ref("in_person")
const store = useGlobalStore()

</script>

<style scoped>
.offset {
  width: calc(100% - 230px);

  @media screen and (max-width: 390px) {
    width: 100%;
  }
}
</style>
