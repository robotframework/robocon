<template>
  <div class="sections-container" :key="page.fields.pageName">
    <RichTextRenderer
      :document="page.fields.pageBody"
      :nodeRenderers="renderNodes()"
      :markRenderers="renderMarks()" />
  </div>
</template>

<script setup lang="ts">

import RichTextRenderer from 'contentful-rich-text-vue-renderer';

import { useStore } from '../store';

import { useRoute } from 'vue-router'
import { renderNodes, renderMarks } from 'Content/renderContent';


const store = useStore()
const route = useRoute()

const page = store.pages.find((page) => page.fields.slug as unknown as string === route.path)
console.log(page)

</script>

<style>
.sections-container > div:nth-child(2n) {
  background-color: var(--color-background-secondary);
}
</style>
