<template>

  <template v-for="(content, index) in store.getTicketPage2025 ?? []">
    <template v-if="+index === 0">
      <v-sheet :color="+index === 0 ? 'surface' : 'white'" class="pb-2">
        <v-container>
          <page-section :data="content" />
        </v-container>
      </v-sheet>
    </template>

    <template v-else>
      <v-container class="pb-10">
        <page-section :data="content" :hasDescription="true" />
      </v-container>
    </template>
  </template>

</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules';

const store = useGlobalStore();

</script>

<style scoped>
.auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;

}
</style>
