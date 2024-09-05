<template>
  <page-section :data="store.getMainTickets2025" :activeView="activeView" :isResponsiveContainer="false" />
  <div class="content-wrapper d-flex align-center mt-2 mb-3">
    <v-btn color="secondary" to="ticket" class="jumbo-btn h-3xl mx-auto">
      Find out more
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useGlobalStore } from '@/store/modules';

const activeView = ref("in_person_card_2025")
const store = useGlobalStore()

</script>

<style scoped lang="scss">
.slider-row {
  overflow: hidden;
}
</style>