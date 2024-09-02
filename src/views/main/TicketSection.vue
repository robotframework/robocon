<template>
  <page-section :data="store.getMainTickets2025" :activeView="activeView" :isResponsiveContainer="false" />
  <v-container>
    <v-responsive class="content-wrapper h-3xl">
      <v-btn color="secondary" to="ticket" class="w-100 h-2xl">
        Find out more
      </v-btn>
    </v-responsive>
  </v-container>
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