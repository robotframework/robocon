<template>
  <article class="card p-medium">
    <div class="subtitle">
      {{ fields.subTitle }}
    </div>
    <h1>{{ fields.title }}</h1>
    <RichTextRenderer
      :document="fields.content"
      :nodeRenderers="renderNodes()"
      :markRenderers="renderMarks()" />
  </article>
</template>

<script setup lang="ts">
import type { Card } from '@/content';
import type { PropType } from 'vue';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { renderNodes, renderMarks } from 'Content/renderContent';

const props = defineProps({
  fields: Object as PropType<Card['fields']>
})
</script>

<style scoped>
.subtitle {
  min-height: 1rem;
  line-height: 1;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-grey-dark);
  font-weight: 600;
}
h1 {
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
}
:deep(ul) {
  padding-left: 0;
}
:deep(li) {
  font-size: 0.875rem;
}
:deep(p) {
  font-size: 0.875rem;
}
</style>
