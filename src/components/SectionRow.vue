<template>
  <div class="section-row">
    <div
      v-for="item in components"
      class="item-column">
      <component :is="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Row } from '@/content';
import { renderEntryList } from 'Content/renderContent';
import type { PropType } from 'vue';

const props = defineProps({
  content: Array as PropType<Row['fields']['content']>
})
const components = renderEntryList(props.content)
</script>

<style scoped>
.section-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  column-gap: 1rem;
}
.item-column {
  flex: 0 0 calc(100% / 3);
}
@media screen and (max-width: 1024px) {
  .item-column {
    flex: 0 0 20rem;
  }
}
@media screen and (max-width: 800px) {
  .item-column {
    flex: 0 0 80vw;
  }
}
</style>
