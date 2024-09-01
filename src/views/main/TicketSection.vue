<template>
  <page-section :data="store.getMainTickets2025" :activeView="activeView" :isResponsiveContainer="false" />
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules';
import { ref } from 'vue';

const activeView = ref("in_person_card_2025")
const store = useGlobalStore()

</script>

<style scoped lang="scss">
.slider-row {
  overflow: hidden;
}
</style>