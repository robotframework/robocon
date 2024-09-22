<template>
  <div class="columns-container row gap-sm mt-large">
    <div class="col-sm-12 col-md-6">
      <RichTextRenderer
        :document="left"
        :nodeRenderers="renderNodes()"
        :markRenderers="renderMarks()" />
    </div>
    <div class="col-sm-12 col-md-6">
      <RichTextRenderer
        :document="right"
        :nodeRenderers="renderNodes()"
        :markRenderers="renderMarks()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Document } from "@contentful/rich-text-types";
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { renderNodes, renderMarks } from 'Content/renderContent';

defineProps({
  left: Object as PropType<Document>,
  right: Object as PropType<Document>
})
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .columns-container {
    flex-wrap: nowrap;
  }
}
</style>
