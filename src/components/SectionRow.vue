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
  --gutter: max(calc((100vw - var(--layout-container-narrow-max-width)) * 0.5), 0rem);
  --row-width: calc(var(--layout-container-narrow-max-width) - 2rem);

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  column-gap: 0.75rem;
  scroll-snap-type: x proximity;
  width: 100vw;
  transform: translateX(calc(var(--gutter) * -1));

  & > div {
    scroll-snap-align: start;
    scroll-margin-inline: max(calc((100vw - var(--row-width) * 1) / 2 + 1rem), 0rem);
  }
  & > div:first-child {
    scroll-snap-align: start;
    margin-left: max(calc((100vw - var(--row-width) * 1) / 2 + 1rem), 0rem);
  }
  & > div:last-child {
    scroll-snap-align: end;
    margin-right: calc((100vw - (var(--row-width) / 3)) / 2 + 1rem);
    scroll-margin-right: 0;
  }
  @media screen and (max-width: 701px) {
    & > div {
      scroll-snap-align: center !important;
      flex: 0 0 80vw;
    }
  }
}
.item-column {
  flex: 0 0 calc(var(--layout-container-narrow-max-width) / 3);
  scroll-snap-align: start;
  scroll-margin-inline: 1rem;
}
</style>
